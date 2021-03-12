import React from 'react';
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from './Aarika.jpg';
import Ron from './Ron.jpeg';
import "../index.css";
import AOS from 'aos'
import 'aos/dist/aos.css';




const About = () => {
AOS.init();
//     var startEvent = 
//     <script>
//     AOS.init({
//       startEvent= 'load'
//     });
//   </script>

// Need to convert AOS features for animations to populate on screen. Script? Import? Should I add script to HTML portion?
 
    
        return (
        <div className= 'container'>
            {/* <h3>About the Team</h3> */}
            <h4 className="text-center"> <em> Meet the Team!</em></h4>

<br/>
            <div className= 'post-container'>
            <div className= 'card-deck-4' id='deck'>

            <div className="card bg-dark aos-init" data-aos='fade-right'>
            <img src={Drake} alt="Drake" id="drake" />
            <p> <blockquote > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae eius sunt eveniet. Repudiandae, earum veritatis doloremque unde ad dolor!
            - Drake</blockquote></p>
            </div>
            <br/>

            <div data-aos='fade-left' className='card aos-init' >
            <img src={Kiah} alt="Kiah" id="kiah"/>
            <p> <blockquote > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facilis distinctio esse quasi incidunt quisquam explicabo quas maiores quod voluptatibus!
            - Kiah</blockquote></p>
            </div>
            <br/>

            <div className='card text-white bg-dark'>
            <img src={Aarika} alt="Aarika" id="aarika"/>
            <p> <blockquote > Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae soluta magnam nesciunt harum illum quisquam aut suscipit ab maiores. 
            - Aarika</blockquote></p>
            </div>
            <br/>

            <div className='card text-dark'>
            <img src={Ron} alt="Ron" id="ron" />
            <p> <blockquote>I just think how amazing it is to me how I knew nothing about code to that now I can actually design wonderful things and let my creativity free through web design.
            - Ron</blockquote> </p>
            </div>

            </div>
            </div>

        </div>


       
    )
}

export default  (About)
