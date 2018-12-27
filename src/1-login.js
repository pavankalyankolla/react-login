import React from 'react';

class Login extends React.Component {
  
    routeChange = () => {
        this.props.history.push('/signup');
    }

    welcome = () => {
        this.props.history.push('/welcome');
    }
  
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                 <div className="container">
                        <h2 className="display-4">Login</h2>
                <div className="input-group mb-3">
                

                </div>

                       
                    
                        user name : <input type ="text" name="user"/>  <br/> 
                        password :  <input type="password" name="pass"/> <br/>
                        
                        
                        <button className="btn btn-primary btn-lg"onClick= {this.welcome}>login</button>
                        <button className="btn btn-primary btn-lg" onClick={this.routeChange}>Signup</button> <br/>
                        <input type = "button" value = "forgot password"/>
                    
                </div>
            </div>
            )
        }
}


export default Login