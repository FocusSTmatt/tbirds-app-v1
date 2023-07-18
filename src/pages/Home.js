import React from 'react'
import "../styles/home.css"
import TbirdsLogo from "../images/Seattle-Thunderbirds-logo-PNG.png"

function Home() {
  return (
    <div className='home'>
        <h1 className='homeTitle'>Seattle Thunderbirds</h1>
        {/* <img 
            className="mainLogo" 
            alt="Seattle Thunderbirds WHL Championship Photo"
            src={TbirdsLogo}
        /> */}
        
        <img 
            className="heroImage" 
            alt="Seattle Thunderbirds WHL Championship Photo"
            src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1605/files/2023/05/23-05-19-sea-championship-1024x576-1.jpg">
        </img>
    </div>
  )
}

export default Home