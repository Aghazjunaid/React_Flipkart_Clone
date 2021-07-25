import React from "react";
import {AppBar, Toolbar, makeStyles, Box, Typography, withStyles} from '@material-ui/core';
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import { Link } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    header:{
        backgroundColor: '#2874f0',
        height:55
    },
    logo:{
        width:75
    },
    container:{
        display: 'flex'
    },
    subURL:{
        width:10,
        height: 10,
        marginLeft:3
    },
    component:{
        marginLeft:"12%",
        lineHeight:0
    },
    subHeading:{
        fontSize: 10,
        fontStyle: 'italic'
    }
}));

const ToolBar = withStyles({ //to override pre written css use withstyles
    root: {
      minHeight: 55
    },
})(Toolbar);

// Use box as div and Typography Heading
function Header() {
    const classes = useStyle(); //To use css first call it
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <ToolBar>
            <Link to='/' className={classes.component}>
                <img src={logoURL} className={classes.logo} />
                <Box component="span" className={classes.container}>
                    <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                    <img src={subURL} className={classes.subURL} />
                </Box>
            </Link>
            <SearchBar/>
            <HeaderButton/>
        </ToolBar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
