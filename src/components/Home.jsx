import { React, useState, Component, useEffect } from 'react';
import NavBar from './NavBar'
import SideMenu from './SideMenu'
import SideMenuFooter from './SideMenuFooter'
import UserInfoModal from "./UserInfoModal";

function App() {
    const [state, setState] = useState('init');
    const [showProfileModal, setShowProfileModal] = useState(false);
    let props = {
        navBar: {
            userData: {
                fullName: "Abdul Rafay Ali Khan",
                email: "abdul.rafay@axialideas.com",
                phoneNumber: "+(92)-316-8472795"
            }
        }
    }
    
    useEffect(() => {

        if (state === 'init') {
            var bodyElem = document.getElementById("root-body");
            bodyElem.className = "theme-red";
            setState('');
        }
    });
    return (

        <div>
            <div className="overlay" />

            <NavBar />
            <SideMenu data={props.navBar} popUpState={setShowProfileModal} />
            <SideMenuFooter />
            <section className="content">
                <div className="container-fluid">
                    <UserInfoModal show={showProfileModal} popUpState={setShowProfileModal} data={props.navBar.userData }/>
                </div>
            </section>

        </div>
    )
}

export default App;
