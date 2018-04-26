import React,{Component} from 'react'

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
    }
    
    _onSubmit(event){
        event.preventDefault();
        const {email,password} = this.state;
        fetch('http://private-828b1-raaf.apiary-mock.com/users/sign_in',{method:'post', data: {email,password}})
        .then((response) => { 
            if(response.status === 401)    {
                throw new Error("Authentication Errror")
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
                <input type="email" name="email" placeholder="Email" onChange={this.handlerChangeElement} value={this.state.email} required/>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlerChangeElement} required/>
                {this.renderSubmitBtn()}
            </form>
            </div>
         )
    }

    renderSubmitBtn = () =>{
        const buttonStyle={
            backgroundColor: 'red',
            color: 'white'
        }
        return (
            <button type="submint" style={buttonStyle}>
                    Login
            </button>
        )
    }

    handlerChangeElement(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
}
 
export default Login;