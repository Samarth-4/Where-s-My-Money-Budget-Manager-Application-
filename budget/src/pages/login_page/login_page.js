import '../sign_up/Sign_up.css';
import React ,{ useEffect ,useState } from 'react';
import head from "../../images/font_text.png";
import leftsign from "../../images/3.png";
import rightsign from "../../images/4.png";
import { firebaseAuth } from '../../uitils/firebase/firebase.js';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import swal from 'sweetalert';

function Log_in() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/User");
  });
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      swal(" ", "Login in  successful", "success");

    }   catch (e) {
    
      var errorCode = e.code;

      if (errorCode === 'auth/wrong-password'){
      swal(" ", " Wrong-Password ", "warning");
      
      }
      else if(errorCode === 'auth/user-not-found')
      {swal(" ", "User not found", "warning");}
     
      else{
        swal(" ", errorCode, "error");
      }
        
      
    }
  };
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
<div className='Sign_up_right-div' style={{ backgroundImage:`url(${rightsign})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
<div className='Sign_up_box'  >
    <h1>Log In</h1>
    <br></br>
   
    <input  className='input-singup input-sign_up' type="email" placeholder ="YOUR EMAIL" name="email"
           onChange={(e) => setEmail(e.target.value)}
                value={email}  />
       
          <input className='input-singup input-sign_up' type="password" placeholder ="YOUR PASSWORD"
                          name="password" 
                          onChange={(e) => setPassword(e.target.value)}
                value={password}
        />
         
          <p className='p1'>By Proceeding you agree to the Terms of use and Privacy policy

</p>
    <button className='Sign_up_button' onClick={handleLogin}>SUBMIT</button> <button className='Sign_up_button' onClick={async () => {
               try{ 
              
                navigate("/");
               }catch(e){    
               }
              }} >BACK</button>
</div>
</div>
  
    </div>
    </div>
    </React.Fragment>
    
  );
}

export default  Log_in;