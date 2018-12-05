import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  uniqueID() {
    return new Date().getTime();
  }
  
  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    // What default behavior do we prevent?
    const todo = Object.assign({}, this.state, {id: this.uniqueID()} );
    this.props.receiveToDo(todo);
    
    
  }
  
  setTitle(e){
    this.setState({
      title:e.target.value
    });
  }
  setBody(e){
    this.setState({
      body:e.target.value
    });
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  
  render() {
    const {title,body}=this.state;
    // console.log(this.props);
    return (
      <div>
        <form >
          
        <label> 
          Title:<input type="text" name="title" onChange={this.handleChange} value={title}  />
        </label>
          
        <label> 
          Body:<input type="text" name="body" onChange={this.handleChange}  value={body}/>
        </label>
        
        <button onClick={this.handleSubmit} type="submit" name="button">Create To Do!</button>
          
        </form>
      </div>
    );
  }
}

export default TodoForm;