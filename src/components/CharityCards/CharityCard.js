import React, { useState } from "react";

function CharityCard(props) {
  return (
    <div className="flex flex-col w-56 h-64 bg-whte rounded-2xl justify-center items-center px-4 shadow-2xl space-y-4 pb-12 relative">
        <img src={props.photo} width="100" height="100" className="rounded-full" />
        <p className="text-md font-semibold">{props.name}</p>
        <button className="absolute bottom-5 bg-primary text-whte w-24 h-9 rounded-full text-sm transition duration-300 hover:bg-secondary">Detail</button>
    </div>
  );
}

export default CharityCard;