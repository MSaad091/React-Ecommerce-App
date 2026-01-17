import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAddTocart } from '../features/cartFunc'
import { Link } from 'react-router-dom'
import '../Stylesheets/UserProduct.css'

function UserProduct() {
  const { items, total } = useSelector((state) => state.cartfunc)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return <h1 className="empty-cart">No Products in Cart</h1>
  }

  return (
    <div className="userproduct-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="userproduct-list">
        {items.map((item) => (
          <div key={item.id} className="userproduct-card">
            <div className="userproduct-image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="userproduct-info">
              <h2 className="userproduct-name">{item.name}</h2>
              <p className="userproduct-bname">{item.bname}</p>
              <p className="userproduct-price">Price: ${item.price}</p>
              <p className="userproduct-quantity">Quantity: {item.quantity}</p>
              <p className="userproduct-total">
                Total: ${item.price * item.quantity}
              </p>

              <button
                className="delete-btn"
                onClick={() => dispatch(removeAddTocart(item))}
              >
                Delete Item
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <h2 className="grand-total">Total Bill: ${total}</h2>
        <Link to="/cart/pay">
          <button className="pay-btn">Pay Bill</button>
        </Link>
      </div>
    </div>
  )
}

export default UserProduct
