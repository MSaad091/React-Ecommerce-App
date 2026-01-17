import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './HomeCard.css'

function HomeCard() {
  const products = useSelector((state) => state.homedata.products)

  return (
    <div className="card-container">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="card__shine"></div>
          <div className="card__glow"></div>
          <div className="card__content">
            <div className="card__badge">NEW</div>
            <div className="card__image">
              <img src={item.img} alt={item.bname} />
            </div>
            <div className="card__text">
              <p className="card__title">{item.bname}</p>
              <p className="card__description">{item.info}</p>
            </div>
            <div className="card__footer">
              <div className="card__price">${item.price}</div>
              <Link to={`/cart/${item.id}`}>
                <div className="card__button">
                  <svg height="20" width="20" viewBox="0 0 24 24">
                    <path
                      strokeWidth="2"
                      stroke="currentColor"
                      d="M4 12H20M12 4V20"
                      fill="currentColor"
                    >
                      <button>+</button>
                    </path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeCard
