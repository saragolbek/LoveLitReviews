import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Book from './pages/Book';
import './styles/app.scss'


const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/books/:id" element={<Book />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
