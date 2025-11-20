import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'
import image from '../assets/image.jpg'

const Register = () => {
  return (
    <div className="container">
      <div className="h-[800px] my-10 flex justify-between items-center gap-5 border border-green-500 rounded-3xl overflow-hidden">
        <div className="flex-1 py-16 ps-6">
          <h1 className="text-5xl font-bold">Create New Account</h1>
          <p className="text-xl mb-8">Start Discovering New Stuff!</p>
          <AuthForm action="register" />
          <p className="my-3 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500">
              Login
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

export default Register
