import React from "react";
import { makeStyles, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    search: {
        backgroundColor: "#fff",
        marginLeft: 10,
        width: '38%',
        display: "flex"
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        color: 'inherit',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
        color:'black'
      },
    
}))



function SearchBar() {
    const classes = useStyles(); //To use css first call it

  return (
    <>
      <div className={classes.search}>
        <InputBase
              placeholder="Search for products, brands and more"
              classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
