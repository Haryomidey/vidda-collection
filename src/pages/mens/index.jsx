import React, { useState } from 'react';
import Header from '../../components/Header';
import ProductsData from '../utils/products';
import { Link } from 'react-router-dom';

const Mens = () => {
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleBrandChange = (brand) => {
        setSelectedBrand(prev => {
            if (prev.includes(brand)) {
                return prev.filter(b => b !== brand);
            }
            return [...prev, brand];
        });
    };

    const handlePriceChange = (range) => {
        setSelectedPriceRange(range);
    };

    const handleSizeChange = (size) => {
        setSelectedSizes(prev => {
            if (prev.includes(size)) {
                return prev.filter(s => s !== size);
            }
            return [...prev, size];
        });
    };

    const filteredProducts = ProductsData.filter(product => {
        const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(product.brand);
        
        let matchesPrice = true;
        if (selectedPriceRange) {
            if (selectedPriceRange === '10-20') {
                matchesPrice = product.price >= 10000 && product.price <= 20000;
            } else if (selectedPriceRange === '21-50') {
                matchesPrice = product.price > 20000 && product.price <= 50000;
            } else if (selectedPriceRange === '51-100') {
                matchesPrice = product.price > 50000 && product.price <= 100000;
            } else if (selectedPriceRange === '100+') {
                matchesPrice = product.price > 100000;
            }
        }

        const matchesSize = selectedSizes.length === 0 || product.size.some(size => selectedSizes.includes(size));

        return matchesBrand && matchesPrice && matchesSize;
    });

    return (
        <main className='bg-white min-h-screen pt-[100px]'>
            <Header />
            <section className='grid grid-cols-1 lg:grid-cols-6 gap-6 px-4 lg:px-10 py-8'>
                {/* Sidebar Section */}
                <aside className='lg:col-span-1 lg:h-full'>
                    <div className='lg:fixed top-0 lg:h-full left-0 lg:px-5 lg:pt-[100px] pb-4 grid gap-10 sm:gap-0 sm:grid-cols-2 lg:grid-cols-1'>

                        <div>
                            <h2 className='font-semibold text-lg lg:mt-8'>Price Range (₦)</h2>
                            <div className='flex flex-col'>
                                {['10-20', '21-50', '51-100', '100+'].map((range) => (
                                    <label key={range} className='flex items-center gap-2'>
                                        <input
                                            type='radio'
                                            name='price'
                                            onChange={() => handlePriceChange(range)}
                                            checked={selectedPriceRange === range}
                                        />
                                        <span>{range === '10-20' ? '₦10,000 - ₦20,000' : range === '21-50' ? '₦21,000 - ₦50,000' : range === '51-100' ? '₦51,000 - ₦100,000' : '₦100,000+'}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Size</h2>
                            <div className='grid grid-cols-3 max-w-[180px] gap-2'>
                                {[39, 40, 41, 42, 43, 44].map((size) => (
                                    <label key={size} className='flex items-center gap-2'>
                                        <input
                                            type='checkbox'
                                            onChange={() => handleSizeChange(size)}
                                            checked={selectedSizes.includes(size)}
                                        />
                                        <span>{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                <section className='lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <h1 className='col-span-full font-semibold text-2xl'>Men</h1>

                    {filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full'>
                            {filteredProducts.map((product, index) => (
                                <Link to={`/single-product/${product.id}`} key={index}>
                                    <div className='relative'>
                                        <div className='bg-primary'>
                                            <img src={product.image} alt={product.name} className='object-cover w-full h-[250px]' />
                                        </div>
                                        <h3 className='mt-2'>{product.name}</h3>
                                        <p>₦{product.price.toLocaleString()}, <span className='absolute top-2 right-2 text-xs px-3 py-1 rounded-lg bg-[#88888834]'>{product.status}</span></p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className='col-span-full text-center'>No products match the selected filters.</p>
                    )}
                </section>
            </section>
        </main>
    );
};

export default Mens;
