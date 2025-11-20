import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pagination } from 'antd'
import { LuLoaderCircle } from 'react-icons/lu'
import ProductCard from './ProductCard'
import Search from './Search'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products`)

        setProducts(res.data.products)
        setFilteredProducts(res.data.products)
      } catch (err) {
        console.error(err)
        setError('Failed to get data, please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-16">
        <LuLoaderCircle className="w-16 h-16 animate-spin" />
      </div>
    )

  if (error)
    return <div className="mt-16 text-red-500 text-center">{error}</div>

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = searchQuery.trim().toLowerCase()

    if (!search) {
      setFilteredProducts(products)
      return
    }

    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        (product.tags || []).some((tag) => tag.toLowerCase().includes(search))
      )
    })

    setFilteredProducts(filtered)
  }

  return (
    <div className="my-16">
      <h1 className="text-green-950 text-2xl font-semibold mb-6">
        Welcome to our shopping website, start browsing...
      </h1>

      <Search
        handleChange={handleChange}
        searchQuery={searchQuery}
        handleSubmit={handleSubmit}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
        {filteredProducts
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <Pagination
        align="center"
        current={currentPage}
        total={filteredProducts.length}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 30]}
        showSizeChanger
        onChange={(page) => setCurrentPage(page)}
        onShowSizeChange={(current, size) => {
          setPageSize(size)
          setCurrentPage(1)
        }}
      />
    </div>
  )
}

export default Products
