import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { HiMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

//TODO: login via social media 
//TODO: add title   
//TODO: handle login

export const LoginForm = () => {
  return (
    <div className=' flex mt-28 items-center	 flex-col'>
      <div className='w-1/4 '>
        <div className='mt-5'>
          <div className="mb-2 block">
            <Label
              htmlFor="email4"
              value="Email"
            />
          </div>
          <TextInput
            id="email4"
            type="email"
            placeholder="name@eamil.com"
            required={true}
            icon={HiMail}
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
        <div className='mt-3'>
          <p>Not a member? <Link to="/signup">Signup</Link></p>
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
  )
}
