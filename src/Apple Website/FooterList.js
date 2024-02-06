import React from 'react'
import { Box, Grid, Typography } from '@mui/material'


const FooterList = () => {
    
  const lists = [
    {
        heading : "Shop and Learn",
        subLists : ["Store","Mac","iPad","iPhone","Watch","AirPods","TV & Home","AirTag","Accessories","Gift Cards"]
    },
    {
        heading : "Services",
        subLists : ["Apple Music","Apple TV+","Apple Fitness+","Apple News+","Apple Arcade","iCloud","Apple One","Apple Card","Apple Books","Apple Podcasts","App Store"]
    },
    {
        heading : "About peaple",
        subLists : ["Newsroom","Apple Leadership","Career Oppurtunities","Investors","Ethics and Compliance","Events","Contact Apple"]
    },
    {
        heading : "Apple Values",
        subLists : ["Accessability","Education","Enviroinment","Inclusion and Diversity","Privacy","Racial Equity and Justice","Supplier Responsibility"]
    },
    {
        heading : "Apple Store",
        subLists : ["Find a Store","Genius Bar","Today at Apple","Apple Camp","Apple Store App","Refurbished and Clearence","Financing","Apple Trade In","Order Status","Shopping Help"]
    },
    {
        heading : "Account",
        subLists : ["Manage Your Apple ID","Apple Store Account","iCloud.com"]
    },
    
    {
        heading : "For Buisness",
        subLists : ["Apple and Buisness","Shop for Buisness"]
    },
    {
        heading : "For Education",
        subLists : ["Apple and Education","Shop for K-12","Shop for College"]
    },
    {
        heading : "For Healthcare",
        subLists : ["Apple in Healthcare","Health on Apple Watch","Health Records on iPhone"]
    },
    {
        heading : "For Government",
        subLists : ["Shop for Government","Shop for Veterans and military"]
    },
    
    
    
]

  return (
    
  <Box className='footerList'>
    
    {lists.map((list,index) => (
    
      <Box key={index} sx={{marginRight:"20px"}}>
        <Grid>
        <Typography variant='h4' sx={{fontSize:"14px",fontWeight:"bold",marginBottom:"10px",marginTop:"10px",textAlign:"left"}}>{list.heading}</Typography>
        {list.subLists.map((subList,subIndex) => (<Typography sx={{fontSize:"12px",fontStyle:"sans-serif",textAlign:"left",color:"grey"}} key={subIndex} >{subList}</Typography>))}
        </Grid>
      </Box>
    ))}
  </Box>
  
  )
}

export default FooterList