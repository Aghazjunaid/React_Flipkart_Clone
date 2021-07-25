import React from 'react'
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 5% 0 auto', //margin left auto will set the data in rigtmost side
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            alignItems: 'center',
            fontSize: 15,
            fontWeight: 600,
        },
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 700,
        fontSize: 15,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    }
}));

function HeaderButton() {
    const classes = useStyle();

    return (
        <>
            <Box className={classes.wrapper}>
                <Link>
                    <Button className={classes.login} variant="contained">Login</Button>
                </Link>
                <Typography style={{ marginTop: 5 }}>More</Typography>
                <Link to='/cart' className={classes.container}>
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                </Link>
            </Box>
        </>
    )
}

export default HeaderButton
