import React, { PropTypes } from 'react';
import Header from './Header';
import LeftDrawer from './LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import Data from '../../data';
import { navDrawerOpen } from '../../actions/navigation';
import { connect } from 'react-redux';

class Layout extends React.Component {

  
  handleChangeRequestNavDrawer() {
    this.props.navDrawerOpen();
  }

  render() {

    console.log(this.props.navigation)
    const {open}=this.props.navigation;
    const paddingLeftDrawerOpen = 236;
    console.log("***")
    console.log(this.props.children)
    console.log("***")


    const styles = {
      header: {
        paddingLeft: open ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: open && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer open={open}
                        menus={Data.menus}
                        username="User Admin"/>

            <div style={styles.container}>
              {this.props.children}
            </div> 
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {  navigation, browser } = state;
  return {
	navigation: navigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navDrawerOpen: () => {
      dispatch(navDrawerOpen());
    },

  }
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(Layout);


