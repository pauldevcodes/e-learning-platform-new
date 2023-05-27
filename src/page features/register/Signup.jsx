import { Form, Link } from 'react-router-dom';

import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'

import signup from '../../images/signup.png'

const Signup = () => {
    return (
        <div className=' grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-5 lg:items-center lg:max-w-screen-lg lg:mx-auto'>
            <div>
                <img src={signup} alt="signup" />
            </div>
            <div className=' flex flex-col gap-y-5'>
                <h1 className=' text-3xl text-center text-orange-500 font-semibold tracking-wider mb-2 lg:text-start'>
                    Sign Up
                </h1>

                <Form
                    className=' flex flex-col gap-y-5'
                >
                    <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                        <UserIcon width={25} className=' text-gray-500' />
                        <input type="text" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter full name' />
                    </div>
                    <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                        <EnvelopeIcon width={25} className=' text-gray-500' />
                        <input type="email" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Enter email address' />
                    </div>
                    <div className=' flex flex-row items-center gap-x-8 border-b-2 border-gray-500 py-2 w-full'>
                        <LockClosedIcon width={25} className=' text-gray-500' />
                        <input type="password" className=' bg-transparent border-0 text-xl text-gray-500 w-full focus:outline-0' placeholder='Password' />
                    </div>
                    <div className=' flex items-center gap-x-5'>
                        <input type="checkbox" className=' form-checkbox' name='checkbox' required />
                        <label htmlFor='checkbox' className=' text-sm lg:text-base text-gray-500'>
                            By signing up, you agree to our <Link className=' text-orange-500'>terms & conditions</Link>
                        </label>
                    </div>
                    <button className=' bg-orange-500 py-2 rounded-lg text-white font-medium'>
                        Continue
                    </button>
                </Form>

                <p className=' text-sm text-gray-500 text-center lg:text-base'>
                    Already have an account? <Link to="signin" className=' text-orange-500'>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;