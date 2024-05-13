import React from 'react'
import {CDN_URL} from "../../common/constants"

function RestaurantMenuCard({data}) {
    const {category, description, imageId, price} = data?.card?.info
  return (
    <div className="res-menu-card">
        <div className="image-container">
            <img src={CDN_URL+imageId} style={{maxWidth:"300px", objectFit:"contain"}} alt="res" />
        </div>
        <div className="card-body">
            <h2>{category}</h2>
            <p>{description}</p>
            <span>₹{(price)/100}</span>
        </div>
    </div>
  )
}

export default RestaurantMenuCard