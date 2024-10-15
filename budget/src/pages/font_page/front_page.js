import './front_page.css';
import React ,{ useEffect } from 'react';
import head from "../../images/font_text.png";
import V from "../../images/budget-illust.png";
import Iframe from 'react-iframe';
import front_right from "../../images/front_right.png"
function Front_page() {
  return (
    <React.Fragment>
<div className='front_main-div'>
<div className='subdiv_head'>  
<img className='head_img' src={head} />

</div>

<div className='subdiv_head2'>
<img className='head_img2' src={front_right} />

</div>


</div>





    
    </React.Fragment>
    
  );
}

export default Front_page;
