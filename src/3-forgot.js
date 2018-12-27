import React from 'react';



function Heading(props){
    return <h1>{props.title}</h1>
}

class Forgot extends React.Component {
    render(){
        return(
            <div>
                Enter your mail id : <input type="text"/> <br/>
                <input type ="submit" value ="submit"/>
            </div>
        )
    }
}

function forgot(){
    return(
        <div>
            <Heading title="forgot Page"/>
            <Forgot/>
        </div>
    )
}
export default forgot;