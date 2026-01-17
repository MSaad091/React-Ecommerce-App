import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import './Shop.css'

function Shop() {
  const products = useSelector((state) => state.shopdata.Shopproduct)
  const searchquery = useSelector((state) => state.cartfunc.setSearch)

  // ✅ filter products based on search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchquery.toLowerCase())
  )

  return (
    <div className='main'>
      <h1 className='shop-title'>Our Products</h1>
      <Searchbar />

      <div className="shop-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <div className="card__shine"></div>
              <div className="card__glow"></div>
              <div className="card__content">
                <div className="card__badge">NEW</div>

                <div
                  style={{ backgroundColor: '#a78bfa' }}
                  className="card__image"
                >
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="card__text">
                  <p className="card__title">{item.name}</p>
                  <p className="card__title">{item.bname}</p>
                  <p className="card__description">{item.info}</p>
                </div>

                <div className="card__footer">
                  <div className="card__price">${item.price}</div>
                  <Link to={`/cart/${item.id}`}>
                    <div className="card__button">
                      <svg height="16" width="16" viewBox="0 0 24 24">
                        <path
                          strokeWidth="2"
                          stroke="currentColor"
                          d="M4 12H20M12 4V20"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  )
}

export default Shop
 