import React ,{ useEffect ,useState } from 'react';
import NavBar from "../../components/nav_bar/nav_bar.js";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./transactions.css";
import userimg from "../../images/user.jpg";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { firebaseAuth } from '../../uitils/firebase/firebase.js';
import { Bar,Doughnut } from "react-chartjs-2";
import data from "../Blog/data.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const dataSet = data ;

function Transactions() {
 
  const data = {
    
    label: 'Dataset 1',
    labels: [
      dataSet.names.FOOD,
      dataSet.names.TRAVEL,
      dataSet.names.RENT,
      dataSet.names.MIS,
      dataSet.names.STATIONARY
    ]
    ,
    datasets: [{
      label: '',
      data: [dataSet.expenses.FOOD, dataSet.expenses.MIS, dataSet.expenses.RENT,dataSet.expenses.STATIONARY,dataSet.expenses.TRAVEL],
      backgroundColor: [
        
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        ,'rgb(12, 175, 0)'
      ],
      hoverOffset: 4
    }]
  };
  

    const navigate = useNavigate();
    return(
        <React.Fragment>
        <div className='blog_nav_main_div'><div className='nav_bar_blog'>    
         <User_nav/>

                

   
        </div></div>
         
       
            <div className='blog_main_div'>
           
           <div className='leftbar'>
           <div className=''> <img src={userimg} className="about_pic"/></div><br></br>
           <a onClick={async () => {
               try{ 
              
                navigate("/Research");
               }catch(e){    
               }
              }}> <img src= {icon1} className="icon_dashboard"/>Dashboard</a>
  <a onClick={async () => {
               try{ 
              
                navigate("/Transactions");
               }catch(e){    
               }
              }}><img src= {icon2} className="icon_dashboard"/>Transactions</a>
  <a onClick={async () => {
               try{ 
              
                navigate("/Incomes");
               }catch(e){    
               }
              }}><img src= {icon3} className="icon_dashboard"/>Incomes</a>
  <a onClick={async () => {
               try{ 
              
                navigate("/Expenses");
               }catch(e){    
               }
              }}><img src= {icon4} className="icon_dashboard"/>Expenses</a>
  </div>
      
        
                <div className='sub_blog_div'>
                <div className='chart_main_blog'>
                <div className='chart_sub_blog'>
                <Bar data={data} />
                </div>
                <div className='chart_sub_blog_second'>
                <div className='sub_div_chart'><div className='content'>Total Income <br></br><h1>$1200</h1> </div></div>
                <div className='sub_div_chart'><div className='content'>Total Expenses <br></br><h1>$1000</h1> </div></div>
                
                <div className='sub_div_chart2'><div className='content'>Total Balance <br></br><h1>$1000</h1> </div></div>
                </div>
               
          
            
                </div>
                <div className='history'><h2>Recent Transactions</h2>
                <div className='history_sub_div'><p> <span className='amount1'>Spend on</span> <span className='amount'>$110</span><span className='amount'>Date</span></p></div>
                <div className='history_sub_div'><p> <span className='amount1'>Spend on</span> <span className='amount'>$110</span><span className='amount'>Date</span></p></div>
                
                </div>
              
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
export default  Transactions;