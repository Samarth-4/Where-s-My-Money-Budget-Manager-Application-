import React ,{ useEffect ,useState } from 'react';
import "./about_page.css";
import NavBar from "../../components/nav_bar/nav_bar";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About_page() {

  const website = () => {
    window.open("https://krish-joshi-6a7d4.web.app/");
  };
    const navigate = useNavigate();
    return(
        <React.Fragment>
            <div className='about_page_main_div'>
            <div className='nav_bar_about'>    <User_nav/>
          
            </div>
            <div className='para_about'>
            <div className='para_about_sub_div'>
          <div className='para_about_left'>
            <h2 className='About_developer'data-text="About Developer">About Developer
</h2>
<h3>Krish joshi</h3>
<p>Hi, I'm a passionate and energetic professional Competitive coder , Programmer and Software engineer and I am an fullstack developer , a programmer with good knowledge of front-end techniques and backend techniques. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one' and Provide high quality professional websites and I'm pursuing my degree from Chandigarh University branch Bech "CSE" . and also working on "Data structure and algorithm and nowadays I am working on Flutter development for making android and ios apps and learning daily new technology , improving my knowledge daily.</p>

<br></br>
<a onClick={website}>More about "Krish joshi"</a>

          </div>
          
          <div className='para_about_right'>
          <h2>About Where's My Money
</h2>
<br></br>
<p>Welcome to our budget management website! Our website is dedicated to helping individuals and households achieve their financial goals by providing them with the tools and resources they need to manage their finances effectively.
We understand that managing money can be overwhelming, especially when you are juggling multiple bills and expenses each month. Our mission is to simplify the budgeting process and help you make the most out of your hard-earned money.
<br></br><br></br>
Our team is composed of financial experts who are passionate about helping people achieve financial success. We provide personalized guidance and support to help you create and stick to a budget that works for your unique situation.

Whether you are looking to pay off debt, save for a big purchase, or build your wealth, our website has the resources you need to succeed. We offer budgeting tools, financial calculators, informative articles, and much more to help you stay on track.</p>
          </div>

          </div>
           </div>
        
                <div className='sub_about_page_div'>
                
                    
                 <button className='back_button' onClick={async () => {
               try{ 
              
                navigate("/User");
               }catch(e){    
               }
              }} >BACK</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default  About_page;