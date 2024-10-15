import '../sign_up/Sign_up.css';
import React ,{ useEffect ,useState } from 'react';
import head from "../../images/font_text.png";
import leftsign from "../../images/3.png";
import rightsign from "../../images/4.png";
import { firebaseAuth } from '../../uitils/firebase/firebase.js';
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import {collection ,addDoc} from  'firebase/firestore';
import  {db2, db} from "../../uitils/firebase/firebase.js";
import {set} from 'firebase/database';
import { onValue, ref } from 'firebase/database';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
function Details() {
  const [uid , setUid] = useState("");
  const auth = getAuth();
const [name , setName] = useState("Krish joshi");
const [phonenumber ,setPhoneNumber] = useState("8003804011");
const [age , setAge] = useState("19");
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
  
  const AddDetails = () =>{
// set(ref(db,uid),{
//   name :name ,age :age , phonenumber :phonenumber 
// })
   }
  
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
    <h1> Details</h1>
    <br></br>
    <input  className='input-singup input-sign_up' type="text" placeholder ="YOUR NAME" name ="name"
        onChange={(e) => setName(e.target.value)} required
    />
    <input  className='input-singup input-sign_up' type="Number" placeholder ="YOUR PHONE NUMBER"
     onChange={(e) => setPhoneNumber(e.target.value)} required />
    <input  className='input-singup input-sign_up' type="Number" placeholder ="YOUR AGE"
     onChange={(e) => setAge(e.target.value)}  required/>
          <p className='p1'>By Proceeding you agree to the Terms of use and Privacy policy

</p>
    <button className='Sign_up_button' onClick={AddDetails}>SUBMIT</button> <button className='Sign_up_button' onClick={async () => {
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

export default Details;