//const Technology = () => {
  //return (
   // <div>Este es el Technology</div>
//  )
//}
import '../Technology/Technology.scss'
import Img1 from '../../assets/images/technology/img1.png'
import Img2 from '../../assets/images/technology/img2.png'
import Img3 from '../../assets/images/technology/img3.jpg'

// src/pages/PageFour.js
import React, { useState } from 'react';
 
import URL_API  from "https://space-tourism-api.vercel.app/api/technology"



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
   URL_API
  return (
     
    <div className="flex flex-col tablet:flex-row p-4">
      <div className="flex flex-col items-center space-y-4 mt-8">
      {sections.map((section) => (
        <button
          key={section.Number}
          onClick={() => setActiveSection(section)}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300
            ${activeSection === section.Number? 'bg-blue-500 text-white' : 'bg-transparent text-blue-500 border-blue-500'} 
            hover:bg-white hover:text-blue-500 
            focus:outline-none focus:ring-2 focus:ring-blue-300`}
        >
          {sections.Number}
        </button>
      ))}
     </div>
 
      <div className="tablet:w-3/4 p-4 flex flex-col tablet:flex-row">
        <div className="tablet:w-1/2 mb-4 tablet:mb-0">
           <span className="text-1xl font-bold mb-2"> {activeSection.subtitle} </span>
          <h2 className="text-2xl font-bold mb-2">{activeSection.title}</h2>
          <p>{activeSection.content}</p>
        </div>
        <div className="tablet:w-1/2">
          <img src={activeSection.images} alt={activeSection.title} className="w-full h-auto rounded" />
        </div>
      </div> 
      
    </div>

           

  );
}





export default Technology