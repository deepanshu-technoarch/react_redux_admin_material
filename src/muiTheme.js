import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900,red500,deepPurple800,blue900,lightBlueA400} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary: 'blue600',
  },
  stepper: {
    iconColor: 'green' 
},
  palette: {
    accent1Color: 'blue',
  },
  dropDownMenu: {
    accentColor: 'red'
  },
  list:{
    color:'red'
    },
  palette: {
    hoverColor: 'red',
  },
  ripple: {
    color: 'white',
  },
  menuItem: {
    selectedTextColor: 'white',
  },
  appBar: {
    height: 57,
    color:lightBlueA400
  },
  drawer: {
    width: 230,
    color: '#333A3F',
  },
  raisedButton: {
    primaryColor: deepPurple800,
  },
  toggle: {
    thumbOnColor: 'yellow',
    trackOnColor: 'red'
  },
  listItem: {
    leftIconColor: "#FFFF00",
    rightIconColor: "#FFFF00",
  },
  svgIcon: {
    color: "ffffff"
  }

});


export default muiTheme;