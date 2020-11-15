import React from "react";
import "./Sidebar.css"

    class Sidebar extends React.Component{
        render(){
            return (
            <div id="sidebar">
    
              <div>
              <a href="/">
              <h1><span>Sneaker•Search</span></h1></a>
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nulla lacinia tempor.
              
              <nav>
              <a href="/" title="Index">I.</a> /
              <a href="/ask" title="Message">II.</a> /
              <a href="Link Three URL" title="Link Three">III.</a>
               / <a href="Link Four URL" title="Link Four">IV.</a>
               / <a href="Link Five URL" title="Link Five">V.</a>
              
              </nav>
              
              
              </div>
              </div>
           );
        }   
    }
    
    
export default Sidebar;