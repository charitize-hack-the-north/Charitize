import React, { useState } from "react";

function CharityCard(props) {
  return (
    <div>
        <div className="bg-white shadow-lg rounded-lg m-8 p-8 flex md:bg-orange w-60 h-72">
            <div class="px-3 py-1 content-center mx-auto justify-center w-60">
                <img src={require('./../../img/charity-1.png')} className="pl-4"/>
                <h1 className="font-medium text-xl w-64 pr-28 text-lg">Canadian Cancer Society</h1>
            </div>
        </div> 
    </div>
  );
}

export default CharityCard;