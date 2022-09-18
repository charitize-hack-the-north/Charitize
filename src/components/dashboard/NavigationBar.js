import React, { useState } from "react";
import { IoMdChatbubbles, IoMdSettings } from 'react-icons/io'

function NavigationBar(props) {
  return (
    <div className="flex flex-col w-1/6 bg-whte shadow-2xl">
        <a href="/">
            <div className="flex flex-row flex-wrap relative m-5 justify-center">
                <img className="w-8" src={require('../../assets/logo.png')} />
                <span className="flex flex-1 items-center justify-center">
                    <h1 className="text-bold text-2xl">Charitize</h1>
                </span>
            </div>
        </a>

        <div className="h-2/3"></div>

        <div className="flex flex-col w-full h-28 justify-center space-y-4">
            <div className="grid w-full menuitem">
                <IoMdSettings className="h-full w-full" />
                <h2 className="text-md text-left pl-1">Settings</h2>
            </div>
            <div className="grid w-full menuitem">
                <IoMdChatbubbles className="h-full w-full"/>
                <h2 className="text-md text-left pl-1">Support</h2>
            </div>
        </div>

        <div className="flex flex-col w-full h-1/6 bg-primary">
            Wallet
        </div>

        <div className="flex flex-row w-full bg-primary h-3 absolute bottom-0 z-50"></div>
    </div>
  );
}

export default NavigationBar;