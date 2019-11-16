import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">ABOUT</h4>
            <p>This is the standard version that comes with both the minified and unminified CSS and JavaScript files. This option requires little to no setup. Use this if you are unfamiliar with Sass.</p>
            
        </div>
    )
}

export default Rainbow(About)
