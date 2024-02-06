import React from 'react'
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Hero = ({item}) => {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <div className='heroDiv' style={{backgroundColor:item.bg,
                 color:item.color,
                 marginBottom:"10px",
                 border:"1px solid black"}}>
        {item.topBar}
        {item.searchicon}
        {item.icon}
        <span className='heroHead' >{item.heading}</span>
        <p style={{color:"rgb(173,6,6)"}}>{item.paragraph}</p>
        <Div style={{backgroundColor:item.bg,color:item.color,paddingTop:"0"}}><p className='heroDesc'>{item.description}</p></Div>
        <Link href="#">
        {`${item.link1}`}
        </Link>
        <Link href="#">
        {`${item.link2}`}
        </Link>
        <img  src={item.img} alt='apple' className='heroImage'/>
    </div>
  )
}

export default Hero