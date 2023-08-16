import React from 'react';
import Header from '../components/header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';

const Home = () => {
    const productsData = useLoaderData();
    return (
        <div>
            <Banner />
            <Products productsData={productsData} />
        </div>
    );
};

export default Home;