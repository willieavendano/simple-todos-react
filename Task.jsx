Task = React.createClass({
  propType:{
    // This component gets the task to display through a React prop.
    // we can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  toggleChecked(){
    //Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id,{
      $set: {checked: ! this.props.task.checked}
    });
  },

  deleteThisTask(){
    Tasks.remove(this.props.task._id);
  },

  render(){
    // Give task a different className when they are checked off.
    //so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? "checked" : "";

    return(
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>
        <input type="checkbox" readOnly={true} checked={this.props.tasks.checked}
          onClick={this.toggleChecked}/>
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
});
