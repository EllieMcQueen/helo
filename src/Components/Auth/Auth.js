import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'


//METHODS
//HANDLE CHANGE (2)
//LOGIN
//REGISTER

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            verPassword: '',
            picture: '',
            registerView: false
        }
    }

    componentDidMount(){
        if(this.props.username){
            this.props.history.push('/dashboard')
      }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    } 
  
    handleToggle = () => {
        this.setState({registerView: !this.state.registerView})
    }

    handleRegister = () => {
        const { username, password, verPassword, picture } = this.state;
        if (password && password === verPassword) {
            axios.post("/api/register", { username, password, profilePicture: picture })
            .then((res) => {
                this.props.getUser(res.data);
                this.props.history.push("/dashboard");
            })
            .catch((err) => console.log(err));
        } else {
            alert("Passwords don't match");
        }
    }

    handleLogin = () => {
        const { username, password } = this.state;

        axios
        .post("/api/login", { username, password })
        .then((res) => {
            this.props.getUser(res.data);
            this.props.history.push("/dash");
        })
        .catch((err) => console.log(err));
  }

    render() {
        return(    
            <div>    
                <section className='login-box'>   
                    <h1>Helo</h1>
                    {this.state.registerView ? (
                    <>
                    <h3>Register Below</h3>
                    {/* <input
                        value={this.state.username}
                        name="username"
                        placeholder="Username"
                        onChange={(e) => this.handleInput(e)} */}
                    </>)
                : <h3>Login</h3>}
                <div className='username-box'>
                    <p>Username:</p>
                    <input
                        value={this.state.username}
                        name='username'
                        placeholder='Username'
                        onChange={(e) => this.handleInput(e)}/>
                </div>
           
                <div className='password-box'> 
                    <p>Password:</p>
                    <input 
                        type='password'
                        value={this.state.password}
                        name='password'
                        placeholder='Password'
                        onChange={(e) => this.handleInput(e)}/>
                </div>


                {this.state.registerView
                ? (<>
                    <input 
                        type='password'
                        value={this.state.verPassword}
                        name='verPassword'
                        placeholder='Verify Password'
                        onChange={(e) => this.handleInput(e)}/>
                    <input
                        value={this.state.picture}
                        name='picture'
                        placeholder='Profile image URL'
                        onChange={(e) => this.handleInput(e)}/>
                    <button onClick={this.handleRegister}>Register</button>
                    <p>Have an account? <span onClick={this.handleToggle}>Login Here</span></p>
                  </>)
                : (<div className='login-buttons'>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleToggle}>Register</button>
                    </div>)}
                </section>
            </div>
        )
    }
}

const mapStateProps = reduxState => reduxState;
export default connect(mapStateProps, {getUser})(Auth);