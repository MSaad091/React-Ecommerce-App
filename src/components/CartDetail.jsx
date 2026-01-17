import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addproduct, removeCart } from '../features/cartFunc'
import '../Stylesheets/CartDetail.css'

function CartDetail() {
  const products = useSelector((state) => state.homedata.products)
  const { items, total } = useSelector((state) => state.cartfunc)
  const { id } = useParams()
  const dispatch = useDispatch()

  const product = products.find((p) => String(p.id) === id)
  const productTotal = Number(
    product?.quantity ? product.quantity * product.price : product?.price || 0
  )

  if (!product) {
    return <h1 className="not-found">Product Not Found</h1>
  }

  return (
    <div className="cart-detail-container">
      <div className="cart-detail-card">
        <div className="cart-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="cart-info">
          <h1 className="cart-name">{product.name}</h1>
          <h2 className="cart-bname">{product.bname}</h2>
          <p className="cart-price">Price: ${product.price}</p>
          <p className="cart-quantity">
            Quantity: {product.quantity || 1}
          </p>
          <p className="cart-total">Total: ${productTotal}</p>

          <div className="cart-buttons">
            <button
              className="qty-btn"
              onClick={() => dispatch(removeCart(product))}
            >
              -
            </button>
            <button
              className="qty-btn"
              onClick={() => dispatch(addproduct(product))}
            >
              +
            </button>
          </div>

          <Link to={`/cart/${id}/add`}>
            <button
              className="add-cart-btn"
              onClick={() => dispatch(addproduct(product))}
            >
              Add To Cart
            </button>
          </Link>

          <p className="cart-grand-total">Cart Total: ${total}</p>
        </div>
      </div>
    </div>
  )
}

export default CartDetail
