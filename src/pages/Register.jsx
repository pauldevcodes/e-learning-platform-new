import { Outlet } from "react-router-dom";

const Register = () => {
    return (
        <section className=' bg-orange-50 min-h-screen flex flex-col justify-center items-center px-5 md:px-14'>
            <Outlet />
        </section>
    );
}

export default Register;