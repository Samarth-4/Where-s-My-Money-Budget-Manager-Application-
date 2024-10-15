import '../App.css';
import React ,{ useEffect } from 'react';
import NavBar from '../components/nav_bar/nav_bar';
import Front_page from './font_page/front_page';
import Sign_up from './sign_up/sign_up';

function Main() {
  return (
    <React.Fragment>
<div className='maindiv'>
  <div className='subdiv'>
  <NavBar/>
  <Front_page/>
  </div>
</div>
    
    </React.Fragment>
    
  );
}

export default Main;
