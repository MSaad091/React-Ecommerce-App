import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchItem } from './features/cartFunc'
import './Stylesheets/Searchbar.css'

function Searchbar() {
  const searchQuery = useSelector((state) => state.cartfunc.setSearch)
  const [input, setInput] = useState(searchQuery)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if(input.trim() === "") return
    dispatch(SearchItem(input))
    setInput("")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search a Product"
        className="searchbar-input"
      />
      <button onClick={handleSubmit} className="searchbar-btn">
        Search
      </button>
    </div>
  )
}

export default Searchbar
