import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import { FiShare2 } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductsData from '../utils/products';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button';

const SingleProduct = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const product = ProductsData.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleShare = (product) => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: `Check out this awesome product: ${product.name} for ${product.price}`,
                url: window.location.href,
            })
            .then(() => console.log('Successfully shared!'))
            .catch((error) => console.error('Something went wrong sharing the product', error));
        } else {
            alert(`Share this product: ${product.name}`);
        }
    };

    const handleImageChange = (index) => {
        setSelectedImage(index);
    };

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setCurrentIndex(currentIndex === 0 ? product.images.length - 1 : currentIndex - 1);
        } else {
            setCurrentIndex(currentIndex === product.images.length - 1 ? 0 : currentIndex + 1);
        }
        setSelectedImage(currentIndex);
    };

    const whatsappNumber = '+2348130771867';

    return (
        <main className='min-h-screen'>
            <Header />
            <section className='grid grid-cols-1 md:grid-cols-6 h-full pt-[30px]'>
                <div className='col-span-4 pt-[70px] md:pt-[100px] pb-5 px-4 md:px-10'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-2xl md:text-4xl font-semibold'>{product.name}</h1>
                            <p className='text-lg md:text-xl'>₦{product.price}</p>
                        </div>
                        <button
                            onClick={() => handleShare(product)}
                            className='text-gray-600 hover:text-gray-800 mt-4 md:mt-0'
                        >
                            <FiShare2 size={24} />
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-center relative'>
                        <div className='w-full grid place-items-center'>
                            <motion.img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className='max-w-[60%] h-auto object-contain'
                            />
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleImageChange(index)}
                                    className={`cursor-pointer bg-[#b4b4b493] h-[50px] w-[50px] md:h-[80px] md:w-[80px] ${selectedImage === index ? 'border-4 border-[#D90429]' : ''}`}
                                >
                                    <img src={image} alt={`Thumbnail ${index}`} className='w-full h-full object-cover' />
                                </div>
                            ))}
                        </div>
                        <div className='absolute top-[50%] translate-y-[-50%] w-full flex justify-between items-center'>
                            <motion.div
                                className="cursor-pointer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => handleArrowClick('left')}
                            >
                                <IoIosArrowBack size={30} />
                            </motion.div>
                            <motion.div
                                className="cursor-pointer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => handleArrowClick('right')}
                            >
                                <IoIosArrowForward size={30} />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 p-4 md:p-6 bg-white pt-[70px] md:pt-[100px]'>
                    <h2 className='font-semibold text-lg pb-4'>Description</h2>
                    <p className='border-b pb-4 md:pb-10'>{product.description}</p>

                    <p className='font-semibold text-lg mt-5'>Available sizes</p>
                    <div className='grid grid-cols-3 gap-3 mt-2 w-[120px] md:w-[180px]'>
                        {product.size.map((size, index) => (
                            <p key={index} className='border rounded-lg h-[30px] md:h-[40px] w-[30px] md:w-[40px] grid place-items-center text-sm md:text-base'>{size}</p>
                        ))}
                    </div>

                    <p className={`mt-4 text-[crimson] font-semibold capitalize ${product.status === 'sold out' ? 'text-lg' : ''}`}>
                        {product.status === 'sold out' ? 'Currently sold out, contact us to buy' : product.status}
                    </p>

                    {product.status === 'sold out' && (
                        <p className='mt-2 text-sm text-gray-600'>
                            Call us at <a href="tel:+123456789" className='text-[crimson] font-bold'>+123 456 789</a> for purchasing.
                        </p>
                    )}

                    {product.status !== 'sold out' && (
                        <div className='mt-3'>
                            <a 
                                href={`https://wa.me/${whatsappNumber}?text=Hello, Vidda Collection I'm interested in the ${product.name} priced at ₦${product.price}.`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button className='bg-[crimson] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#dc143ca1]'>
                                    Contact Us to Buy
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default SingleProduct;
