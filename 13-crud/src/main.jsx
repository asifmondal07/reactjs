import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home,Login,Signup,AddBlog,Post,EditBlog} from './pages/index.js'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/signup',
        element:<Signup/>,
      },
      {
        path:'/addpost',
        element:<AddBlog/>,
      },
      {
        path:'/post/:id',
        element:<Post/>,
      },
      {
        path:"/edit/:id",
        element:<EditBlog/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
