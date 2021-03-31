import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import { useState } from 'react'
import p1 from './assests/p1.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default ({ catagoryPage, setchart, chart }) => {
    // window.scrollTo(0, 0);

    const [totalBill, settotalBill] = useState(catagoryPage.price);

    const calculater = (e, para) => {
        // totalBill = totalBill + para
        console.log(e.target.checked);
        settotalBill(totalBill + (+para))
    }

    // let dataSet = {
    //     Engine: [
    //         {
    //             label: 'Outboard motor',
    //             price: '$3,249',
    //         }
    //     ],

    //     Rigging: [
    //         {
    //             label: 'Ronstan Rigging ',
    //             price: '$4,636',
    //         },
    //         {
    //             label: 'Harken Rigging',
    //             price: '$5,636',
    //         },
    //         {
    //             label: 'Karver Rigging',
    //             price: '$6,636',
    //         },
    //     ],
    //     'House Power': [
    //         {
    //             label: 'Batteries 12v 100AH 1280WH, Mono Solar panal, 70 Amp charger, Dongle, Color control GX, BlueSolar MPPT 150/35 Charge Controller, DC Converters 200 Watt.',
    //             price: '$5,275',
    //         }
    //     ],

    //     Sails: [
    //         {
    //             label: 'Mainsails 19.5 m2',
    //             price: '',
    //         },
    //         {
    //             label: 'Self Tacking Storm Jib  6.75m2',
    //             price: '',
    //         },
    //         {
    //             label: 'Spinnaker or Genoa',
    //             price: '',
    //         },
    //     ],

    //     'Deck Equipment': [
    //         {
    //             label: 'Bilge pump,switch,mooring cleat.',
    //             price: '$1,365',
    //         },
    //         {
    //             label: 'Anchoring',
    //             price: '$3,133',
    //         },
    //         {
    //             label: 'Fuses & wiring',
    //             price: '$2000',
    //         },
    //         {
    //             label: 'Navigation Equipment',
    //             price: '$2,393',
    //         },
    //         {
    //             label: 'Safety Equipment',
    //             price: '$3,597',
    //         },
    //     ],


    // }
    let headings = ['Engine', 'Rigging', 'House Power', 'Sails', 'Deck Equipment','Safety Equipment', 'Battery']
    let dataSet = [
        [
            {
                label: 'Outboard motor',
                price: 3249,
            }
        ],

        [
            {
                label: 'Ronstan Rigging ',
                price: 4636,
            },
            {
                label: 'Harken Rigging',
                price: 5636,
            },
            {
                label: 'Karver Rigging',
                price: 6636,
            },
        ],
        [
            {
                label: 'Batteries 12v 100AH 1280WH, Mono Solar panal, 70 Amp charger, Dongle, Color control GX, BlueSolar MPPT 150/35 Charge Controller, DC Converters 200 Watt.',
                price: 5275,
            }
        ],

        [
            {
                label: 'Mainsails 19.5 m2',
                price: '',
            },
            {
                label: 'Self Tacking Storm Jib  6.75m2',
                price: '',
            },
            {
                label: 'Spinnaker or Genoa',
                price: '',
            },
        ],

        [
            {
                label: 'Bilge pump,switch,mooring cleat.',
                price: 1365,
            },
            {
                label: 'Anchoring',
                price: 3133,
            },
            {
                label: 'Fuses & wiring',
                price: 200,
            },
            {
                label: 'Navigation Equipment',
                price: 2393,
            },
            {
                label: 'Safety Equipment',
                price: 3597,
            },
        ],
        [],

[]
    ]



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
            <Typography fontSize={{ xs: '20px', md: '26px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                <center> Product Details </center>
            </Typography>
        </Box>
        <Container textAlign='center' justifyContent='space-between' sx={{ padding: '100px 0px', }}>
            <Box width={{ xs: '100%', md: '70%' }} margin='auto' >
                <Grid container alignItems="center" boxShadow='0px 0px 25px 10px #F6F4FD'>
                    <Grid item xs={12} sm={6} textAlign='center'> <img src={catagoryPage.img ? catagoryPage.img : p1} width='80%' /> </Grid>
                    <Grid item xs={12} sm={6}>
                        <Container>
                            <Typography fontSize={{ xs: '19px' }} fontWeight='bold' mb={5} mt={2}>
                                {catagoryPage.name ? catagoryPage.name :"Sea Ray Catamaran"}
                            </Typography>
                            <Typography >
                                ⭐⭐⭐⭐⭐ <span>(20)</span>  <br /> <br />
                                $ {catagoryPage.name ? catagoryPage.name :"1,757,400"} 
                                <br /> <br />
                                Color : ⚪ 🔴 🔵 ⚫ 🟡 <br /> <br />
                                Great deck space, smooth cricong at sea.
                                Fibreglass. Twin hull <br /> <br />

                            </Typography>
                            <Button onClick={() => {
                                setchart(chart + 1)
                                console.log(catagoryPage.img);
                            }}> Add to Chart  ♡ </Button>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container mt={2} columnGap={5}>

                <Typography component="h4" variant="h6">
                        Name your Boat
                    </Typography>
</Grid>
                <Grid container mt={5} columnGap={5}>
                    <Grid item >
                        <Button > Catagories </Button>
                    </Grid>
                    <Grid item>
                        <Button > Additional Info </Button>
                    </Grid>
                    <Grid item >
                        <Button > Reviews </Button>
                    </Grid>
                    <Grid item >
                        <Button > Video </Button>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <TableContainer>
                        <Table sx={{ width: '100%' }} size="small" >
                            <TableBody>


                                {
                                    dataSet.map((obj, indx) => {
                                        return <>
                                            <TableRow sx={{ marginTop: '50px' }}>
                                                <TableCell align="left" sx={{ borderBottom: '0px solid' }}><span style={{ fontSize: '20px', fontWeight: 'bold' }}> {headings[indx]} </span></TableCell>
                                                <TableCell align="right" sx={{ borderBottom: '0px solid' }}></TableCell>
                                            </TableRow>
                                            {dataSet[indx].map((obj) => {
                                                return <>
                                                    <TableRow >
                                                        <TableCell align="left" sx={{ borderBottom: '0px solid' }}> <input type="radio" id="html" name={headings[indx]} onClick={(event) => {
                                                            calculater(event, obj.price)
                                                        }} /> {obj.label}</TableCell>
                                                        <TableCell align="right" sx={{ borderBottom: '0px solid' }}> {obj.price ? ("$" + obj.price) : null}</TableCell>
                                                    </TableRow>
                                                </>
                                            })}
                                        </>
                                    })


                                }

                                <TableRow >
                                    <TableCell align="left" sx={{ borderBottom: '0px solid' }}><b>Total Bill</b> </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: '0px solid' }}> $ <b>{totalBill}</b> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>


                    <center>
                        <Link to="/orderCompleted">
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ background: '#D0732A', ':hover': { background: 'blue' } }}
                                onClick={() => {
                                    toast.success('Success', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                }}
                            >
                                Confirm To Buy
                            </Button>
                        </Link>
                    </center>
                </Box>


            </Box>

        </Container>
    </>
    )
}
