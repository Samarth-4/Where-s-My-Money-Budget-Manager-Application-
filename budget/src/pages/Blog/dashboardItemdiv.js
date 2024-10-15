import React ,{ useEffect ,useState } from 'react';
import "../Incomes/incomes.css";
function Dashboarditemdiv(props) {
   
   const amount = props.Amount;
   const amount2 = props.Amount2;
   const Reference = props.Reference;
   const Title = props.Title;
   const Title2 = props.Title2;
   const Date = props.Date;
   const Option = props.Option;
   const Type = props.Type;
   if(Type === "Expenses"){
    return(<>  
    <div className='dashboard_sub_div' >
    <span className='title'>{Title}</span>
    <div className='dashboard_sub_sub_div'>
    <span className='amount2'>${amount}</span>
    <span className='reference'>{Reference}</span>
   <span className='date'> {Date}</span>
   <span className='reference'>Expense</span></div></div>
   
    </>) ;
   }
   else{
    return(<>  
        <div className='dashboard_sub_div' >
        <span className='title'>{Title2}</span>
        <div className='dashboard_sub_sub_div'>
        <span className='amount2'>${amount2}</span>
        <span className='reference'>{Reference}</span>
     
       <span className='date'> {Date}</span>
       <span className='reference'>INCOME</span></div></div>
       
        </>) ;
   }
   


  
}
export default Dashboarditemdiv;