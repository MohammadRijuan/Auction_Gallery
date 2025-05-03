import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";




const Table = ({ auction, handleFavourite, handleBidCount,favourite }) => {

  const { id, title, currentBidPrice, image, timeLeft } = auction

  const isFavourited = favourite.find(fav => fav.id === id);

  return (

    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                key={id}
                src={image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>

        <br />
        <span className="badge badge-ghost badge-sm">${currentBidPrice}</span>
      </td>
      <td>{timeLeft}</td>
      <th>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => {
            if (!isFavourited) {
              handleFavourite(auction);
            }
          }}
          color ={isFavourited ? 'red' : 'black'}
          className ={isFavourited? 'cursor-not-allowed' : 'cursor-pointer'}
         
        />
      </th>
    </tr>
  )
}

export default Table