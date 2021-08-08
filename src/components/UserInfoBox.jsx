import { React, useCallback } from 'react';

export default function App(props) {
    debugger;
    let {fullName, email, phoneNumber} = props.data.userData;
    let setShowProfileModal = props.popUpState;
    const handlePopUpState = useCallback(event => {
        setShowProfileModal(true)
      }, [setShowProfileModal])
    return (
        <div className="user-info">
            <div className="image">
                <img src="images/user.png" width={48} height={48} alt="User" />
            </div>
            <div className="info-container">
                <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{fullName}</div>
                <div className="email">{email}</div>
                <div className="btn-group user-helper-dropdown">
                    <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                    <ul className="dropdown-menu pull-right">
                        <li><a onClick={handlePopUpState} href="#"><i className="material-icons">person</i>Profile</a></li>
                        <li role="separator" className="divider" />
                        <li><a href="#"><i className="material-icons">group</i>Followers</a></li>
                        <li><a href="#"><i className="material-icons">shopping_cart</i>Sales</a></li>
                        <li><a href="#"><i className="material-icons">favorite</i>Likes</a></li>
                        <li role="separator" className="divider" />
                        <li><a href="#"><i className="material-icons">input</i>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}