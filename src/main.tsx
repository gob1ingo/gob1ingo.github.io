import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import AnotherPage from "./pages/AnotherPage";

import './style-sheets/layout.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/test-page" element={<TestPage/>}/>
              <Route path="/another-page" element={<AnotherPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>    
  </StrictMode>,
)
