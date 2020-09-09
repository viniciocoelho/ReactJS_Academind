import React from 'react';

import'./UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p> {/* o nome que estiver na props tem que ser igual ao q estiver no app.js */}           
            <p>Some text</p>            
        </div>
    );
};



export default userOutput;