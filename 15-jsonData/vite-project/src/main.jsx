import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DoctorSelectionPage from './component/doctorSelection/DoctorSelectionPage.jsx'
import SlotBookingPage from './component/slotBooking/SlotBookingPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DoctorSelectionPage />
      },
      {
        path: 'book-slot/:id',
        element: <SlotBookingPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
