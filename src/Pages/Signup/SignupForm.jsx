import * as React from 'react';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import NavBar from '../../component/Nav';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login'
import { loginUser, loginSocial } from '../../API';
import { BiMobile, BiLocationPlus } from "react-icons/bi";
import { MdEmail, MdPassword } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
const clientId = '76710521547-nbakpmr8qmrvj6gt2rhu7nhd75dg6ahr.apps.googleusercontent.com'


// FIXME: responsive 
// FIXME: if user already logged in redirect ot home page  
// TODO: handle validation  
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// handle login form 
export default function SignupForm() {
    const Login = useSignIn()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.values());

        //TODO: Sign up api 

    }

    //TODO: signup with google


    return (
        <div >
            <NavBar />
            <div className=" relative flex justify-center items-center"
                style={{
                    backgroundImage: 'url(https://unsplash.com/photos/9o8YdYGTT64/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8c3R1ZGVudHN8ZW58MHx8fHwxNjY5NDQ0NDY0&force=true&w=2400)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='w-1/3 bg-gray-200 text-white p-5 opacity-90 my-10 rounded-xl '>
                    <h3 className='text-black text-center'>Signup</h3>
                    <form onSubmit={handleSubmit} className="h-5/6" >
                        <div className='mt-5'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="firstName"
                                    value="First Name"
                                />
                            </div>
                            <TextInput
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                required={true}
                                icon={GrUserNew}
                                name='firstName'
                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="lastName"
                                    value="Last Name"
                                />
                            </div>
                            <TextInput
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                required={true}
                                icon={GrUserNew}
                                name="lastName"

                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@eamil.com"
                                required={true}
                                icon={MdEmail}
                                name='email'
                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="passwordInput"
                                    value="Password"
                                />
                            </div>
                            <TextInput
                                id="passwordInput"
                                type="password"
                                placeholder="Password"
                                required={true}
                                icon={MdPassword}
                                name='password'
                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="confirmPassword"
                                    value="Confirm Password"
                                />
                            </div>
                            <TextInput
                                id="confirmPassword"
                                type="password"
                                placeholder="Password"
                                required={true}
                                icon={MdPassword}
                 
                                name='password_confirmation'
                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Phone"
                                />
                            </div>
                            <TextInput
                                id="phone"
                                type="text"
                                placeholder="Phone"
                                required={true}
                                icon={BiMobile}
                                name='phone'
                            />
                        </div>
                        <div className='mt-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="address"
                                    value="Address"
                                />
                            </div>
                            <TextInput
                                id="address"
                                type="text"
                                placeholder="City, Street"
                                required={true}
                                icon={BiLocationPlus}
                                name='address'
                            />
                        </div>
                        <div className='mt-3'>
                            <p>Member? <Link to="/login">Login</Link></p>
                        </div>

                        <Button
                            className='w-full bg-orange-500'
                            type="submit"
                        >
                            Sign In
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </form>
                </div>
            </div>
        </div>
    );
}