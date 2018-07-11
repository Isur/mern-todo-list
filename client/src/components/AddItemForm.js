import React, { Component } from 'react';

import { connect } from 'react-redux';
import {addItem} from '../actions/itemActions';

class AddItemForm extends Component{
    state = {
        title: null,
        body: null,
        date: null,
    }

    onClick(e){
        e.preventDefault();
        if(this.state.title !== null && this.state.body !== null && this.state.date !== null){
            
            const newItem = {
                title: this.state.title,
                body: this.state.body,
                date: this.state.date
            };
            this.props.addItem(newItem);
            this.formRef.reset();
            this.setState= ({
                title: null,
                body: null,
                date: null,
            });
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        
    }

    dateChange = (e) =>{
        const d = e.target.value;
        console.log(d);
        this.setState({
            date: d,
        })
    }

    render(){
        return(
            <div>
                <h3>Add New</h3>
                <form ref={(el) => this.formRef = el}>
                    <input type="text"placeholder="title" name="title" onChange={this.onChange.bind(this)}/>
                    <textarea placeholder="body" name="body" onChange={this.onChange.bind(this)}/>
                    <input type="date" onChange={this.dateChange.bind(this)}/>
                    <button type="submit" onClick={this.onClick.bind(this)}> Add </button>
                </form>
            </div>
        );
    }
}

 const mapStateToProps = (state) => ({
    item: state.item
  }); 
export default connect(mapStateToProps,  {addItem})(AddItemForm);