import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, pink600, pink500,blue600,purple800,lightBlueA400} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';
import GlobalStyles from '../../styles';

const DataChart = (props) => {

  const styles = {
    paper: {
      backgroundColor: lightBlueA400,
      height: 150
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: white,
      backgroundColor: lightBlueA400,
      padding: 10
    }
  };

  return (
    <Paper>
      <div style={{...GlobalStyles.title, ...styles.header}}>Data Chart</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={lightBlueA400}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default DataChart;
