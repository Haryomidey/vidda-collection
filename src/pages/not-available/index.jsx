import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { NotAvailableImage } from '../../assets';

const NotAvailable = () => {
    return (
        <main>
            <Header />
            <div className='pt-[120px] pb-10 w-full min-h-[600px] mx-auto px-5 sm:px-20 flex flex-col justify-center items-center text-center gradient'>
                <div className='w-[100%] max-w-[300px] mb-8'>
                    <img src={NotAvailableImage} className='h-full w-full object-cover' alt='Not available' />
                </div>
                <h1 className='font-bold text-2xl sm:text-5xl mb-6'>This Page is Not Available</h1>
                <p className='text-sm sm:text-xl mb-8 w-[700px] max-w-[95%]'>
                    The content you're looking for is currently unavailable. Please check back later or explore other sections of the website.
                </p>
                <Link to='/'>
                    <button className='bg-[#D90429] text-white px-6 py-3 rounded-md text-lg'>
                        Go Back to Homepage
                    </button>
                </Link>
            </div>
            <Footer />
        </main>
    );
};

export default NotAvailable;
