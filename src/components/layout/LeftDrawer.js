import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import { Link ,withRouter} from "react-router-dom";
import {ListItem} from 'material-ui';
import DashBoard from 'material-ui-icons/Dashboard'
import NoteAdd from 'material-ui-icons/NoteAdd'
import EventNote from 'material-ui-icons/EventNote'
import {blue600,lightBlueA400} from 'material-ui/styles/colors';


const iconStyles = {
  marginRight: 24,
};

const LeftDrawer = (props) => {
  
  let { open } = props;
  const { classes  , location:{pathname}, children } = props;
  console.log('$')
  console.log(props.location)
  console.log(props.location.pathname)
  console.log('$')
  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 18,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: lightBlueA400,
      height: 56,
      textAlign:'center',
      fontWeight:700
    },
    selected: {
      backgroundColor: "turquoise !important",
      color: "white",
      fontWeight: 600
    },
    menuItem: {
      color:'#ffffff',
      fontSize: 14,
    },
    listItem: {
      fontSize: 14,
      color:'red'
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url(' + require('../../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  return (
    <Drawer
      open={open}>
        <div style={styles.logo}>
         React Redux Material UI
        </div>
        <div>    
            <MenuItem
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              primaryText="DashBoard"
              key={0}
              style={styles.menuItem}              
              classes={{ selected: styles.listItem }}
              leftIcon={<DashBoard color={'#ffffff'} />}
              selected
              containerElement={<Link to={"/dashboard"} selected={'/dashboard'===pathname} className={props.location.pathname === '/dashboard' || null ? 'menu-item' : 'notActive'}
              />}
            />


             <MenuItem
              key={1}
              style={styles.menuItem}
              primaryText="Existing Estimates"
              leftIcon={<EventNote color={'#ffffff'}/>}
              containerElement={<Link to={"/formpage"} selected={'/formpage'===pathname} className={props.location.pathname === '/formpage' || null ? 'menu-item' : 'notActive'}/>}
            />

      <ListItem
      style={{color:"red"}} 
      primaryText="New Estimate"
      leftIcon={<NoteAdd color={'#ffffff'}/>}
      style={styles.menuItem}
      disabled	
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key={1}
          primaryText="Price Quote"
          style={styles.menuItem}
          containerElement={<Link to={"/"} />}  
        />,
        <ListItem
          key={2}
          primaryText="Quick Quote"
          style={styles.menuItem}
          containerElement={<Link to={"/"} />}  
        />
      ]}
    />
        </div>        
    </Drawer>
  );
};


export default withRouter(LeftDrawer);
