import Banner from "../components/Banner";
import HowtoUse from "../components/HowtoUse";
import ProductPhoto from './ProductPhoto';
import ContractForm from '../components/ContactForm';
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
        <div className="className='mt-2'">
            This is Home Page
        </div>
        </>
    );
}

export default HomePage;

