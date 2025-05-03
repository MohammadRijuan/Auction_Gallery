import React, { useEffect, useState } from "react";
import Table from "../Table/Table";


const Tables = ({handleFavourite,handleBidCount,favourite}) => {

    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        fetch('auction.json')
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, [])


    console.log(auctions)
    return (
            
        <div className="w-11/12 mx-auto text-left space-y-4">
            <h1 className="text-2xl font-bold">Active Auctions</h1>
            <p className="font-bold text-gray-400">Discover and bid on extraordinary items</p>
            

        <div className="bg-white rounded-lg">
         
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            auctions.map(auction =>
                                <Table
                                    key={auction.id}
                                    handleFavourite={handleFavourite}
                                    handleBidCount={handleBidCount}
                                    favourite={favourite}
                                    auction={auction}
                                >
                                </Table>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
        </div>

    )
}

export default Tables

