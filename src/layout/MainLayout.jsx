
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../components/Footer';


export default function MainLayout() {
    return (
        <div >
            <Navbar />
           
            <div className='container mx-auto min-h-screen p-10'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}
