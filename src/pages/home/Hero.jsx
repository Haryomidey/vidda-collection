import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { Main, NikeAirForce, NikeAirForce1, NikeAirForce2 } from '../../assets';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='gradient w-full h-screen max-h-[650px] grid sm:grid-cols-2 gap-10 px-5 sm:px-20 relative'>
            <div className='flex justify-center flex-col'>
                <motion.h1
                    className='text-4xl sm:text-6xl font-bold'
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Vidda Collection
                </motion.h1>

                <motion.p
                    className='w-full sm:max-w-[70%] mb-4 mt-2'
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    The shoe that moved mountains for eternity and still does so with a swift touch of modernism
                </motion.p>

                <motion.p
                    className='font-bold text-xl'
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1 }}
                >
                    65,000NGN
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Link to='/all'><Button className={'mt-5 w-[fit-content]'}>Buy Now</Button></Link>
                </motion.div>
            </div>

            <div className='hidden sm:flex items-center justify-center'>
                <motion.div 
                    className='bg-[#f1eaef] min-w-[400px] min-h-[400px] max-w-[60%] max-h-[60%] rounded-full flex items-center justify-center'
                    initial={{ transform: 'translateY(-100%)' }}
                    whileInView={{ transform: 'translateY(0)' }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.img 
                        src={Main} 
                        className='w-[60%]'
                        alt="Main Shoe" 
                        initial={{ transform: 'translateX(100%)' }}
                        whileInView={{ transform: 'translateX(0)' }}
                        transition={{ duration: 1.2 }}
                    />
                </motion.div>
            </div>

            <div className='hidden sm:flex lg:w-[50%] max-w-[700px] h-[150px] absolute left-[5%] lg:left-[18%] bottom-[-75px] bg-white items-center gap-10 px-10 shadow-md'>
                <img src={NikeAirForce} alt="" />
                <img src={NikeAirForce1} alt="" />
                <img src={NikeAirForce2} alt="" />
                <p className='flex items-end cursor-pointer'>
                    Find that sneaker you want
                    <Link to='/all'><MdArrowRightAlt /></Link>
                </p>
            </div>
        </section>
    );
};

export default Hero;
