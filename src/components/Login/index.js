import React from 'react'
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        height: '75vh',
        width: '110vh',
        maxWidth: 'unset !important'
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundRepeat: 'no-repeat',
        width: "40%",
        backgroundPosition: "center 85%",
        height: "75vh",
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login:{
        padding: "25px 35px",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        color: "#878787",
        fontSize:12,
        fontWeight:400

    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2,
        '&:hover': {
            background: '#FB641B',
        }
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        fontWeight:600,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
    },
    createText:{
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    }
})

function Login(props) {
    const classes = useStyle(); //To use css first call it

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">Login</Typography>
                        <Typography style={{marginTop: 20, color: "#dbdbdb"}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Box>
                        <Box className={classes.login}>
                            <TextField name='username' label='Enter Email/Mobile number' />
                            <TextField  name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <Typography className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box>
                </Box>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login
