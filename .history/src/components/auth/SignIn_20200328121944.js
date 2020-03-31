import React, { Component } from 'react'

export default class SignIn extends Component {
    state={

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={} className="white">
                    <h5 className="grey-text text-darken-3"></h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0"></button>
                    </div>
                </form>
            </div>
        )
    }
}
