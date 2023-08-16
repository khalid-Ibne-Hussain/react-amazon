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
            <div className='w-full -mt-10 xl:-mt-36 py-10'>
                <Products productsData={productsData} />
            </div>
        </div>
    );
};

export default Home;