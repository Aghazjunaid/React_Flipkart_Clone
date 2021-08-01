import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {products} from '../../data';
import { Box, makeStyles, Typography, Button, Divider  } from '@material-ui/core';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const useStyle = makeStyles(theme => ({
    container: {
        background: '#FFFFFF'
    }, 
    wrapper:{
        display:"flex",
        padding: '15px 20px'
    },
    button:{
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    image: {
        height: 150
    },
    dealText: {
        fontSize: 22,
        fontWeight: 550,
        lineHeight: '32px',
        marginRight: 25
    },
    boxdata:{
        padding: '25px 15px',
        textAlign: "center"
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
}));

  

function Multi_carousel() {
    const classes = useStyle(); //To use css first call it

    return (
        <Box className={classes.container}>
            <Box className={classes.wrapper}>
                <Typography className={classes.dealText}>Deals Of the Day</Typography>
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>

            </Box>
            <Divider/>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(data =>(
                        <Box className={classes.boxdata}>
                        <img src={data.url} className={classes.image} alt="aj"/>
                        <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{data.title.shortTitle}</Typography>
                        <Typography className={classes.text} style={{ color: 'green' }}>{data.discount}</Typography>
                        <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{data.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel>;

        </Box>
    )
}

export default Multi_carousel
