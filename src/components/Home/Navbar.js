import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import {navData} from '../../data';


const useStyle = makeStyles(theme => ({
    nav:{
        display:"flex",
        justifyContent: "space-between",
        margin: "0px 130px",
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container:{
        textAlign: "center"
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }

}));

function Navbar() {
    const classes = useStyle(); //To use css first call it

    return (
        <>
            <Box className={classes.nav}> 
            {
                navData.map(data=> (
                    <Box className={classes.container}>
                    <img src={data.url} className={classes.image} />
                    <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }

            </Box>
        </>
    )
}

export default Navbar
