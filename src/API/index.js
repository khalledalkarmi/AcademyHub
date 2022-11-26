
//Base URL

const BASE_URL = 'http://localhost:8000/api/'

const Login = 'login'
const LoginSocial = 'login/callback'

//Routes

export const loginUser = () => `${BASE_URL}${Login}`

export const loginSocial = () => `${BASE_URL}${LoginSocial}`