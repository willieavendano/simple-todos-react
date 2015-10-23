Task = React.createClass({
  propType:{
    // This component gets the task to display through a React prop.
    // we can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },

  toggleChecked(){
    //Set the checked property to the opposite of its current value
  },

  deleteThisTask(){

  },

  render(){
    return(
      <li>{this.prop.task.text}</li>
    );
  }
});
