import * as React from 'react';
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Products from "../Components/why-us";
import Category from "../Components/Category";
import Stories from "../Components/Story";
import Footer from "../Components/Footer";


export const Landing = (props) => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <Category />
            <Stories />
            <Footer />
        </div>
    );
};