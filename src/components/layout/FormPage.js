import React from 'react';
import {grey400} from 'material-ui/styles/colors';

const FormPage = () => {
  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
        <form>    
        Hi
        <hr/>
        Hello
        <hr/>       
        <div style={styles.buttons}> 
        </div>
      </form>
  );
};

export default FormPage;
