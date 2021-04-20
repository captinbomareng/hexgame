import React from "react";
import { AppBar, Toolbar,makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import {SiNintendogamecube} from 'react-icons/si';


const NavBar = () => {

  const classes = useStyles();

  return (
    <AppBar position="sticky"  >
      <Toolbar>
        <Link to='/' className={classes.navLogo}>
          <SiNintendogamecube />
          <div className={classes.navName}>HexGame</div>
        </Link>
        <div className={classes.navbarContainer}>
          <ul className={classes.navbarList}>
            <li className={classes.navbarItem}>
              <Link to='/ai' className={classes.navbarLink} >AI </Link>
            </li>
            <li className={classes.navbarItem}>
              <Link to='/online' className={classes.navbarLink}>Online </Link>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

const useStyles = makeStyles({
  navLogo:{
    display:'flex',
    alignItems:'center',
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2.5rem",
    listStyle: "none",
  },
  navName: {
    marginLeft: "5px",
  },
  navbarContainer:{
    display: "flex",
    justifyContent: "flex-end",
    height:"65px",
    width:"100%"
  },
  navbarList:{
    display:"flex",
    listStyle:"none",
    alignItems:"center",
  },
  navbarItem:{
    display:"flex",
    alignItems:"center",
    height:"65px",
    fontSize: "1.5rem",
    borderBottom:"2px solid transparent",
    '&:hover':{
      borderBottom:"2px solid #008394"
    }
  },
  navbarLink:{
    textDecoration:"none",
    color:"#fff",
    padding: "0.5rem 1rem",
    '&:hover':{
      color:"#008394",
      transition: "all 1s ease"
    }
  }

})


