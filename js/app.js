HelloWorlApp = Ember.Application.create();

HelloWorlApp.Router.map(function() {
	this.route('about');
});

HelloWorlApp.IndexRoute = Ember.Route.extend({
	model: function(){
		var persona = {
			name: 'Son',
			lastname: 'Goku'
		};
		return persona;
	},

	actions:{
		switchName: function(){
			var model = this.modelFor('index');
			Ember.set(model,'name','César');
			Ember.set(model,'lastname','Olguín');
		}
	}
});

HelloWorlApp.IndexController = Ember.ObjectController.extend({
	fullName: function(){
		return this.get('name') + ' ' + this.get('lastname');
	}.property('name'),

	nameDidChange: function(){
		alert('Alguien cambio el nombre.');
	}.observes('name')

});
