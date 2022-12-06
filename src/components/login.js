import React from "react";
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div
                className={(this.props.open ? 'active' : '') + ' show'}
            >
                <div className='login-form'>
                    <div className='form-box solid'>
                        <form action={(this.props.backend) + 'welcome.php'} method='post'>
                            <h1 className='login-text'>Sign In</h1>
                            <label>Username/Email</label><br/>
                            <input
                                type='text'
                                name='username'
                                className='login-box'/><br/>
                            <input
                                type='password'
                                name='password'
                                className='login-box'/><br/>
                            <input
                                type='submit'
                                value='LOGIN'
                                className='login-btn'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login