import { Outlet } from "react-router-dom";
import Navbar from './../components/Navbar';


const LoginLayout = () => {
  return (
    <span className='container mx-auto w-3/4' >
      <Navbar />
      <div className="container mx-auto min-h-screen p-10">
        <Outlet />
      </div>
    </span>
  );
};
export default LoginLayout;