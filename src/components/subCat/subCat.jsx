import { Box, Container, Grid, Typography } from "@mui/material";
import React from 'react'
import p1 from './assests/p1.png';
import p2 from './assests/p2.png';
import p3 from './assests/p3.png';
import p4 from './assests/p4.png';
import { createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
const theme = createTheme();

export default ({ catagory, setcatagoryPage }) => {
    window.scrollTo(0, 0);
    const displayer = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (<>
        <Box sx={{ background: '#F1B78A' }}>
            <Typography align="center" fontSize={{ xs: '20px', md: '25px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                Choose Your Sub-Catagory
            </Typography>
        </Box>
        <Container textAlign='center' justifyContent='space-between' sx={{ padding: '100px 0px', }}>


            <Grid container alignItems='flex-start' mt={10}>

                {
                    [
                        {
                            img: p3,
                            price: 757400,
                            name: catagory + ' Model 1'
                        },
                        {
                            img: p4,
                            price: 925000,
                            name: catagory + ' Model 2'
                        },
                        {
                            img: p2,
                            price: 143609,
                            name: catagory + ' Model 3'
                        },
                        {
                            img: p1,
                            price: 300800,
                            name: catagory + ' Model 4'
                        },

                    ].map((obj) => {
                        return <Grid item xs={12} md={6} mb={10}>
                            <Container>
                                <Box sx={{ background: '#F6F7FB', textAlign: 'center', p: 5 }} width="80%" margin='auto'>
                                    <Link to='productDetail'>
                                        <img src={obj.img} width="100%" style={{ cursor: 'pointer', height: '300px' }} onClick={() => {
                                            setcatagoryPage(obj)
                                            console.log(obj);
                                            // setcatagoryPage({
                                            //     name: obj.name,
                                            //     price: obj.price
                                            // })
                                        }} />
                                    </Link>
                                </Box>
                                <center> <br />
                                    <b><span> {obj.name} </span></b>
                                    <Box display='flex' justifyContent='center' mt={2} mb={2}>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#5625DF' }} mr={1}></Box>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FF27B7' }} mr={1}></Box>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#37DAF3' }} mr={1}></Box>
                                    </Box>
                                    <b><span> $ {obj.price} </span></b>
                                </center>
                            </Container>
                        </Grid>
                    })
                }

            </Grid>
        </Container>
    </>
    )
}
