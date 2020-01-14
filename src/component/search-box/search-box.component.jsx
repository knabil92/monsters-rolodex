import React from 'react'
import './search-box.style.css'

export const SearchBox = ({handler, place}) => (
    <input
        className="search-box"
        type="search"
        placeholder={place}
        onChange={handler}
        />
)