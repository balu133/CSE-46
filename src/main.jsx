import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TeacherDetails from './TeacherDetails.jsx'
import {Route,Routes,HashRouter} from 'react-router-dom'
import Login from './Login.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HashRouter>
         <Routes>
           <Route path='' element={<App />} />
           <Route path="/teacher/:id" element={<TeacherDetails />}  />
         </Routes>
     </HashRouter>
  </StrictMode>,
)
