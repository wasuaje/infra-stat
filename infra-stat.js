
Services = new Meteor.Collection("services");

if (Meteor.isClient) {
  Template.hello.services = function () {
    return Services.find({}, {sort: {servicestatus: -1, service: 1}});
  };
  Template.hello.greeting = function () {
    return "infra-stat.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
 
 Template.service.MiEstado = function (estado) {   
   var ret='';
   if (estado == 0) ret="alert-success";
   if (estado == 1) ret="alert-warning";
   if (estado == 2) ret="alert-danger";
    return ret;
  };


}




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
