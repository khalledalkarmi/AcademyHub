import * as React from 'react';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import NavBar from '../../component/Nav';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login'
import { loginUser } from '../../API';
const clientId = '76710521547-nbakpmr8qmrvj6gt2rhu7nhd75dg6ahr.apps.googleusercontent.com'


// TODO: login with social 
// FIXME: responsive 
// FIXME: if user already logged in redirect ot home page  
// TODO: handle auth 
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


    axios.post(loginUser(), {
      email: data.get('email'),
      password: data.get('password'),
    })
      .then(res => {
        console.log(res.data);
        if (Login({
          token: res.data.access_token,
          expiresIn: 1440,
          tokenType: "Bearer",
          authState: res.data.user_info,
        })) {
          //TODO: navigate base role of user (user, admin ,coach)
        }
      }).catch(res => {

        console.log(res)
        // TODO: update Form with error message 
      })
  }


  return (
    <div >
      <NavBar />
      <div className="h-[100vh] relative flex justify-center items-center"
        style={{
          backgroundImage: 'url(https://unsplash.com/photos/PC91Jm1DlWA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8c2Nob29sfGVufDB8fHx8MTY2OTQ2NzA4Mg&force=true&w=2400)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='w-1/3 bg-gray-200 text-white p-5 opacity-90 h-1/2 rounded-xl '>
          <h3 className='text-black text-center'>Login</h3>
          <form onSubmit={handleSubmit} className="h-5/6" >
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
              className='w-full bg-orange-500'
              type="submit"
            >
              Sign In
            </Button>
            <div className='w-full flex justify-center mt-10 rounded-full'>
              <GoogleLogin
                className='w-1/2text-center rounded-full'
                clientId={clientId}
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  //TODO: handle login server side 
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
            <Copyright sx={{ mt: 5 }} />
          </form>
        </div>
      </div>
    </div>
  );
}