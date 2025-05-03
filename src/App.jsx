import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import Tables from './components/Tables/tables'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from './components/footer/footer'


function App() {
  // const [count, setCount] = useState(0)
  const [favourite, setFavourite] = useState([])
  const [selectedBid, setTotalBid] = useState(0)

  const handleFavourite = (auction) => {
    setFavourite([...favourite, auction])
    toast(`${auction.title} added to your favourite list`);

    handleBidCount(auction.currentBidPrice)

  }

  const handleBidCount = (currentBidPrice) => {
    const newBidPrice = selectedBid + currentBidPrice;
    setTotalBid(newBidPrice)

  }
  console.log(selectedBid)


  const handleRemovingBidCount = (currentBidPrice) => {
    const newBidPrice = selectedBid - currentBidPrice;
    setTotalBid(newBidPrice)
    

  }


  const handleRemoveFromFavourite=(title,price,id)=>{
    const remainingFavourite = favourite.filter((item)=> item.id !== id)
    setFavourite(remainingFavourite)
    toast(`${title} removed from your favourite list`);
    
    handleRemovingBidCount(price)
  }
  return (
    <>
      <Navbar></Navbar>
      <div className='bg-gray-200'>
      <div className='main-container bg-gray-200 w-11/12 mx-auto flex text-center space-x-8 pt-8 pb-8'>
        <div className='left-container w-[65%] '>
          <Tables
            handleFavourite={handleFavourite}
            handleBidCount={handleBidCount}
            favourite={favourite}
          ></Tables>
        </div>

        <div className='right-container w-[35%] p-2 mt-22 bg-white rounded-lg'>
          <h1 className='pb-2 text-xl font-bold'><FontAwesomeIcon icon={faHeart}/>Favourite Items</h1>
          <hr />

          <div className='p-4'>
            {favourite.length > 0 ? (
              favourite.map((fav) => (
                <div className="flex items-start justify-between bg-gray-100 rounded-xl mt-2 shadow-sm max-w-md">
                  <img
                    className="w-[100px]"
                    src={fav.image}
                    alt=""
                  />

                  <div className="">
                    <h1 className="text-md font-bold ml-2 mt-4">{fav.title}</h1>
                    <div className="flex items-center ml-6 gap-4 mt-4 text-sm text-gray-600">
                      <p>${fav.currentBidPrice}</p>
                      <p className="text-sm">Bids: {fav.bidsCount}</p>
                    </div>
                  </div>

                  <button
                  onClick={()=>handleRemoveFromFavourite(fav.title,fav.currentBidPrice,fav.id)}
                    className="hover:text-red-500 transition ml-4 mr-4 mt-8"
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <>
                <h3 className='font-bold'>No Favourite Items yet</h3>
                <p>Please click heart to add your items</p>
              </>
            )}
          </div>

          <hr />
          <h1 className='p-4  text-xl font-bold'>Total Bids Amount ${selectedBid}</h1>

        </div>
      </div>

      </div>
      <ToastContainer />
      <Footer></Footer>

    </>
  )
}

export default App



// live link - https://luxury-chaja-e70966.netlify.app/