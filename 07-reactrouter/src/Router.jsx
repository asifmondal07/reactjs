import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './Layout';
import {Home,About,Contact,User, Github,githubLoader} from './components';
import NotFound from './NotFound';
import ErrorPage from './ErrorPage'
// import { githubLoader } from './components/Github/Github';




    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userId" element={<User />} errorElement={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
            <Route 
              loader={githubLoader}
              path="github" 
              element={<Github />}
            />
          </Route>
        )
      )


export default router