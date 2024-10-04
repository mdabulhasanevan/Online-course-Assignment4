
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

export default function Navbar() {

    const { user, logOutuser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutuser();
      };
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <img className='w-14 rounded shadow-lg' src="https://www.alleducationschools.com/wp-content/themes/alleducationschools/assets/images/AES_logo.svg"/>
                    EduOnline </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                    <li ><Link to="/" className="btn bg-purple-400 hover:bg-stone-50">Home</Link></li>
                    <li ><Link to="/products" className="btn bg-emerald-200 hover:bg-stone-50">Products</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    {/* <img src={`${user?.photoURL}`} /> */}
                                    <img src={user?.photoURL} className="w-7 rounded-full" />
                                    <span>{user?.displayName}</span>
                                    <button onClick={handleLogout} className="btn">
                                        Logout
                                    </button>
                                </div>
                            </>

                        ):
                        (<Link to="/login" className="btn bg-orange-400">Login/Signup</Link>)
                    }

                </div>
            </div>
        </div>
    )
}
