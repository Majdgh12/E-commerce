import React from 'react';
import Hero from '../components/hero/hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/Offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../components/footer/Footer';
const Shop = () => {
    return (
        <div> 
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Shop;
