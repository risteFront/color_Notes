import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            data :'',
            class:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }
    handleChange(e){
        console.log(e)
        this.setState({
            data:e.target.value
        })
    }
    handleBack(){
        this.props.backText(this.state.data, this.state.class)
        this.props.close()

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.inputText.text)
        this.setState({
            data:nextProps.inputText.text,
            class:nextProps.inputText.class
        })
      }
    render() {
    return(
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <input value={this.state.data} onChange={this.handleChange}></input>
                    
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>CLOSE</button>
                    <button className="btn-continue" onClick={this.handleBack}>CONTINUE</button>
                </div>
            </div>
        </div>
    )
            }
}

export default Modal;