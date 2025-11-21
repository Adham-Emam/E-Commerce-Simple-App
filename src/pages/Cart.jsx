import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from '../utils/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2)

  if (cart.length === 0)
    return <h1 className="text-center mt-20 text-xl">Cart is empty</h1>

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <table className="w-full">
        <thead className="border-b border-b-gray-300">
          <tr className="text-left text-gray-600">
            <th className="pb-3">Description</th>
            <th className="pb-3">Quantity</th>
            <th className="pb-3">Price</th>
            <th className="pb-3"></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="align-top border-b border-b-gray-300">
              <td className="py-4">
                <div className="flex  items-center gap-4">
                  <img
                    src={item.thumbnail}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <h2 className="font-semibold">{item.title}</h2>
                </div>
              </td>

              <td className="py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="py-4 font-semibold">${item.price}</td>

              <td className="py-4">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 font-bold"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-5 w-fit ms-auto py-4 px-8 flex justify-center items-center gap-4 border border-gray-300">
        <p className="text-sm">Total</p>
        <span className="font-bold text-2xl">${total}</span>
      </div>

      <div className="border-t border-t-gray-300 py-5 flex justify-end items-center gap-8">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg opacity-80 hover:opacity-100">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
