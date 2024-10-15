import "../Incomes/incomes.css";
import React ,{ useEffect ,useState } from 'react';
import NavBar from "../../components/nav_bar/nav_bar";
import { useNavigate } from "react-router-dom";
import User_nav from '../../components/user_nav/user_nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import userimg from "../../images/user.jpg";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import { useGlobalContext } from '../context/globalContext';
import  {db} from "../../uitils/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection ,addDoc,getDocs } from  'firebase/firestore';
import swal from 'sweetalert';
import Expenseitemdiv from "./expenseItemdiv";

function ExpenseItem() {

const auth = getAuth();
// const [uid , setUid] = useState("");
//  onAuthStateChanged(auth, (user) => {
//    if (user) {
//      // User is signed in, see docs for a list of available properties
//      // https://firebase.google.com/docs/reference/js/firebase.User
//      const s = user.uid;
//      setUid(s);
//      // ...
//    } else {
//      // User is signed out
//      // ...
//    }
//  });
//  const [datall , setData] = useState([]);
//  const getData = () =>{
//    const ans = uid;

//    const collectionRef = collection(db,ans);
//    getDocs(collectionRef).then (response=>{
     
//        const datas = response.docs.map(doc => ({
//    data : doc.data(),
//    type:doc.type,
//    salaryTitle: doc.salaryTitle ,salaryAmount:doc.salaryAmount ,
//    date:doc.date ,option:doc.option ,
//    reference: doc.reference , 

//        }
      
//        ))
    
//        setData(datas);
  
//    }).catch(error=> console.error(error))
// }
const [uid , setUid] = useState("movies");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    setUid(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const [movies , setmovies] = useState ([]);
const [id , setId] = useState([]);
useEffect(()=>{
    getmovies();
    
},[])

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
// const TotalExpense = 0;
// const Amount = 0
// {movies.map((dataset =>(
        
//   Amount = dataset.data.ExpenseAmount,
// TotalExpense  = Amount
  

// )))}



 
   return(  <React.Fragment>
      {movies.map((dataset =>(
        
         <Expenseitemdiv  Amount = {dataset.data.ExpenseAmount}  Title = {dataset.data.ExpenseTitle}  Reference ={dataset.data.reference} Date = {dataset.data.date}
          Option ={dataset.data.option}
          Type ={dataset.data.type}
         />
         

      )))}
   </React.Fragment>);
  
}
export default ExpenseItem;
// import React ,{ useEffect ,useState } from 'react';
// import "./incomes.css";
// function IncomeItem(props) {
   
//    const amount = props.Amount;
//     const salaryTitle = props.salaryTitle;
//     return(<> 
//     <div></div>
//     </>) ;
  
// }
// export default IncomeItem;