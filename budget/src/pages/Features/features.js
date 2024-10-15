import React ,{ useEffect ,useState } from 'react';
import NavBar from "../../components/nav_bar/nav_bar";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav';
import "./features.css";
import swal from 'sweetalert';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar,Doughnut } from "react-chartjs-2";
  import data from "../Blog/data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const dataSet = data ;
function Features(){


  const [AmountGraph , setAmountGraph]  = useState(0);
  const [InterestGraph , setInterestGraph]  = useState(0);
  const [YearsGraph , setYearsGraph]  = useState(0);
  const calculate_result = (e) =>{
   
const amount = document.getElementById('amount').value;

const interest = document.getElementById('interest').value;
const years = document.getElementById('years').value;

const principal = parseFloat(amount);
const calculatedInterest = parseFloat(interest) /100 / 12;
const calculatedPayment =  parseFloat(years) * 12;

// Compute monthly payments
const x = Math.pow(1 + calculatedInterest, calculatedPayment);
const monthly = (principal * x * calculatedInterest)/(x-1);
var interest2 = ((monthly * calculatedPayment) - principal).toFixed(2);
var payment2 = (monthly * calculatedPayment).toFixed(2);
document.getElementById("monthly-payment").innerHTML = monthly.toFixed(2);  
document.getElementById("total-interest").innerHTML = interest2 ;
document.getElementById("total-payment").innerHTML = payment2 ;
// Check if value is finite
setAmountGraph(monthly.toFixed(2));
setYearsGraph( payment2);
setInterestGraph(interest2 );
e.preventDefault();


  }
  function showError(error){
    // create div
    const errorDiv = document.createElement('div');
  
    // Get card and heading in order to add new div to DOM. Parent element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
  
    // Give div a class name
    errorDiv.className = 'alert alert-danger';
  
    // Create text and append div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading. Insert above will take in the parent element which is the card in this case and for the parameters
    // It will take in the element you want to put in and the element you want to put it before, in this case errorDiv and the heading
  
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
  
    setTimeout(clearError, 3000);
  
  }
  function clearError(){
    document.querySelector('.alert').remove();
  }  
  




 
    const data = {
    
        labels: [
          "Graph",
     ]
        ,
        datasets: [{
          label: 'EMI',
          data: [AmountGraph],
          backgroundColor: [

            'rgb(255, 99, 132)',
        
           
          ],
          hoverOffset: 4
        },{
          label: 'Interest',
          data: [InterestGraph],
          backgroundColor: [
            
            
            'rgb(54, 162, 235)',
          
           
          ],
          hoverOffset: 4
        }
        ,{
          label: 'TOTAL AMOUNT',
          data: [YearsGraph],
          backgroundColor: [
            'rgb(255, 205, 86)'
           
          ],
          hoverOffset: 4
        }
      ]
      };
     
    const navigate = useNavigate();
    return(
        <React.Fragment>
        <div className='about_page_main_div'>
        <div className='nav_bar_about'>    
        <User_nav/>
        </div>
    
            <div className='sub_blog_div2'>
            <div className='calculator'>
            <div className='claculator_box'>
            <label className='lable'><h4>Total amount</h4> </label>
<input className='calculator_input' type='number' id='amount'/> 
</div>
<div className='claculator_box'>
<label className='lable'><h4>Tenure</h4> </label>
<input className='calculator_input' type='number' id='years'/>
 </div>
<div className='claculator_box'>
<label className='lable'><h4>Interest Rate
</h4> </label>
<input className='calculator_input' type='number' id='interest'/>
 </div>
<div className='claculator_box_button'>

<button className='claculate_button' onClick={calculate_result}>Calculate</button> </div>

<div className='calculator_output'>
<div className='calculator_sub_output'>
<div className='left_box_output'>
    <div className='EMI' ><h3  >EMI</h3><span id='monthly-payment'>$0</span></div>
    <div className='EMI2'><h3  >Total Interest Payable</h3>
    <span id='total-interest'>$0</span></div>
<div className='EMI3' ><h3 >Total Payment
(Principal + Interest)
</h3> <span id='total-payment'>$0</span></div>

    
    </div>
    <div className='left_box_output'>
    <div className='graph'>   <Bar data={data} /></div>
    
    
    </div>
    
</div>


</div>
            </div>
            
                
             <button className='back_button2' onClick={async () => {
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
export default Features;