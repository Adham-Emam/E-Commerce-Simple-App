import { useSelector } from 'react-redux'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Navbar = () => {
  const count = useSelector((state) =>
    state.cart.items.reduce((a, b) => a + b.qty, 0)
  )

  const { lang, setLang } = useContext(LanguageContext)

  const changeLang = (e) => {
    setLang(e.target.value)
  }

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
              <Link to={'/contact'}>Contact Us</Link>
            </nav>

            <select
              value={lang}
              onChange={changeLang}
              className="border rounded p-1 bg-white text-green-900 font-bold"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

            <div className="relative">
              <Link
                to="/cart"
                aria-label="Cart"
                className="block p-2 rounded-full bg-indigo-50 text-green-900 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <FaCartShopping className="w-6 h-6" />
              </Link>

              {count > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">
                  {count}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
