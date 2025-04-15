import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './component/index.js';
import { token1234 } from './key/key.js';
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice.js';


function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use navigate for redirection if needed
  const dispatch = useDispatch(); // Use dispatch for Redux actions if needed
    const token = localStorage.getItem(token1234);
    const userData = JSON.parse(localStorage.getItem('userData')); // Get user data from local storage

  useEffect(() => {
    
    if (token) {
      dispatch(login({
        token: token,
        userData: userData // Replace with actual user data if available
      }));

      setLoading(false); // Finish loading after token check
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
