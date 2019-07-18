import React, { Component } from 'react'
import '../styles/Program.css'

// fetch days together
// when user clicks on program name, fetch all days and render them  

class Program extends Component {
    render() {
        return (
            <div className='program-container'>
                <div className='text-center'>
                    <img src={this.props.img} alt={`${this.props.name} program logo`} className='program-img' />
                </div>
                <h3 className='text-center'>{this.props.name}</h3>
            </div>
        )
    }
}

export default Program
