
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../components/Footer';


export default function MainLayout() {
    return (
        <div className='container mx-auto w-3/4' >
            <Navbar />
           
            <div >
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
