import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">404 - Not Found</h1>
        <p className="text-gray-500">
          The page you are trying to access is not available or removed.{' '}
          <Link to="/" className="text-green-500">
            Return Home
          </Link>{' '}
        </p>
      </div>
    </>
  )
}

export default NotFound
