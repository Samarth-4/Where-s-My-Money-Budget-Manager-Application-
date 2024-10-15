import React ,{ useEffect ,useState } from 'react';
import NavBar from "../../components/nav_bar/nav_bar.js";
import { firebaseAuth ,db } from '../../uitils/firebase/firebase.js';
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./expenses.css";
import userimg from "../../images/user.jpg";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection ,addDoc,getDocs } from  'firebase/firestore';
import ExpenseItem from './expenseItems.js';
import swal from 'sweetalert';
import Krish from "../../images/krish.jpg";
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Expenses() {
 

  const auth = getAuth();
 
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

  const [uidID ,setUidId] = useState(''); 
  const addexpense = () =>{
    const Title = document.getElementById('title').value;
  const Amount = document.getElementById('Amount').value;
  const addDate = document.getElementById('addDate').value;
  const addOption = document.getElementById('addOption').value;
  const addReference = document.getElementById('addReference').value;
   swal(" ", "Added ", "success");
   const moveicollection =  collection(db , uid)
  addDoc(moveicollection,{
    type:"Expenses",
    ExpenseTitle: Title ,ExpenseAmount: Amount,
    date: addDate,option: addOption,
    reference: addReference }).then(response =>{
    setUidId(response.id);
  }).catch(error =>{
  
  console.error(error);
  })
  
  }
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
  let TotalExpense = 0;

  let result2 = setTimeout( movies.map(dataset =>{
   if(dataset.data.type === "Expenses"){
     let value = parseInt(dataset.data.ExpenseAmount);
     TotalExpense = TotalExpense + value;
     
   }
      
  }
 ),1000)
    return(
        <React.Fragment>
        <div className='blog_nav_main_div'><div className='nav_bar_blog'>    
         <User_nav/>

                

   
        </div></div>
         
       
            <div className='blog_main_div'>
           
           <div className='leftbar'>
           <div className=''> <img src={UserPic} className="about_pic"/></div><br></br>
          <br></br> <a onClick={async () => {
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
  <a onClick={async () => {
               try{ 
              
                navigate("/Expenses");
               }catch(e){    
               }
              }}><img src= {icon4} className="icon_dashboard"/>Expenses</a>
  </div>
      
        
                <div className='sub_blog_div3'>
               
          <div className='total_income'>Total Expenses: ${TotalExpense}</div>
          <div className='sub_income'>

            <div className='left_income'>
           
                <input className='income_input' placeholder='Expense Title'
                id='title'></input>
                <input className='income_input' placeholder='Expense Amount'
                id='Amount'></input>
                <input className='income_input' placeholder='Enter a date' type='date'
                id='addDate'></input>
                <select className='income_input' placeholder='Select Option'>
                <option value="0"
                id='addOption'>Select Option</option>
    <option value="1">FOOD</option>
    <option value="2">STATIONARY</option>
    <option value="3">TRAVEL</option>
    <option value="4">RENT</option>
    <option value="5">MIS</option>
    <option value="6">CHILL</option>
    <option value="8">Other</option>
  </select>
  
  <textarea className='income_input_text' type='text' rows= '0' placeholder='Add a reference'  id='addReference' required/>
            
            </div>
            <div className='right_income'>
               <ExpenseItem />
            </div>
          </div>
          <button className='back_button' onClick={async () => {
               try{ 
                addexpense()
                // navigate("/User");
               }catch(e){    
               }
              }} >ADD </button>
                <button className='back_button' onClick={async () => {
              //  try{ 
              
              //   navigate("/User");
              //  }catch(e){    
              //  }
              // }} 
              try{ 
             
                navigate("/User");
               }catch(e){    
               }
              }}
              >BACK</button>
                </div>
                
            </div>
        </React.Fragment>
    )
}
export default  Expenses;