import { React, useCallback } from 'react';

export default function UserInfoModal(props) {
    let show = props.show;
    let setShowProfileModal = props.popUpState;
    let {fullName, email, phoneNumber} = props.data.userData;
    const handlePopUpState = useCallback(event => { 
        setShowProfileModal(false)
      }, [setShowProfileModal])
    return (
        show ? 
        <div className="modal" id="defaultModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="defaultModalLabel">User Information</h4>
                </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={handlePopUpState} className="btn btn-link waves-effect" data-dismiss="modal">CLOSE</button>
                </div>
            </div>
        </div>
    </div>
    : null
    )
}
