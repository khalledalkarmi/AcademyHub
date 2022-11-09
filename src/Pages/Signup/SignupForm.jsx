import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { BiMobile,BiLocationPlus } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

//TODO: signup via social media 
//TODO: add title   
//TODO: handle signup

export const SignupForm = () => {
    return (
        <div className='w-full h-full min-h-screen'>
            <div className=' flex mt-20 items-center	mb-10 flex-col '>
                <p className='text-5xl mb-10'>Signup</p>
                <div className='w-1/3 shadow-2xl p-3 rounded-xl '>
                    <div className='mt-5'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email4"
                                value="First Name"
                            />
                        </div>
                        <TextInput
                            id="email4"
                            type="email"
                            placeholder="name@eamil.com"
                            required={true}
                            icon={GrUserNew}
                        />
                    </div>
                    <div className='mt-2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="passwordInput"
                                value="Last Name"
                            />
                        </div>
                        <TextInput
                            id="passwordInput"
                            type="password"
                            placeholder="Password"
                            required={true}
                            icon={GrUserNew}
                        />
                    </div>
                    <div className='mt-2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="passwordInput"
                                value="Email"
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
                                htmlFor="passwordInput"
                                value="Confirm Password"
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
                                htmlFor="passwordInput"
                                value="Phone"
                            />
                        </div>
                        <TextInput
                            id="passwordInput"
                            type="password"
                            placeholder="Password"
                            required={true}
                            icon={BiMobile}
                        />
                    </div>
                    <div className='mt-2'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="passwordInput"
                                value="Address"
                            />
                        </div>
                        <TextInput
                            id="passwordInput"
                            type="password"
                            placeholder="Password"
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
                    <p className='text-center text-base mt-2.5'>Or Signup Using</p>
                    <div className='flex justify-center gap-3 text-5xl'>
                        <BsFacebook className='hover:text-cyan-500' />
                        <BsGoogle className='hover:text-cyan-500' />
                        <BsLinkedin className='hover:text-cyan-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}
