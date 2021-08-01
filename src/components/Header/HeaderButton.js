import React, {useState} from 'react'
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Login from '../Login';


const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10,
                margin:2
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    },
    more:{
        [theme.breakpoints.down('sm')]: {
            fontWeight: 600,
            fontSize:15
        }   
    }
}));

function HeaderButton() {
    const classes = useStyle();
    const [open, setOpen] = useState(false)

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <>
            <Box className={classes.wrapper}>
                <Link>
                    <Button className={classes.login} onClick={()=> openDialog()} variant="contained">Login</Button>
                </Link>
                <Typography style={{ marginTop: 5 }} className={classes.more}>More</Typography>
                <Link to='/cart' className={classes.container}>
                    <Badge badgeContent={1} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                </Link>
                <Login open={open} setOpen={setOpen}/>
            </Box>
        </>
    )
}

export default HeaderButton
