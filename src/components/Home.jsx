import { React, useState, Component, useEffect } from 'react';
import NavBar from './NavBar'
import SideMenu from './SideMenu'
import SideMenuFooter from './SideMenuFooter'

function App() {
    const [state, setState] = useState('init');
    useEffect(() => {
        
    if(state === 'init'){
        var bodyElem = document.getElementById("root-body");
        bodyElem.className = "theme-red";
      setState('');}
    });
    return (

        <div>
            <div className="overlay" />

            <NavBar />
            <SideMenu />
            <SideMenuFooter />
        </div>
    )
}

export default App;
