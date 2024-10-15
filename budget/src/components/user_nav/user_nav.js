import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import "../nav_bar/nav.css";
import { useNavigate } from "react-router-dom";
import W from "../../images/w.png"
import swal from 'sweetalert';
import { getAuth, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logout from "../../images/logout.png";

function User_nav() {

  const auth = getAuth();
    const navigate = useNavigate();
    const Log_out  = () =>{
      
      signOut(auth).then(() => {
        localStorage.clear();
        navigate("/");
      console.log("sINGoUT");
        }).catch((error) => {
        console.log(error);
        });
        
      
    }
  // onClick={async () => {
  //   try{ 
  //    await signOut(auth);
  //    navigate("/");
  //   }catch(e){        var errorCode = e.code;
  //    swal(" ", errorCode, "error");
  //   }
  //  }} 
  return (
    <>
     <Navbar className='main_navbar' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={W}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/Research");
               }catch(e){    
               }
              }} >Dashboard</Nav.Link>
          <Nav.Link className='nav-link' onClick={async () => {
               try{ 
              
                navigate("/Features");
               }catch(e){    
               }
              }} > Calculator </Nav.Link>
           
             
            <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/Resource");
               }catch(e){    
               }
              }} >Blog</Nav.Link>
               <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/About");
               }catch(e){    
               }
              }} >About</Nav.Link>
             
            {/* <Nav.Link className='nav-link'  href="#features">FAQ</Nav.Link> */}
           
               <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/User");
               }catch(e){    
               }
              }} >Profile</Nav.Link>
              

          </Nav>
          <Nav>
          
            <button className='button_login' onClick={Log_out}  >
            <img  className="social_media_icon_login" src={logout} alt="INSTAGRAM" />
            LOG OUT</button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    
    </>
  );
}

export default User_nav;