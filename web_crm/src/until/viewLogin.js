import React, { Component } from 'react'
export default (Com) => {
    return class ViewLogin extends Component {
        componentDidMount() {
            if (!localStorage.user) {
                this.props.history.push('/login')
            }
        }
        
        render() {
            return (
                <Com {...this.props}/>
            );
        }
    }
}