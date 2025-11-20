import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'
import image from '../assets/image.jpg'

const Login = () => {
  return (
    <div className="container">
      <div className="h-[800px] my-10 flex justify-between items-center gap-5 border border-green-500 rounded-3xl overflow-hidden">
        <div className="flex-1 py-16 ps-6">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="text-xl mb-8">Sign to Your Account</p>
          <AuthForm action="login" />
          <p className="my-3 text-sm">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-green-500">
              Register
            </Link>
          </p>
        </div>
        <div className="flex-1">
          <img src={image} alt="Auth Image" />
        </div>
      </div>
    </div>
  )
}

export default Login
