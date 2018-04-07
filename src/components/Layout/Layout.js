import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state={
    showSideDrawer: false
  }

  sideDrawerClose = () => {
    this.setState({showSideDrawer: false})
  }

  menuToggle = () => {
    this.setState((prev)=>(
      {showSideDrawer: !prev.showSideDrawer}
    ))
  }

  render(){
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.menuToggle}/>
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClose}/>
        <main className={styles.Content}>
        {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
