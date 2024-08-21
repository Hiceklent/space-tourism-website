import '../../config/api-controller';
import '../../services/axios-service'

import React, { useState } from 'react';

const sections = [
  {
    id: 1,
    Number: 1,
    subtitle: "The Terminology",
    title: "LAUNCH VEHICLE",
    content: " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! ",
    images: {
    portrait: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-launch-vehicle-portrait.jpg",
    landscape: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-launch-vehicle-landscape.jpg",
    },
  },
  {
    id: 2,
    Number: 2,
    subtitle: "The Terminology",
    title: "SPACEPORT",
    content: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. ",
    images: {
      portrait: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-spaceport-portrait.jpg",
      landscape: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-spaceport-landscape.jpg"
    },
  },
  {
    id: 3,
    Number: 3,
    subtitle: "The Terminology",
    title: "SPACE CAPSULE",
    content: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-space-capsule-landscape.jpg"
    },
  },
];

function Technology() {
  const [activeSection, setActiveSection] = useState(sections[0]);
   
  return (
     
    <div className="w-full h-screen bg-technology-mobile bg-cover bg-center md:bg-technology-desktop  bg-no-repeat'">
      <div className="flex flex-col items-center space-y-4 mt-8 w-[80px] absolute top-[143px] left-[165px]">
      {sections.map((section) => (
        <button
          key={section.Number}
          onClick={() => setActiveSection(section)}
          className={`rounded-full flex w-[80px] h-[80px] border  opacity-[0.25] items-center justify-center transition-colors duration-300
            ${activeSection === section.Number? 'bg-white text-white' : 'bg-transparente text-white border-white'} 
            hover:bg-white hover:text-white`}
        >
          {sections.Number}
        </button>
      ))}
     </div>
 
      <div className="tablet:w-3/4 p-4 flex flex-col tablet:flex-row w-[444px] h-[303px] absolute top-[183px] left-[325px] ">
        <div className="tablet:w-1/2 mb-4 tablet:mb-0 items-center ">
           <span className=" text-1xl text-center items-center font-ligth mb-2  text-white"> {activeSection.subtitle} </span>
          <h2 className=" text-2xl items-center font-normal mb-2 text-white font-[Bellefair] ">{activeSection.title}</h2>
          <p className=" text-white items-center font-[Barlow] text-[18px] font-normal leading-[32px] text-left">{activeSection.content}</p>
        </div>        
      </div> 
      <div className="tablet:w-1/2 w-[500px] h-[520px] absolute top-[72px] left-[850px]">
        <img src={"https://raw.githubusercontent.com/Hiceklent/space-tourism-api/main/assets/technology/image-space-capsule-portrait.jpg"} alt={activeSection.title} className="object-cover rounded-lg" />
      </div>
      
    </div>

           

  );
}





export default Technology