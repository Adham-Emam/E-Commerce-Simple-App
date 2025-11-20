const Button = ({ children, className, disabled = false }) => {
  return (
    <button
      className={`px-4 py-2 border border-white bg-green-500 text-white rounded-full hover:bg-white hover:border hover:border-green-500 hover:text-green-500 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:hover:text-white ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
