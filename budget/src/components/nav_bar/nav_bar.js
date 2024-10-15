import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import "./nav.css";
import { useNavigate } from "react-router-dom";
import W from "../../images/w.png";
import logout from "../../images/logout.png";

function NavBar() {
  const navigate = useNavigate();
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
          {/* <Nav.Link className='nav-link' onClick={async () => {
               try{ 
              
                navigate("/Features");
               }catch(e){    
               }
              }} >FEATURES</Nav.Link>
            <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/Research");
               }catch(e){    
               }
              }} >RESEARCH</Nav.Link>
            <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/Resource");
               }catch(e){    
               }
              }} >RESOURCE</Nav.Link>
            {/* <Nav.Link className='nav-link'  href="#features">FAQ</Nav.Link> */}
            {/* <Nav.Link className='nav-link'  onClick={async () => {
               try{ 
              
                navigate("/About");
               }catch(e){    
               }
              }}  >ABOUT</Nav.Link> */} 
          </Nav>
          <Nav>
           
            <button className='button_login' onClick={async () => {
               try{ 
              
                navigate("/Sign-up");
               }catch(e){    
               }
              }} > <img  className="social_media_icon_login" src={logout} alt="INSTAGRAM" /> SIGN UP</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    
    </>
  );
}

export default NavBar;