import React,{Component} from 'react'
import './Login.css';
import Logo from '../../assets/images/logo.png';

class Login extends Component {
    state = {}
    constructor(props){
        super(props)
        this.state = {
            email:'test2@test.com',
            password:'testtest',
            errorMessage: null
        }
        this._onSubmit= this._onSubmit.bind(this)
        this.handlerChangeElement= this.handlerChangeElement.bind(this)
        this.renderError= this.renderError.bind(this)
    }
    
    _onSubmit(event){
        event.preventDefault();
        const {email,password} = this.state;
        fetch('http://private-828b1-raaf.apiary-mock.com/users/sign_in',{method:'post', data: {email,password}})
        .then((response) => { 
            if(response.status === 401)    {
                throw ("Authentication Errror")
            }else{
                this.setState({
                    errorMessage: null
                })
                return response.json()
            }
         })
        .then((json)=>{
            alert("Sign in succesfully")
            console.log('response',json)
        }).catch((error)=>{
            this._handleError(error);
            this.setState({
                errorMessage: error
            })
        })
    }
    _handleError(error){
        console.log(error)
    }
    render() { 
        
        return ( 
            <div>
                
            <form onSubmit={this._onSubmit} method="post" >
            <div className="logo">
                <img src={Logo} alt="ALt"/>
                </div> 
                <input type="email" name="email" placeholder="Email" onChange={this.handlerChangeElement} value={this.state.email} required/>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlerChangeElement} required/>
                {this.renderSubmitBtn()}
                {this.renderError()}
            </form>
            </div>
         )
    }

    renderSubmitBtn = () =>{
        return (
            <button type="submit" className="btnLogin">
                    Login
            </button>
        )
    }

    renderError(){
        if(this.state.errorMessage){
            return <div style={{backgroundColor:'red', color: "#FAC"}} >{this.state.errorMessage}</div>
        }
    }
    handlerChangeElement(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
 
export default Login;