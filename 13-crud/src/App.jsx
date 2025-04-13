import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './component/index.js';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use navigate for redirection if needed

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    
    
    if (token) {
      
      setLoading(false); // Finish loading after token check
      navigate('/'); 
    } else {
      setLoading(false); // No token, just stop the loading
      navigate('/login'); // Redirect to login if no token
    }
  }, []); 

  return loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* Here we can render a loading spinner or anything else you want */}
          <div className="flex justify-center items-center min-h-screen">
            <p>Loading...</p>
          </div>
        </main>
      </div>
    </div>
  ) : (
    // After loading is complete, render the main content
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
