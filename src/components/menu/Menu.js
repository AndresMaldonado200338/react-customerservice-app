import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AllCustomers from '../customer/AllCustomers';
import SaveCustomer from '../customer/SaveCustomer';
import DeleteCustomer from '../customer/DeleteCustomer';
import GetCustomer from '../customer/GetCustomer';

export default function Menu() {
    return (
        <div className='App'>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/allcustomers" element={<AllCustomers />} />
                    <Route path="/savecustomer" element={<SaveCustomer />} />
                    <Route path="/deletecustomer/" element={<DeleteCustomer />} />
                    <Route path="/getcustomer/" element={<GetCustomer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}