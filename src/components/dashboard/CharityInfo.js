import React, { useState } from "react";
import { FaEthereum } from 'react-icons/fa';
import { AiOutlinePushpin, AiTwotoneCalendar, AiOutlineSecurityScan } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaRoad } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'

//Example chairty json object:
const charity = {
  "name" : "Make a Wish Foundation",
  "wallet" : "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "icon": require("../../assets/makeawish.png"),
  "events" : [
      {
          "location" : "Point Nemo",
          "time" : "Feb 30-31 8am - 5pm",
          "volunteers" : "20/35",
          "extras" : [
              {
                  "icon" : <FaRoad />,
                  "name" : "Transport required"
              },
              {
                  "icon" : <AiOutlineSecurityScan />,
                  "name" : "Background check"
              },
              {
                  "icon" : <GiKnifeFork />,
                  "name" : "2 meals provided"
              }
          ],
          "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod pulvinar nulla, vitae fermentum est placerat sit amet. Nulla ac neque sodales, commodo erat a, gravida sem. Etiam malesuada sapien non molestie dapibus. Proin non nunc et risus aliquet semper. Fusce sagittis rutrum ex, nec fermentum ligula convallis eu. In lacinia iaculis ante ut consectetur. Aenean convallis pulvinar ante, et venenatis ex porttitor at.",
          "isVolunteer" : false,
          "isFull" : false
      },
      {
          "location" : "Platform 9 3/4",
          "time" : "Aug 31 3pm - 7pm",
          "volunteers" : "20/20 :)",
          "extras" : [
              {
                  "icon" : <AiOutlineSecurityScan />,
                  "name" : "Background check"
              }
          ],
          "desc" : "Cras pellentesque bibendum blandit. Phasellus sit amet est auctor, bibendum tortor ac, elementum mi. Vestibulum rutrum purus ipsum, non dapibus urna eleifend ut. Nunc at accumsan odio, et venenatis ipsum. Donec tempor bibendum eros eu suscipit. Vestibulum dignissim justo augue, sed lobortis diam sagittis quis. Mauris eleifend blandit pharetra. Maecenas eget dui vulputate, imperdiet felis eget, venenatis lacus. Donec gravida eros non urna lobortis, ac gravida massa rutrum. Integer sollicitudin accumsan metus, vitae malesuada lacus maximus sed.",
          "isVolunteer": true,
          "isFull": true
      },
      {
          "location" : "Wakanda",
          "time" : "Dec 25 8am - 8pm",
          "volunteers" : "123/456",
          "extras" : [
              {
                "icon" : <FaRoad />,
                "name" : "Transport required"
              }
          ],
          "desc" : "Etiam consequat nulla vitae purus dignissim, eget cursus nisi pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dapibus lacinia pharetra. Maecenas laoreet metus et egestas mattis. Donec facilisis leo ullamcorper, tempor felis euismod, elementum diam. Suspendisse ut ultricies neque. Morbi vulputate tortor non arcu egestas, at posuere ante euismod. Integer tempor est justo, eu sodales nibh aliquet vitae. Curabitur ut sagittis lorem.",
          "isVolunteer": false,
          "isFull": false
      },
      {
          "location" : "Narnia",
          "time" : "May 10 5pm - 10pm",
          "volunteers" : "5/5",
          "extras" : [],
          "desc" : "Vivamus ut tincidunt turpis. Curabitur malesuada, nulla non faucibus sollicitudin, erat magna finibus leo, sit amet tincidunt sapien diam et leo. Nullam a augue non nibh porta egestas a in sem. Donec luctus est tincidunt nulla congue, non tincidunt ex auctor. Mauris ligula lectus, laoreet sed feugiat ac, efficitur at arcu. Ut porttitor enim at mattis ornare. In hac habitasse platea dictumst. Sed laoreet consectetur quam, interdum semper nisi luctus eu. Curabitur vel sollicitudin purus.",
          "isVolunteer": false,
          "isFull": true
      },
  ]
}
function CharityInfo() {
  return (
    <div className="grid place-items-center h-screen overflow-scroll">
      <div className="flex flex-col space-y-6 w-4/5 pt-10">
          {/* title */}
          <div className="flex flex-row flex-nowrap bg-whte rounded-3xl h-32 content-center">
            <div className="grid w-1/6 pl-3 place-items-center">
              <img src={charity.icon} className=""/>
            </div>
            <div className="grid w-2/3 text-left pt-7 pl-5 h-min">
              <div className="font-black text-xl">
                {charity.name}
              </div>
              <div className="flex flex-row place-items-center pt-5">
                  <FaEthereum />
                  <h4>{charity.wallet}</h4>
              </div>
            </div>
            <div className="grid w-1/6 place-items-center pr-4">
              <button className="rounded-full bg-cyan-400 w-full buttonEnable">
                Redeem
              </button>
            </div>
          </div>
          <div>
          {charity.events.map((event) => (
            <div className="grid place-items-center mb-6">
              <div className="flex flex-col space-y-6 w-full">
                <div className="flex flex-col flex-nowrap bg-whte rounded-3xl p-4 content-center">
                  <div class="eventHeader">
                    <div class="griditem font-semibold">
                      <AiOutlinePushpin className="mr-1"/> {event.location}
                    </div>
                    <div class="griditem font-semibold">
                      <AiTwotoneCalendar className="mr-1"/> {event.time}
                    </div>
                    <div class="griditem right  font-semibold">
                      {event.volunteers} <BsFillPersonFill className="ml-2"/> 

                    </div>
                    <div class="griditem font-semibold">
                        <button className={event.isVolunteer ? "rounded-full bg-cyan-400 w-full font-semibold buttonEnable" : "rounded-full bg-cyan-400 w-full font-semibold buttonDisable" }>
                          {event.isVolunteer ? "Joined" : event.isFull ? "FULL" : "Volunteer"}
                        </button>
                    </div>
                  </div>
                <div className="flex flex-row w-full">
                  {event.extras.map((info) => (
                    <div className="flex flex-row place-items-center pr-6">
                      {info.icon} 
                      <div className="pl-1 font-semibold">
                        {info.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex pt-5 w-full text-left">
                  {event.desc}
                </div>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>

    </div>
  );
}

export default CharityInfo;