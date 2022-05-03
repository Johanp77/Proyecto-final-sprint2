import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from './components/Home';

const AppRouters = () => {
    return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" component={} /> */}
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    );
}

export default AppRouters;