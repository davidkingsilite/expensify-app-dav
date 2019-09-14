// hoc- higer order compoments 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=> (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const reqiureAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p> Please Login to view Info</p>
            )}
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
//require authentication 
const AuthInfo = reqiureAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));