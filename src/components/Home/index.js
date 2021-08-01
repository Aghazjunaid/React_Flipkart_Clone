import React from 'react'
import Header from '../Header/Header'
import Carousell from './carousel'
import Navbar from './Navbar'
import Multi_carousel from './Multi-carousel'
import { makeStyles,Box } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    nav:{
        display:"flex",
        justifyContent: "space-between",
        margin: "0px 130px"
    },
    container:{
        textAlign: "center",
    },
    image: {
        width: 230,
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    },
    wrapper:{
        display: "flex",
        padding:10,
        backgroundColor: "#F2F2F2"

    },
    rightWrapper:{
        backgroundColor: '#FFFFFF',
        padding: 5,
        margin: "0 0 0 10px",
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    component:{
        padding:10,
        backgroundColor: "#F2F2F2"

    },
    leftWrapper:{
        width: "83%",
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    }

}));


function Home() {
    const classes = useStyle(); //To use css first call it
    const adURL = "https://rukminim1.flixcart.com/flap/464/708/image/2a776934a312131e.jpg?q=70"
    return (
        <>
            <Header/>
            <Navbar/>
            <Carousell/>
            <Box className={classes.wrapper}>
                <Box className={classes.leftWrapper}>
                    <Multi_carousel/>
                </Box>
                <Box className={classes.rightWrapper}>
                    <img src={adURL} className={classes.image} />
                </Box>
            </Box>
            <Box className={classes.component}>
                <Multi_carousel/>
            </Box>
            <Box className={classes.component}>
                <Multi_carousel/>
            </Box>

        </>
    )
}

export default Home
