import React from 'react';
import { Link } from 'react-router-dom';
import { FiShare2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ProductsData from '../utils/products';
import Info from './Info';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, translateY: 100 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.8 } },
};

const AllNewArrival = () => {
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

    return (
        <section className='w-full px-5 sm:px-20 bg-white pt-20 sm:pt-[120px] pb-10'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-lg'>All the new arrivals</h2>
                <Link to='/all' className='text-[#EF233C]'>See all</Link>
            </div>

            <motion.div
                className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4'
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                {ProductsData.slice(0, 4).map((content, index) => (
                    <motion.div
                        variants={cardVariants}
                        key={index}
                        className='min-h-[300px] relative shadow hover:shadow-md pb-8 group ease transition-all duration-300'
                    >
                        <Link to={`/single-product/${content.id}`}>
                            <div>
                                <div className='bg-primary h-[280px]'>
                                    <img src={content.image} alt="" />
                                </div>
                                <div className='mt-2 px-5'>
                                    <h3 className='font-semibold text-lg'>{content.name}</h3>
                                    <div className='flex items-center justify-between'>
                                        <p>{content.price}</p>
                                        <button
                                            onClick={() => handleShare(content)}
                                            className='text-gray-600 hover:text-gray-800'
                                        >
                                            <FiShare2 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <Info />
        </section>
    );
};

export default AllNewArrival;
