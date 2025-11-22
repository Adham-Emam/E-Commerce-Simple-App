import { useState } from 'react'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const maxChars = 500

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = {}

    const emailRe = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'

    if (!formData.firstName) errors.firstName = 'First name is required.'
    if (!formData.lastName) errors.lastName = 'Last name is required.'

    if (!formData.email) {
      errors.email = 'Email is required.'
    } else if (!emailRe.test(formData.email)) {
      errors.email = 'Email is not valid.'
    }

    if (
      !formData.message ||
      formData.message.length < 10 ||
      formData.message.length > maxChars
    ) {
      errors.message = 'Message is required.'
    }

    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      console.log(formData)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'message' && value.length > maxChars) {
      return
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="container">
      <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
      <p className="text-sm text-gray-600">
        Please fill out the form below to contact us.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="my-4 flex md:flex-row md:space-x-4">
          <input
            type="text"
            name="firstName"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex justify-between md:flex-row md:space-x-4">
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1 flex-1">
              {errors.firstName}
            </p>
          )}
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 flex-1">
              {errors.lastName}
            </p>
          )}
        </div>
        <div className="mb-4 flex md:flex-row md:space-x-4">
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex justify-between md:flex-row md:space-x-4">
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            minLength={10}
            maxLength={maxChars}
          />
          <span className="block text-right text-gray-600 text-sm">
            Remaining characters: {maxChars - formData.message.length}
          </span>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}

export default Contact
