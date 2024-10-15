import React ,{ useEffect ,useState } from 'react';
import NavBar from "../../components/nav_bar/nav_bar";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav';
import './resource.css';

function Resource(){
    const navigate = useNavigate();
    return(
        <React.Fragment>
        <div className='about_page_main_div'>
        <div className='nav_bar_about'>    <User_nav/>
      
       </div>
       <div className='para_about'>
       <div className="container">
  <div className="row">
    <div className="col-md-6 item">
      <div className="item-in">
        <h4>Fundamental Analysis of KPIT Technologies</h4>
        <div className="seperator"></div>
        <p>Fundamental Analysis of KPIT Technologies: The mid-cap company KPIT Tech. has rallied close to 70% in the last twelve months while the other IT giants’ shares went nowhere. What makes this company so special and different from other IT players as it trades at a...</p>
       
      </div>
    </div>
    <div className="col-md-6 item">
      <div className="item-in">
        <h4>Best Large Cap Stocks Under Rs 200</h4>
        <div className="seperator"></div>
        <p>Best Large Cap Stocks Under Rs 200: In an economy where everything is getting expensive, it gets difficult to find value for money, be it a good meal at a restaurant, a cinematic experience, or a good quality product. We managed to find the best large cap stocks under...</p>
       
      </div>
    </div>
    <div className="col-md-6 item">
      <div className="item-in">
        <h4>Fundamental Analysis Of SBI</h4>
        <div className="seperator"></div>
        <p>Fundamental Analysis Of SBI: The Indian banking sector is regulated by the Reserve Bank Of India, a government entity that reserves the right to regulate the banking industry in India. This includes payments, financing, printing currencies, lending, and the...</p>
       
      </div>
    </div>
    
    <div className="col-md-6 item">
    <div className="item-in">
        <h4>Top Navratna Stocks in India</h4>
        <div className="seperator"></div>
        <p>Top Navratna Stocks in India: The public sector has been one of the driving forces of development within India. But often this sector is overlooked as an investment opportunity. In this article, we take at what the companies that have been conferred the Navratna...</p>
      </div>
    </div>
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
export default Resource