import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/:imageId" element={<CardPage/>}/>
            </Routes>
        </BrowserRouter>
        
       
    );
};

export default App;