import React ,{ useEffect ,useState } from 'react';
import { firebaseAuth ,db } from '../../uitils/firebase/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection ,addDoc,getDocs } from  'firebase/firestore';
import NavBar from "../../components/nav_bar/nav_bar.js";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./blog.css";
import userimg from "../../images/user.jpg";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import Krish from "../../images/krish.jpg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // ArcElement,
} from 'chart.js';


import { Bar,Doughnut,Line } from "react-chartjs-2";
import data from "./data.js";
import DashboardItem from "./dashboardItem.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // ArcElement,
);
const dataSet = data ;

function Blog() {
 
    const navigate = useNavigate();
    const [UserName ,SetUserName] = useState("USERNAME");
  const [UserPic ,SetUserPic] = useState(userimg);
  const [uid , setUid] = useState("movies");
  const GoogleUser = firebaseAuth.currentUser;
  useEffect(()=>{
    setUid(GoogleUser.uid);
    SetUserName(GoogleUser.displayName);
    SetUserPic(GoogleUser.photoURL);
  },[])



const [movies , setmovies] = useState ([]);
const [id , setId] = useState([]);

useEffect(()=>{
    getmovies();
  
},[movies])

const getmovies = () =>{
    const ans = uid;
 
    const moveicollection = collection(db,ans);
    getDocs(moveicollection).then (response=>{
      
        const movs = response.docs.map(doc => ({
    data : doc.data(),
 
        }
       
        ))
     
        setmovies(movs);
   
    }).catch(error=> console.error(error))
}


let TotalIncome = 0;

 let result = setTimeout( movies.map(dataset =>{
  if(dataset.data.type === "Income"){
    let value = parseInt(dataset.data.salaryAmount);
    TotalIncome = TotalIncome + value;
    
  }
     
 }
),1000)


let TotalExpense = 0;

 let result2 = setTimeout( movies.map(dataset =>{
  if(dataset.data.type === "Expenses"){
    let value = parseInt(dataset.data.ExpenseAmount);
    TotalExpense = TotalExpense + value;
    
  }
     
 }
),1000)
let TotalBalance  = TotalIncome - TotalExpense ;
let IncomeData = [];

 let result3 =  setTimeout(movies.map(dataset =>{
  if(dataset.data.type === "Income"){
    let value = dataset.data.salaryAmount;
    let label = dataset.data.salaryTitle;
    IncomeData.push({Income: value , Lable : label} );
    
  }
     
 }
),2000)

const Incomelable =[];
const IncomeDataset =[];
let result4 = setTimeout( IncomeData.map(dataset =>{

    let label = dataset.Lable;
    
    Incomelable.push(label );}
),3200)
let result5 = setTimeout( IncomeData.map(dataset =>{

  let Income = dataset.Income;
  
  IncomeDataset.push(Income);}
),3200)
let ExpenseData = [];
const Expenselable =[];
const ExpenseDataset =[];
let result6 = setTimeout( movies.map(dataset =>{
  if(dataset.data.type === "Expenses"){
    let value = dataset.data.ExpenseAmount;
    let label = dataset.data.ExpenseTitle;
    ExpenseData.push({Expense: value , Lable : label} );
    
  }
     
 }
),2000)
let result7 = setTimeout(ExpenseData.map(dataset =>{

  let label = dataset.Lable;
  
  Expenselable.push( label );}
),3000)
let result8 = setTimeout( ExpenseData.map(dataset =>{

  let Expense = dataset.Expense;
  
  ExpenseDataset.push( Expense );}
),3000)
 
const data = {
    
  labels: [
    "GRAPH"
]
  ,
  datasets: [{
    label: 'INCOME',
    data: [TotalIncome],
    backgroundColor: [

      '#17594A',
  
     
    ],
    hoverOffset: 4
  },{
    label: 'Expenses',
    data: [TotalExpense],
    backgroundColor: [
      
      
      '#DA0037',
    
     
    ],
    hoverOffset: 4
  },{
    label: 'TotalBalance',
    data: [TotalBalance],
    backgroundColor: [
      
      
      '#1B6B93',
    
     
    ],
    hoverOffset: 4
  }
  
]
};

   
    return(
        <React.Fragment>
        <div className='blog_nav_main_div'><div className='nav_bar_blog'>    
         <User_nav/>

                

   
        </div></div>
         
       
            <div className='blog_main_div'>
           
           <div className='leftbar'>
           <div className=''> <img src={UserPic} className="about_pic"/></div><br></br>
           <a onClick={async () => {
               try{ 
              
                navigate("/Research");
               }catch(e){    
               }
              }}> <img src= {icon1} className="icon_dashboard"/>Dashboard</a>
 
  <a onClick={async () => {
               try{ 
              
                navigate("/Incomes");
               }catch(e){    
               }
              }}><img src= {icon3} className="icon_dashboard"/>Incomes</a>
  <a  onClick={async () => {
               try{ 
              
                navigate("/Expenses");
               }catch(e){    
               }
              }}><img src= {icon4} className="icon_dashboard"/>Expenses</a>
  </div>
      
        
                <div className='sub_blog_div'>
                <div className='chart_main_blog'>
                <div className='chart_sub_blog'>
                <Bar  data={data} />
                </div>
                <div className='chart_sub_blog_second'>
                <div className='sub_div_chart'><div className='content'>Total Income <br></br><h1>${TotalIncome}</h1> </div></div>
                <div className='sub_div_chart'><div className='content'>Total Expenses <br></br><h1>${TotalExpense}</h1> </div></div>
                
                <div className='sub_div_chart2'><div className='content'>Total Balance <br></br><h1>${TotalBalance}</h1> </div></div>
                </div>
               
          
            
                </div>
                <div className='history'>
                <h2>Recent history</h2>
                <div className='dashboard_box'>    <DashboardItem/></div>
            
                
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
export default  Blog;