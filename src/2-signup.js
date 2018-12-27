import React from 'react';

class Signup extends React.Component {

    welcome = () => {
        this.props.history.push('/welcome');
    }

    render(){
        return (
            <div>
                firstname : <input type = "text"/> <br/>
                lastname : <input type = "text"/> <br/>
                email : <input type ="text"/> <br/>
                mobile : <input type = "text"/> <br/>
                password : <input type = "password" /> <br/>
                <button onClick={this.welcome}>Signup</button>
                <input type="button" value="reset"/>
            </div>
        )
    }
} 
  
export default Signup;