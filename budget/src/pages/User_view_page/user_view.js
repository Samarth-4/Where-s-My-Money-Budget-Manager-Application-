import React ,{ useEffect ,useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./user_view.css";
import User_nav from '../../components/user_nav/user_nav.js';
import Iframe from 'react-iframe';
import userimg from "../../images/user.jpg";
import UserBackground from "../../images/UserBackground.jpg";
import Data from "../../uitils/Data/data.js";
import { collection ,getDocs } from '@firebase/firestore';
import {db2} from "../../uitils/firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import Krish from "../../images/krish.jpg";
import { firebaseAuth } from '../../uitils/firebase/firebase.js';
function User(){
    const auth = getAuth();
    const navigate = useNavigate();
   
const [uid , setUid] = useState("xyz");
const [UserEmail , setUserEmail] = useState ("xyz@gmail.com");
const [UserName ,SetUserName] = useState("USERNAME");
const [UserPic ,SetUserPic] = useState(userimg);
firebaseAuth.onAuthStateChanged((userCred) =>{
    SetUserName(userCred.displayName);
    setUserEmail(userCred.email);
    SetUserPic(userCred.photoURL);
    setUid(userCred.uid);

    
})


// useEffect(()=>{
//   getData();
// },[UserData])
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     setUid(uid);
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// const getData = async() =>{
//   const ans = uid;
//   const UserDetails = collection(db2,ans);
//   const data = await getDocs(UserDetails).then(data.docs.map((doc) =>({
//     ...doc.data(),
//     name: doc.name,
//     age : doc.age,
//     phonenumber : doc.phonenumber
//       })))
//       setUserData()
  
// }


    return (<React.Fragment>
    <div className='maindiv'>
  <div className='subdiv'> <User_nav/>   
  <div className='main_user' style={{backgroundImage: `url(${UserBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',}}> 
  <div className='user_left'>
  <div className='img_upper'> 
  <div className='pic_circle'>
  <img src={UserPic} className="user_img"/></div>
 
  {/* <button className='more_info'>Update details</button>
  <div className='more_info2'>OUTSTANDING BALANCE <span>$999999</span></div> */}
  </div>
  </div>
  <div className='user_right'>
  <div className='sub_div_right1'>USER DETAILS</div>
  <div className='sub_div_right'>NAME : <span className='email_id'>{ UserName}</span> </div>
  <div className='sub_div_right'>EMAIL :  <span className='email_id'> {UserEmail} </span></div>
  <div className='sub_div_right'>Personal ID :  <span className='email_id'> {uid} </span></div>
</div>

  </div>
   </div>
     
        </div>
        
    </React.Fragment>);
}


export default User;