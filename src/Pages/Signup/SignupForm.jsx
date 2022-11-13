import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { BiMobile, BiLocationPlus, BiPhone } from "react-icons/bi";
import { MdEmail, MdPassword } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

//TODO: signup via social media 
//TODO: add title   
//TODO: handle signup
//TODO: redirect to home page if user logged in 

export const SignupForm = () => {
    return (
        <div className='w-full h-full min-h-screen'>
            <div className=' flex mt-20 items-center	mb-10 flex-col '>
                <p className='text-5xl mb-10'>Signup</p>
                <div className='w-1/3 shadow-2xl p-3 rounded-xl '>
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
                        />
                    </div>
                    <div className='mt-3'>
                        <p>Member? <Link to="/login">Login</Link></p>
                    </div>
                    <div className='mt-3 flex justify-center w-full'>
                        <Button gradientDuoTone="cyanToBlue" >
                            Cyan to Blue
                        </Button>

                    </div>
                    <p className='text-center text-base my-4 '>Or Signup Using</p>
                    <div className='flex justify-center gap-3 text-5xl mb-3'>
                        <BsFacebook className='hover:text-cyan-500' />
                        <BsGoogle className='hover:text-cyan-500' />
                        <BsLinkedin className='hover:text-cyan-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}
