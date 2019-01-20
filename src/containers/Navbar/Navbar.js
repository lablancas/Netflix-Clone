import React, { Component } from 'react';
import NavigationItem from '../../components/NavigationItem/NavigationItem'
import SearchLogo from '../../static/images/search-icon.svg'; 
import NetflixLogo from '../../static/images/Netflix_Logo_RGB.png'; 
import Logo from '../../static/images/logo.png';
import BellLogo from '../../static/images/bell-logo.svg';
import DropdownArrow from '../../static/images/drop-down-arrow.svg'; 
import DropdownContent from "./DropdownContent"; 


class navigation extends Component {
 state = {
   scrolling: false
 }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll); 
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0 ) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }

 

  render () {

    return (
      <nav className={"navigation " + (this.state.scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={Logo} alt=""/></NavigationItem>
        </ul>
      </nav>
    )
  }
} 

export default navigation; 