import React from 'react';
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from '.Aarika.jpg/'


const about = () => {
    return (
        <div className= 'container'>
            <h3>About Us</h3>
            <h4> <em> Meet the Team!</em></h4>

            <div className= 'post-container'>
            <img src={Drake} alt="Drake"/>
            <img src={Kiah} alt="Kiah" />
            <img src={Aarika} alt="Aarika" />

            </div>
            
        </div>
    )
}

export default about
