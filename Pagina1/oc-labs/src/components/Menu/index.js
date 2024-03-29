import React from 'react';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../images/web-logo.png';

const MenuBar = () => {
  return (

    <Menu  stackable secondary>
    <Menu.Item>
      <Link to="/"><Image size="small" src={logo} style={{ marginRight: '1.5em' }} /></Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item><Link to="/">Home</Link></Menu.Item>
      <Menu.Item><Link to="/technology">Technologies</Link></Menu.Item>
     
      <Dropdown item text='Services' >
        <Dropdown.Menu>
          <Dropdown.Item><Link to="/consulting">Blockchain Consulting</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/Servi_AS">Assestment</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/Servi_SC">Smart Contract</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/Servi_DA">dApps</Link></Dropdown.Item>
        

        </Dropdown.Menu>


        
      </Dropdown> 
   
      

              
      <Menu.Item><Link to="/CaseStudies">Case studies</Link></Menu.Item>
      <Menu.Item><Link to="/ContactUs">Contact Us</Link></Menu.Item>
    </Menu.Menu>
  </Menu>
    

    


  )
}

export default MenuBar;

