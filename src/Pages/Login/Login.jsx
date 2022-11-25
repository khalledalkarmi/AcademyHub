import * as React from 'react';

import TextField from '@mui/material/TextField';


import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import NavBar from '../../component/Nav';




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

export default function SignIn() {
  const Login = useSignIn()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return (
    <div >
      <NavBar />
      <div className="h-[76vh] relative flex justify-center items-center"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/collection/1795151)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='w-1/3 bg-gray-200 text-white p-5 opacity-90 h-1/2 rounded-xl min-h-[80%]'>
          <h3 className='text-black text-center'>Login</h3>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className='w-full bg-black mb-3'
              type="submit"

            >
              Sign In
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </div>
      </div>
    </div>
  );
}