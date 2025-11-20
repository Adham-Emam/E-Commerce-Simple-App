import Button from './Button'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import slugify from 'slugify'

const stockObject = {
  'In Stock': 'bg-green-400',
  'Low Stock': 'bg-yellow-400',
  'Out of Stock': 'bg-red-400',
}

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="relative w-full mb-4 bg-gray-200">
        <span
          className={`absolute top-2 left-2 ${
            stockObject[product.availabilityStatus]
          } text-white text-sm rounded-full px-2 py-1 m `}
        >
          {product.availabilityStatus}
        </span>
        <Link
          to={`/product/${product.id}/${slugify(product.title, {
            lower: true,
          })}`}
        >
          <img src={product.thumbnail} alt={product.title} />
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          to={`/product/${product.id}/${slugify(product.title, {
            lower: true,
          })}`}
        >
          <h3 className="flex-3 text-lg font-bold text-green-950">
            {product.title}
          </h3>
        </Link>
        <span className="flex-1 text-right text-md font-bold">
          ${product.price}
        </span>
      </div>

      <p className="text-sm text-gray-500">
        {product.description.length > 50
          ? product.description.substring(0, 50) + '...'
          : product.description}
      </p>
      <div className="mt-5 mb-3">
        <span>
          <Rate
            disabled
            allowHalf
            value={product.rating}
            style={{ fontSize: 16, color: '#32CD32' }}
          />
        </span>
      </div>
      <Button disabled={!product.stock} className="block w-fit ms-auto">
        {product.stock ? 'Add To Cart' : 'Out of Stock'}
      </Button>
    </div>
  )
}

export default ProductCard
