import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import Button from './Button'

const AuthForm = ({ action }) => {
  const [formData, setFormData] = useState(
    action === 'register'
      ? {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerm: false,
        }
      : {
          email: '',
          password: '',
          rememberMe: false,
        }
  )
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }
  const [hiddenPassword, setHiddenPassword] = useState(true)
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    let errors = {}

    const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

    if (action === 'register') {
      if (!formData.firstName) errors.firstName = 'First name is required.'
      if (!formData.lastName) errors.lastName = 'Last name is required.'

      if (!formData.email) {
        errors.email = 'Email is required.'
      } else if (!emailRe.test(formData.email)) {
        errors.email = 'Email is not valid.'
      }

      if (!formData.password) {
        errors.password = 'Password is required.'
      } else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.'
      }

      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match.'
      }

      if (!formData.acceptTerm) {
        errors.acceptTerm = 'You must accept the terms.'
      }
    } else {
      if (!formData.email) {
        errors.email = 'Email is required.'
      } else if (!emailRe.test(formData.email)) {
        errors.email = 'Email is not valid.'
      }

      if (!formData.password) {
        errors.password = 'Password is required.'
      } else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.'
      }
    }

    setFormError(errors)

    if (Object.keys(errors).length === 0) {
      console.log(formData)
      if (action === 'register') {
        Navigate('/login', { replace: true })
      } else {
        Navigate('/', { replace: true })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {action === 'register' && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {formError.firstName && (
              <p className="text-red-500 text-xs mt-1">{formError.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {formError.lastName && (
              <p className="text-red-500 text-xs mt-1">{formError.lastName}</p>
            )}
          </div>
        </div>
      )}

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {formError.email && (
          <p className="text-red-500 text-xs mt-1">{formError.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={hiddenPassword ? 'password' : 'text'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span
            className="text-lg absolute top-1/3 right-5 text-gray-500"
            onClick={() => {
              setHiddenPassword(!hiddenPassword)
            }}
          >
            {hiddenPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {formError.password && (
          <p className="text-red-500 text-xs mt-1">{formError.password}</p>
        )}
      </div>

      {action === 'register' && (
        <>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={hiddenConfirmPassword ? 'password' : 'text'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="text-lg absolute top-1/3 right-5 text-gray-500"
                onClick={() => {
                  setHiddenConfirmPassword(!hiddenConfirmPassword)
                }}
              >
                {hiddenConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {formError.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {formError.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-4 flex items-center justify-between">
            <input
              type="checkbox"
              id="acceptTerm"
              name="acceptTerm"
              checked={formData.acceptTerm}
              onChange={handleChange}
              className="flex-1 h-4 w-4 text-green-600 rounded"
            />
            <label
              htmlFor="acceptTerm"
              className="flex-10 ml-2 text-sm text-gray-700"
            >
              I Agree to the{' '}
              <Link to="#" className="text-green-500 hover:underline">
                Terms
              </Link>{' '}
              & the{' '}
              <Link to="#" className="text-green-500 hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
            {formError.acceptTerm && (
              <p className="text-red-500 text-xs mt-1">
                {formError.acceptTerm}
              </p>
            )}
          </div>
        </>
      )}

      {action === 'login' && (
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="flex-1 h-4 w-4 text-green-600 rounded"
          />
          <label
            htmlFor="rememberMe"
            className="flex-10 ml-2 text-sm text-gray-700"
          >
            Remember My Credentials for next Login?
          </label>
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-v=green-700 transition-colors"
      >
        {action === 'register' ? 'Register' : 'Login'}
      </Button>
    </form>
  )
}

export default AuthForm
