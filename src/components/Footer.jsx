import React from 'react';
import { Logo } from '../assets';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const textItemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
    return (
        <footer className='pt-10 bg-white px-5 sm:px-20 pb-5'>
            <div className='border-t pt-6'>
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <motion.div variants={textItemVariants}>
                        <img src={Logo} className='w-[100px]' />
                    </motion.div>

                    <motion.div variants={textItemVariants} className='mt-3'>
                        <h2 className='font-semibold text-lg'>Vidda Collections</h2>
                        <p className='max-w-[500px]'>Elevating your style, one step at a time - empowering you to walk confidently in shoes designed for both comfort and class.</p>
                    </motion.div>

                    <motion.div variants={textItemVariants} className='mt-6'>
                        <h2 className='font-semibold text-lg'>Contact Us</h2>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 items-center'>
                            <div className='flex items-center gap-3 pb-4 pt-2'>
                                <motion.div
                                    variants={textItemVariants}
                                    className='h-[40px] w-[40px] rounded-md grid place-items-center bg-[#ef233b17]'
                                >
                                    <FaFacebookF className='text-[#EF233C]' />
                                </motion.div>
                                <motion.div
                                    variants={textItemVariants}
                                    className='h-[40px] w-[40px] rounded-md grid place-items-center bg-[#ef233b17]'
                                >
                                    <FaInstagram className='text-[#EF233C]' />
                                </motion.div>
                                <motion.div
                                    variants={textItemVariants}
                                    className='h-[40px] w-[40px] rounded-md grid place-items-center bg-[#ef233b17]'
                                >
                                    <FaWhatsapp className='text-[#EF233C]' />
                                </motion.div>
                            </div>

                            <motion.p variants={textItemVariants}>
                                <span className='font-semibold'>Support line:</span> +234 81 000 123 4567
                            </motion.p>

                            <motion.p variants={textItemVariants} className='col-span-2 sm:col-span-1'>
                                &copy; Copyright {new Date().getFullYear()} Vidda Collection
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
