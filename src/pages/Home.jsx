import React from 'react'
import logo from '../assets/logo.svg'
import './home.css'
function Home() {
  return (
    <div className='container'>
            {/* Nav Bar */}
            <nav>
                <div className="nav-bar">
                    <img src={logo} alt='' />
                    <h3>Request Beta Access</h3>
                </div>
            </nav>

            {/* Main*/}

            <main>
                <div className="sup-sub">
                    <div className="sup-sub-left">
                    <p className='p-one'>A <b>super solution</b> for your <b>business</b>.</p>
                    <p className="p-two">
                    Our marketing and sales automations help you scale your outreach to get more leads for your company. 
                    </p>
                    <button className='sub-btn'>Request Beta Access</button>

                    
                    </div>
                    <div className="sup-sub-right">
                        <div className="top">ds</div>
                        <div className="middle">ds</div>
                        <div className="down">ds</div>
                    </div>
                </div>
            </main>
           
    </div>
  )
}

export default Home