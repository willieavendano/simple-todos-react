AccountsUIWrapper = React.createClass({
  componentDidMount(){
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
    React.findDOMNode(this.refs.container));
  },

  componentWillUnmount(){
    Blaze.remove(this.view);
  },

  render(){
    return <span ref="container" />;
  }
});
