import React,{Component} from 'react'
import './Login.css';
import Logo from '../../assets/images/logo.png';
import { connect } from 'react-redux'
import * as currentUserActions from '../../actions/currentUser'


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
        this._onChangeInput= this._onChangeInput.bind(this)
    }
    
    
    _onSubmit(event) {
        event.preventDefault()
        this.props.singIn(this.state.email,this.state.password);
    }

    

    _onChangeInput(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
    render() {
        return (
            <form onSubmit={this._onSubmit}>
            <input
                type="text"
                name="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this._onChangeInput}/>
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={this._onChangeInput}/>
            {this.renderSubmitBtn()}
            {this.renderError()}
            <br/>
            {JSON.stringify(this.props.currentUser)}

            </form>
        )
    }

    renderSubmitBtn() {
    const buttonStyle = { backgroundColor: 'blue', color: 'white' }

    return (
        <button type="submit" className="btnLogin">
        Login
        </button>
    )
    }

    renderError() {
        if (this.state.errorMessage) {
            // There is an error
            return (
            <div style={{ backgroundColor: 'red', color: '#FAA' }}>
                {this.state.errorMessage}
            </div>
            )
        }
    }
}
 
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (userAttributes) => {
            dispatch(
                currentUserActions.set(userAttributes)
            )
        },
        singIn: (email,password) => currentUserActions.singIn(email,password)(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);