import React from "react";


const Navbar = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto  navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="flex-1">
            <a className="text-3xl"><span className="text-blue-400">Auction</span><span className="font-bold text-yellow-400">Gallery</span></a>
          </div>


        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Home</a>
          <a className="btn btn-ghost text-xl">Auctions</a>
          <a className="btn btn-ghost text-xl">Categories</a>
          <a className="btn btn-ghost text-xl">How to Works</a>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item">8</span>
            </div>
          </button>
          <div className="w-10 rounded-full">
            <img className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>


      <section className="bg-[url('../B11A7-Simple-React-Assignment/assets/Banner-min.jpg')] border bg-cover bg-center w-full h-[530px] pt-32 py-20 px-20">
        <h1 className="font-bold text-5xl text-white mt-4">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-white text-xl opacity-50 mt-4">
          Discover rare collectibles, luxury goods, and vintage <br />
          treasures in our curated auctions
        </p>
        <button className="btn mt-4">Explore Auctions</button>
      </section>
    </div>
  )
}

export default Navbar