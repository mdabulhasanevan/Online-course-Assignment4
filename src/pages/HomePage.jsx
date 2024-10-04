import Banner from "../components/Banner";
import HowtoUse from "../components/HowtoUse";
import ProductPhoto from './ProductPhoto';

import ContactForm from "../components/ContactForm";
import AboutUs from './../components/AboutUs';

const  HomePage=()=>{
    return (
        <>
        <Banner/>
        <HowtoUse/>
        <ProductPhoto/>
        <AboutUs/>
        <ContactForm/>
        
        </>
    );
}

export default HomePage;

