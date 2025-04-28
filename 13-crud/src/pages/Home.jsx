import React,{useState,useEffect} from 'react'
import {Container,PostCard} from '../component/index'
import ApiService from '../Api/config'
import { useSearchParams } from 'react-router-dom';


export default function Home() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Manage URL params
  const [searchParams, setSearchParams] = useSearchParams();

  const page=Number(searchParams.get('page')) || 1; // Get page number from URL or default to 1

  const sort = searchParams.get('sort') || ''; // Get sort parameter from URL or default to empty string


  const limit =4; // Number of items per page
  
  // console.log("sort : ",sort)
  useEffect(() => {
    ApiService.getAllPost(page,limit,sort).then((res) => {
      // console.log("RESPONSE : ",res)
      setData(res?.blogs || []);
      setTotalPages(res.totalpages || {});

    }).catch((err) => {
      console.log(err);
    });
  }, [page, sort]);

    //pagination logic
  
  function getPaginationPages(current, total) {
    const pages = [];
    
    // Always show first page
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }
  
    pages.push(1); // First page
  
    if (current > 4) pages.push('...');
  
    let start = Math.max(2, current - 2);
    let end = Math.min(total - 1, current + 2);
  
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  
    if (current < total - 3) pages.push('...');
  
    pages.push(total); // Last page
  
    return pages;
  }
  
  const pageNumbers = getPaginationPages(page, totalPages);

  // Handle pagination click
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, sort: sort });
}

  var newSort="";
  
  const handelSortChange = (e) => {

      newSort=(e.target.value);
      console.log("SORT PARAM : ",newSort)
      setSearchParams({ page: 1, sort: newSort });
  }
  


  return (
    <div className='w-full py-8'>
    <Container>
      <div className='flex flex-wrap'>
        {Array.isArray(data) ? (
          data.map((item) => (
            <div key={item._id} className='p-2 w-1/4'>
              <PostCard {...item} blogId={item._id}/>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            No blog posts available
          </p>
        )}
      </div>

              {/* Pagination */}
      {totalPages > 1 && (
        
          <div className="flex justify-center  mt-6 space-x-2">
            <div>
              <div>
              {pageNumbers.map((num, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof num === 'number' && handlePageChange(num)}
                  disabled={num === '...'}
                  className={`px-4 py-2 rounded-md border ${
                    page === num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                  } ${num === '...' ? 'cursor-default' : 'hover:bg-blue-100'}`}
                >
                  {num}
                </button>
              ))}

              </div>

              <div >

                <select 
                onChange={(e)=>handelSortChange(e)} className="bundle-dropdown border mt-7 
                 border-gray-300 rounded-md p-2 text-gray-700"
                 value={sort || "Default"} 
                >
                  <option value="Default">Select Sorting Option</option>
                  <option value="Newest">Newest First</option>
                  <option value="Oldest">Oldest First</option>
                </select>
                
              </div>
            </div>
            
          </div>
        )}

    </Container>
  </div>
  
  
  )
}
