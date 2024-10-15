import React ,{ useEffect ,useState } from 'react';
import "./incomes.css";
function Incomeitemdiv(props) {
   
   const amount = props.Amount;
   const Reference = props.Reference;
   const Title = props.Title;
   const Date = props.Date;
   const Option = props.Option;
   const Type = props.Type;
   if(Type === "Income"){
    return(<>  <div className='right_income_sub_div' >
    <span className='title'>{Title}</span>
    <div className='right_income_sub_sub_div'>
    <span className='amount2'>${amount}</span>
    <span className='reference'>{Reference}</span>
   <span className='date'> {Date}</span></div></div>
    </>) ;
   }
   
  
}
export default Incomeitemdiv;