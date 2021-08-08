import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
        {/* Page Loader */}
        <div id="loader" className="page-loader-wrapper">
            <div className="loader">
                <div className="preloader">
                    <div className="spinner-layer pl-red">
                        <div className="circle-clipper left">
                            <div className="circle" />
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle" />
                        </div>
                    </div>
                </div>
                <p>Please wait...</p>
            </div>
        </div>
        {/* #END# Page Loader */}

        <Router />
        </React.Fragment>
    </React.StrictMode>,
  document.getElementById('root-body')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
