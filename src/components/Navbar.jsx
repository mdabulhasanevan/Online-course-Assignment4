
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

export default function Navbar() {

    const { user, logOutuser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutuser();
    };
    return (
        <div className=''>
            <div className="navbar bg-white rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img className='w-14 rounded shadow-lg' src="https://www.alleducationschools.com/wp-content/themes/alleducationschools/assets/images/AES_logo.svg" />
                       <span className='hidden lg:block font-dancing'>EduOnline</span>  </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        <li ><Link to="/" className="btn btn-outline btn-primary">Home</Link></li>
                        <li ><Link to="/products" className="btn btn-outline btn-secondary">Products</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    {/* <img src={`${user?.photoURL}`} /> */}
                                    <img src={user?.photoURL} className="w-7 rounded-full " />
                                    <span className='hidden lg:block'>{user?.displayName}</span>
                                    <button onClick={handleLogout} className="hidden lg:flex btn btn-sm bg-red-300">
                                        Logout
                                    </button>
                                    <button onClick={handleLogout} className="block lg:hidden btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                                    </button>

                                </div>
                            </>

                        ) :
                            (
                                <div className='flex justify-center items-center'>
                                <Link to="/login" className="hidden lg:flex btn btn-sm bg-teal-200   justify-center items-center ">Login</Link>
                                <Link to="/singup" className="hidden lg:flex btn btn-sm bg-orange-300  justify-center items-center">Signup</Link>

                                <Link to="/login" className="btn btn-sm visible lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg></Link>
                                <Link to="/singup" className="btn btn-sm  visible lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg></Link>
                               

                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    )
}
