import React from "react";
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Box } from "@mui/material";




const Card = ({ description, name, paragraph, link1, link2, bg, img, color, icon, iconimg }) => {

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
  
  <Box  className="header" 
       style={{backgroundColor:bg, 
               color: color,
               marginBottom:"20px",
               marginTop:"10px",
               border:"1px solid black",
               paddingTop:"15px",
               maxWidth:"100%"}}>

    {icon} 
    <span className="cardHead">{name}</span>
    <p className="series">{paragraph}</p>
    <img style={{maxWidth:"100%"}} src={iconimg} alt=""/>
    <Div style={{backgroundColor:bg,color:color}}><p className="description">{description}</p></Div>
    <Link href="#" >
    {`${link1}`}
    </Link>
    <Link href="#">
    {`${link2}`}
    </Link>
    <img src={img} className="image" alt="Watch"  />
  </Box>
      
  );
};

export default Card;
