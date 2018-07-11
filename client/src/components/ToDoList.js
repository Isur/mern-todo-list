import React, { Component } from 'react';

import { connect } from 'react-redux';
import {getItems, updateItem, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

const Content = (props) => {
    return(
      <div className="taskText">
        <p className="taskTitle"> {props.title}</p>
        <p className="taskBody"> {props.body} </p>
        <p className="taskDate"> {props.date.substring(0,10)} <br /> {props.date.substring(11,16)} </p> 
      </div>
    );
  }
  
  const Button = (props) =>{
    return(
      <button 
        className={`button_${props.done}`}
        onClick={() => props.onClick(props._id)}>(Un)Done </button>
    );
  }
  
  const DeleteButton = (props) =>{
      return(
        <button 
            onClick={() => props.onClick(props._id)}
            className='button_delete'> DELETE </button>
      );
  }

  const Task = (props) => {
    return(
        <div className="task">
        <Button 
            done={props.done} 
            onClick={props.onClick} 
            _id={props._id}/> 
        <Content 
            title={props.title} 
            body={props.body} 
            date={props.date} 
            hours={props.hours}/>
        <DeleteButton 
            _id={props._id}
            onClick={props.onDeleteClick} />
      </div>
    );
}

class ToDoList extends Component{


    componentDidMount(){
        this.props.getItems();
    }

    onClick = (_id) => {
        this.props.updateItem(_id);
    }

    onDeleteClick = (_id) =>{
        this.props.deleteItem(_id);
    }

    render(){
        const {items} = this.props.item;
        return(
        <div>
            {items.map(({title,body,date,done,_id}) => (
                <Task 
                    key={_id} 
                    _id={_id} 
                    title={title} 
                    body={body} 
                    date ={date} 
                    onClick={this.onClick} 
                    onDeleteClick={this.onDeleteClick}
                    done={done} />
            ))}
        </div>
        );
    }
}


ToDoList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    item: state.item
  }); 



export default connect(mapStateToProps,  {getItems, updateItem, deleteItem})(ToDoList);