import React from 'react'
import "../styles/NavBar.css"

export default function NavBar({pathdata}:any) {
    return (
        <div id="NavBar">
            <div className="page-display">
                Menu {'>'} {pathdata} 
            </div>
            <div className="username">
                <span>Username</span>
                <span>
                    <svg viewBox="0 0 20 20" fill="currentColor" color="#9eadba"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </span>
            </div>
        </div>
    )
}
