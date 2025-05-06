import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    console.log('Page not found')
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
      
    </div>
  );
}

export default NotFound;