// https://github.com/meteor/meteor/blob/096641b084b70f4ab52f3ef4468728d164ec66d1/packages/meteor/dynamics_nodejs.js#L47
var Fiber = Npm.require('fibers');
if (!Meteor.EnvironmentVariable.prototype.set) {
	Meteor.EnvironmentVariable.prototype.set = function(value) {
		Meteor._nodeCodeMustBeInFiber();
		if (!Fiber.current._meteor_dynamics) Fiber.current._meteor_dynamics = [];
		var currentValues = Fiber.current._meteor_dynamics;
		currentValues[this.slot] = value;
	}
}
