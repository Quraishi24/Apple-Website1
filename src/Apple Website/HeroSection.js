import React from 'react'
import Hero from './Hero';
import img1 from "./images/hero1.png";
import img2 from "./images/hero2.png";
import img3 from "./images/hero3.png";
import AppleIcon from "@mui/icons-material/Apple";
import TopBar from './TopBar';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const HeroSection = () => {
    const herosInfo = [
        {
            topBar:<TopBar/>,
            searchicon:<SearchOutlinedIcon style={{marginLeft:"83%",color:"grey",marginTop:"10px"}}/>,
            heading:"iPhone14",
            description:"Big and Bigger",
            link1: "Learn more",
            link2: "Buy",
            bg:"#fcfbfb",
            color:"black",
            img:img1
        },
        {
            heading:"iPhone14 Pro",
            description:"Pro Beyond",
            link1: "Learn more",
            link2: "Buy",
            bg:"black",
            color:"white",
            img:img2
        },
        {
            heading:"Watch",
            paragraph:"ULTRA",
            description:"Adventure awaits",
            link1: "Learn more",
            link2: "Buy",
            bg:"#fcfbfb",
            color:"black",
            img:img3,
            icon:<AppleIcon style={{fontSize:"40px",marginTop:"10px"}}/>
        }
    ]
  return (
    <div>
        {herosInfo.map((item,index) => <Hero key={index} item={item}/>)}
    </div>
  )
}

export default HeroSection