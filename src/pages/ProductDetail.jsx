import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'

import Navbar from '../components/Navbar'
import Button from '../components/Button'

import { LuLoaderCircle } from 'react-icons/lu'
import { FaPlus, FaMinus } from 'react-icons/fa'

const stockObject = {
  'In Stock': 'bg-green-400',
  'Low Stock': 'bg-yellow-400',
  'Out of Stock': 'bg-red-400',
}

const ProductDetail = () => {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`)

        setProduct(res.data)
        console.log(res.data)
      } catch (err) {
        console.error(err)
        setError('Failed to get data, please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    getProductDetail()
  }, [id])

  const handlePlus = () => {
    if (quantity >= product.stock) {
      return
    }

    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity === 1) {
      return
    }

    setQuantity(quantity - 1)
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-16">
        <LuLoaderCircle className="w-16 h-16 animate-spin" />
      </div>
    )
  }

  if (error) {
    return <div className="mt-16 text-red-500 text-center">{error}</div>
  }

  return (
    <>
      <Navbar />

      <main className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <img
            className="w-full h-auto object-cover"
            src={product.images[0]}
            alt={product.thumbnail}
          />
        </div>
        <div>
          <h1 className="text-green-950 text-2xl font-semibold mb-6">
            {product.title}
          </h1>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <span className="block mb-4">
            <Rate
              disabled
              allowHalf
              value={product.rating}
              style={{ fontSize: 16, color: '#32CD32' }}
            />{' '}
            <span className="text-gray-500">({product.reviews.length})</span>
          </span>
          <hr className="border-gray-200" />
          <div className="my-5">
            <span className="text-2xl font-bold text-green-950">
              ${product.price} or $
              {(
                (product.price * (1 - product.discountPercentage / 100)) /
                6
              ).toFixed(2)}
              /month
            </span>
            <p className="text-gray-500">
              Suggested payments with 6 months special financing
            </p>
          </div>
          <hr className="border-gray-200" />
          <div className="my-5">
            <span
              className={`${
                stockObject[product.availabilityStatus]
              } text-white text-sm rounded-full px-2 py-1 m `}
            >
              {product.availabilityStatus}
            </span>
            <br />
            <div className="flex items-center gap-2 mt-5">
              {product.tags.map((tag, i) => {
                return (
                  <span
                    key={i}
                    className="text-white bg-gray-700 rounded-full py-1 px-2"
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
          <hr className="border-gray-200" />
          <div className="my-5">
            <span className="w-fit px-5 py-2 flex items-center justify-center rounded-full gap-10 border border-green-500 text-green-500">
              <FaMinus onClick={handleMinus} className="pointer" />
              <span className="text-green-900 font-bold text-md">
                {quantity}
              </span>
              <FaPlus onClick={handlePlus} className="pointer" />
            </span>
            <span className="block w-fit my-3">
              remaining{' '}
              <span className="text-yellow-500 font-bold">
                {product.stock} items
              </span>{' '}
              Stock
            </span>
            <div className="flex items-center justify-between gap-4">
              <Button className="w-full">Buy Now</Button>
              <Button className="w-full bg-white text-green-500! border-green-500! hover:bg-green-500! hover:text-white!">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetail
