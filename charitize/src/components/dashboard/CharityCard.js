import React, { useState } from "react";

function CharityCard(props) {
  return (
    <div>
        <div className="bg-white shadow-lg rounded-lg m-8 p-8 flex md:bg-orange w-300">
            <div class="px-3 py-1">
                <h1 className="font-medium text-xl pb-5">Your Summary for <span style={{color: "blue"}}>Charity 1</span></h1>
                
                <p className="text-left">
                    <div className="pb-3">
                        <h1>Salary Funding:</h1>
                        0.123456 ETH
                    </div>
                    <div className="pb-3">  
                        <h1>Operations Funding</h1>
                        0.2468101 ETH
                    </div>
                    <div className="pb-3">
                    <h1>Pending Volunteers</h1>
                    <a href="#"><ul>12</ul></a>
                    </div>
                    <div className="pb-3">
                    <h1>Total Hours</h1>
                    3260 hours
                    </div>
                </p>

            </div>
        </div> 
    </div>
  );
}

export default CharityCard;