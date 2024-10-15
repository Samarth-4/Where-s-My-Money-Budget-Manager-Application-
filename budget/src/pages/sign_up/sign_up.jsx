import './Sign_up.css';
import React ,{ useEffect ,useState } from 'react';
import head from "../../images/Singup.png";
import leftsign from "../../images/3.png";
import rightsign from "../../images/4.png";
import { firebaseAuth } from '../../uitils/firebase/firebase.js';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import Google from "../../images/search.png";

function Sign_up() {
  // const [uid , setUid] = useState("");
  // const [formValues, setFormValues] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword:"",
  //   phonenumber:"",
    
  // });
  const firebaseAuth = getAuth();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const Login = (e)=>{
    navigate("/User");
    e.preventDefault();
    auth.signOut();
   }
   
  const LoginWithGoogle = async() =>{
   
          await signInWithPopup(firebaseAuth ,provider).then((userCred) =>{
            localStorage.setItem("email" ,userCred.user.email)
            navigate("/User");
          })
       
firebaseAuth.onAuthStateChanged((userCred) =>{
 
     navigate("/User");
})
     }
  // const handleSingin = async ()=>{
  //   try {
    

  //   }
  //    catch (e) {
      
  //     var errorCode = e.code;

  //     if (errorCode === 'auth/email-already-in-use'){
  //     swal("Mail already in use ", " Go to login page ", "warning");
      
  //     }
  //     else if(errorCode === 'auth/weak-password'){
        
  //     }
  //     else if(errorCode === 'auth/invalid-email' ){
  //       swal(" ", "Invalid-email", "warning");
  //     }
  //     else{
  //       swal(" ", errorCode, "error");
  //     }
        
      
  //   }
  //   navigate("/User");
  // }
    const navigate = useNavigate();
  return (
    <React.Fragment>
    <div className='main_sign_up-div'>
    <div className='sub_div_sign-up'>
<div className='Sign_up_left-div'  style={{ backgroundImage:`url(${leftsign})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }} >
<img className='head_img2' src={head}  alt=" img"/>
</div>
<div className='Sign_up_right-div' >
<div className='Sign_up_box' >
    <h1>Sign Up</h1>
    <br></br>
    <div className='login_google_main_div'>
    <button className="login_input_box_button_online" onClick={LoginWithGoogle}>
          <img  className="social_media_icon_login" src={Google} alt="INSTAGRAM" /> 
          Continue With Google</button>
    </div>
    
         <br></br>
          <p className='p1'>By Proceeding you agree to the Terms of use and Privacy policy

</p>
<button className='Sign_up_button' onClick={async () => {
               try{ 
              
                navigate("/");
               }catch(e){    
               }
              }} >BACK</button>
              <br></br>
    
</div>
</div>
  
    </div>
    </div>
    </React.Fragment>
    
  );
}

export default Sign_up;