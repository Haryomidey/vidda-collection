import { 
    Product1, 
    Product2, 
    Product3, 
    Product4, 
    Product5, 
    Product6, 
    Product7, 
    Product8, 
    Product9, 
    Product10, 
    Product11, 
} from '../../assets';

const ProductsData = [
    {
        id: 1,
        image: Product1,
        images: [Product1, Product3, Product4, Product5],
        name: "Elite Runner Sneakers",
        brand: "Vidda Collections",
        price: 45000,
        size: [39, 40, 41, 42],
        category: "male",
        status: "available",
        description: "These high-performance sneakers are designed for comfort and durability, perfect for athletic use and casual wear."
    },
    {
        id: 2,
        image: Product2,
        images: [Product2, Product5, Product7, Product8],
        name: "Elegant Leather Boots",
        brand: "Vidda Collections",
        price: 60000,
        size: [38, 39, 40, 41],
        category: "female",
        status: "sold out",
        description: "Crafted from premium leather, these boots offer timeless elegance, ideal for both formal and casual occasions."
    },
    {
        id: 3,
        image: Product3,
        images: [Product3, Product6, Product8, Product9],
        name: "Casual Slip-Ons",
        brand: "Vidda Collections",
        price: 30000,
        size: [40, 41, 42, 43],
        category: "male",
        status: "available",
        description: "These stylish slip-ons provide ultimate convenience and comfort, perfect for everyday wear, and easy to pair with casual outfits."
    },
    {
        id: 4,
        image: Product4,
        images: [Product4, Product7, Product1, Product10],
        name: "Stylish Heels",
        brand: "Vidda Collections",
        price: 50000,
        size: [36, 37, 38, 39],
        category: "female",
        status: "available",
        description: "Elegant and sophisticated, these stylish heels add a touch of class to any outfit, perfect for both formal events and nights out."
    },
    {
        id: 5,
        image: Product5,
        images: [Product5, Product8, Product2, Product6],
        name: "Comfort Sandals",
        brand: "Vidda Collections",
        price: 25000,
        size: [40, 41, 42],
        category: "male",
        status: "available",
        description: "Lightweight and breathable, these sandals offer superior comfort, ideal for casual outdoor activities and summer wear."
    },
    {
        id: 6,
        image: Product6,
        images: [Product6, Product9, Product4, Product10],
        name: "Kids' Fun Sneakers",
        brand: "Vidda Collections",
        price: 20000,
        size: [30, 31, 32, 33],
        category: "kids",
        status: "available",
        description: "Colorful and playful, these sneakers are designed to keep kids active and comfortable, perfect for school or outdoor fun."
    },
    {
        id: 7,
        image: Product7,
        images: [Product7, Product2, Product3, Product9],
        name: "Outdoor Adventure Shoes",
        brand: "Vidda Collections",
        price: 55000,
        size: [41, 42, 43, 44],
        category: "male",
        status: "sold out",
        description: "Built for durability, these adventure shoes offer excellent grip and support, perfect for hiking, camping, or any rugged outdoor activity."
    },
    {
        id: 8,
        image: Product8,
        images: [Product8, Product1, Product4, Product2],
        name: "Elegant Office Shoes",
        brand: "Vidda Collections",
        price: 48000,
        size: [38, 39, 40],
        category: "female",
        status: "available",
        description: "Sleek and stylish, these office shoes combine comfort with professionalism, making them the perfect choice for workwear."
    },
    {
        id: 9,
        image: Product9,
        images: [Product9, Product6, Product10, Product4],
        name: "Kids' Play Sandals",
        brand: "Vidda Collections",
        price: 15000,
        size: [28, 29, 30, 31],
        category: "kids",
        status: "available",
        description: "Designed for active kids, these play sandals are durable and comfortable, offering freedom for running, playing, and outdoor fun."
    },
    {
        id: 10,
        image: Product10,
        images: [Product10, Product1, Product7, Product5],
        name: "Classic Loafers",
        brand: "Vidda Collections",
        price: 45000,
        size: [40, 41, 42, 43],
        category: "male",
        status: "available",
        description: "Classic and versatile, these loafers provide both comfort and style, making them perfect for casual or semi-formal occasions."
    },
    {
        id: 11,
        image: Product11,
        images: [Product11, Product3, Product9, Product2],
        name: "Ladies' Summer Flats",
        brand: "Vidda Collections",
        price: 32000,
        size: [37, 38, 39],
        category: "female",
        status: "sold out",
        description: "Perfect for summer, these flats are lightweight and breathable, providing all-day comfort and a stylish, casual look."
    }
];

export default ProductsData;
