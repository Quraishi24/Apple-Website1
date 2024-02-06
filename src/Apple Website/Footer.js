import React from 'react';
import { Box, Divider, Link } from '@mui/material';
import FooterList from './FooterList';
import FooterSection from './FooterSection';

const Footer = () => {
    

    const anchorlinks = ["Privacy Policy |", "Terms of Use |", "Sales and Refunds |", "Legal |", "Site Map"];

    const divStyle = {
        
        paddingTop: "10px",
        marginTop:"30px"
    };

    const year = new Date();

    return (
        <Box className='footerDiv' style={divStyle}>
            <FooterSection />
            <FooterList />
            <Box className='footer'>
                <p> More Ways to Shop : <Link  href='#'>Find an Apple Store</Link> or <Link  href='#'>Other Retailer</Link> near you. Or Call 1-800-MY-APPLE</p>
                <Divider/>
                <p className='footerPara'>Copyright &copy; {year.getFullYear()} Apple Inc. All rights reserved.
                <Box className='anchorF'>
                    {anchorlinks.map((link, index) => (
                        <Link key={index} href='http://localhost:3000/' >{link}</Link>
                    ))}
                </Box>
                </p>
            </Box>
        </Box>
    );
};

export default Footer;