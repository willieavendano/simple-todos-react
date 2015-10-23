//Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
//This code is executed on the client only

Meteor.startup(function(){
  React.render(<App />, document.getElementById("render-target"));
  });
}
