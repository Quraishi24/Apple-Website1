import React from 'react'
import Card from './Card'
import img1 from "./images/watch.jpg";
import img2 from "./images/airpods.jpg";
import img3 from "./images/watches.jpg";
import img4 from "./images/fitness.png";
import iconimg from "./images/m2chip.png";
import img5 from "./images/air.jpg";
import img6 from "./images/figurecard.jpg";
import AppleIcon from "@mui/icons-material/Apple";
import { Box } from '@mui/material';




const cardsInfo = [
    {
      id:1,
      name: "Watch",
      paragraph: "SERIES 8",
      description: "A healthy leap ahead",
      link1: "Learn more",
      link2: "Buy",
      bg:"black",
      color:"white",
      img:img1,
      icon:<AppleIcon/>
    },
    {
      id:2,
      name: "Airpods Pro",
      description: "Rebuilt from the sound up",
      link1: "Learn more",
      link2: "Buy",
      bg:"black",
      color:"white",
      img:img2
    },
    {
      id:3,
      name:"Watch",
      paragraph:"SERIES 8",
      description:"A great deal to love",
      link1:"Learn more",
      link2:"Buy",
      bg:"#fcfbfb",
      color:"black",
      img:img3,
      icon:<AppleIcon/>
    },
    {
      id:4,
      name:"Fitness+",
      description:"Fitness for everyone. Now you all need is iphone",
      link1:"Learn more",
      link2:"Notify me",
      bg:"#fcfbfb",
      color:"black",
      img:img4
    },
    {
      id:5,
      name:"MacBook Air",
      iconimg:iconimg,
      link1:"Learn more",
      link2:"Buy",
      bg:"#fcfbfb",
      color:"black",
      img:img5
    },
    {
      id:6,
      name: "Card",
      description: "Get upto 3% Daily Cashback with every purchase",
      link1: "Learn more",
      link2: "Apply Now",
      bg:"#fcfbfb",
      color:"black",
      img:img6,
      icon:<AppleIcon/>
    }
  ]

const CardsSection = () => {
   
  return (
    <Box className='container'>
              {cardsInfo.map((item) => (<Card key={item.id}
                                                name={item.name}
                                                paragraph={item.paragraph}
                                                description={item.description}
                                                link1={item.link1}
                                                link2={item.link2}
                                                bg={item.bg}
                                                img={item.img}
                                                color={item.color}
                                                icon={item.icon}
                                                iconimg={item.iconimg}/>))}


    </Box>
  );
}

export default CardsSection