import React from 'react'
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from './Aarika.jpg';
import Ron from './Ron.jpeg';

const footer = () => {
    return (
        
<footer class="text-center fixed-bottom">
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg" src={Drake} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="gitImg" src={Kiah} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="noOvals" src={Aarika} alt=""/></a>
<a className="gitLink" href="https://github.com/drakehobson2013"><img className="noOvals" src={Ron} alt=""/></a>
  <p class="w3-medium">Follow us on GitHub</p>
</footer>
            
        
    )
}

export default footer
