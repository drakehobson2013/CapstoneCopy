import React from 'react';
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from './Aarika.jpg';
import Ron from './Ron.jpeg'


const About = () => {
    
        return (
        <div className= 'container'>
            <h3>About Us</h3>
            <h4> <em> Meet the Team!</em></h4>

            <div className= 'post-container'>
            <img src={Drake} alt="Drake" id="drake" />
            <p> <blockquote > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae eius sunt eveniet. Repudiandae, earum veritatis doloremque unde ad dolor!</blockquote></p>
            <img src={Kiah} alt="Kiah" id="kiah" />
            <p> <blockquote > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facilis distinctio esse quasi incidunt quisquam explicabo quas maiores quod voluptatibus!</blockquote></p>
            <img src={Aarika} alt="Aarika" id="aarika" />
            <p> <blockquote > Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae soluta magnam nesciunt harum illum quisquam aut suscipit ab maiores.</blockquote></p>
            <img src={Ron} alt="Ron" id="ron" />
            <p> <blockquote>I just think how amazing it is to me how I knew nothing about code to that now I can actually design wonderful things and let my creativity free through web design.</blockquote> </p>

            </div>
            
        </div>
    )
}

export default About
