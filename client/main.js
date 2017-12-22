import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.dropdown.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.active = new ReactiveVar(false);
});

Template.dropdown.helpers({
  isActive() {
    return Template.instance().active.get();
  },
});

Template.dropdown.events({
  'click button'(event, instance) {
    // toggle the active variable.
    instance.active.set(!instance.active.get());
  },
});
