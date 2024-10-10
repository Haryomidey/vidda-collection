import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from '../pages/home';
import ScrollToTop from '../components/ScrollToTop';
// import About from '../pages/About';
// import Services from '../pages/service';
// import Blogs from '../pages/blogs';
// import Career from '../pages/career';
// import Work from '../pages/work';
// import Contact from '../pages/contact';
import NotFound from '../pages/error/NotFound';
import Products from '../pages/products';
import Mens from '../pages/mens';
import SingleProduct from '../pages/single-product';
import NotAvailable from '../pages/not-available';
import Women from '../pages/women';
import Kids from '../pages/kid';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/all",
    element: (
      <MainLayout>
        <Products />
      </MainLayout>
    ),
  },
  {
    path: "/mens",
    element: (
      <MainLayout>
        <Mens />
      </MainLayout>
    ),
  },
  {
    path: "/single-product/:id",
    element: (
      <MainLayout>
        <SingleProduct />
      </MainLayout>
    ),
  },
  {
    path: "/women",
    element: (
      <MainLayout>
        <Women />
      </MainLayout>
    ),
  },
  {
    path: "/kids",
    element: (
      <MainLayout>
        <Kids />
      </MainLayout>
    ),
  },
  // {
  //   path: "/career",
  //   element: (
  //     <MainLayout>
  //       <Career />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "/work",
  //   element: (
  //     <MainLayout>
  //       <Work />
  //     </MainLayout>
  //   ),
  // },
  // {
  //   path: "/contact-us",
  //   element: (
  //     <MainLayout>
  //       <Contact />
  //     </MainLayout>
  //   ),
  // },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
