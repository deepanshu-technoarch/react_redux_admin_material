import React from 'react';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import { grey600 } from 'material-ui/styles/colors';

const SearchBox = () => {

  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: '#222222',
      backgroundColor: "#ffffff",
      borderRadius: 2,
      height: 35,
    },
    inputStyle: {
      color: '#222222',
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: grey600,
    }
  };

  return (
    <div>
      <IconButton style={styles.iconButton} >
        <Search color={white} />
      </IconButton>
      <TextField
        hintText="Search..."
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
      />
    </div>
  );
};

export default SearchBox;
