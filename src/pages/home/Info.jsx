import React from 'react';
import { motion } from 'framer-motion';
import { Original, Streamline1, Streamline2 } from '../../assets';

const sectionVariants = {
    hidden: { opacity: 0, translateY: 50 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.8 } },
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Info = () => {
    return (
        <div className='w-full pt-40 pb-28'>
            <motion.h2
                className='text-center text-2xl sm:text-5xl font-bold max-w-[600px] mx-auto'
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                Good footwears take you to good places
            </motion.h2>

            <motion.p
                className='text-center mt-5 max-w-[700px] mx-auto'
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                Do you need nice footwears, to take you to nice places? Look no further, because we got you at Vidda collections
            </motion.p>

            <motion.div
                className='w-full mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'
                variants={textContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <motion.div variants={sectionVariants} className='flex flex-col items-center'>
                    <img src={Streamline1} alt="" />
                    <p className='font-semibold max-w-[200px] text-center mt-4'>
                        Curated and Unique collections
                    </p>
                </motion.div>

                <motion.div variants={sectionVariants}>
                    <div className='flex flex-col items-center pt-10'>
                        <img src={Original} alt="" />
                        <p className='font-semibold max-w-[200px] text-center mt-4'>
                            100% original footwears
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={sectionVariants} className='flex flex-col items-center'>
                    <img src={Streamline2} alt="" />
                    <p className='font-semibold max-w-[200px] text-center mt-4'>
                        Buy the latest and define the trends
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Info;
