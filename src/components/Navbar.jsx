import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-gray-200 mb-14">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-green-900">
              Products App
            </Link>
          </div>

          <div className="flex items-center justify-center gap-5">
            <nav className="flex items-center">
              <Link
                to="/register"
                className="opacity-80 hover:opacity-100 text-green-900 px-3 py-2 text-sm font-bold"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="opacity-80 hover:opacity-100 text-green-900 px-3 py-2 text-sm font-bold"
              >
                Login
              </Link>
            </nav>

            <div className="relative">
              <button
                aria-label="Cart"
                className="p-2 rounded-full bg-indigo-50 text-green-900 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <FaCartShopping className="w-6 h-6" />
              </button>

              {/* example badge */}
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
