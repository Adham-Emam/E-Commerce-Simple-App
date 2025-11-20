import Navbar from '../components/Navbar'
import Products from '../components/Products'

function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Products />
      </main>
    </>
  )
}

export default Home
