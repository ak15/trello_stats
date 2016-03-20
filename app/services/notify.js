import Ember from 'ember';

export default Ember.Service.extend({
  defaultArgs: {
    autoHide: true,
    icon: '<img src="assets/images/paper_plane.png" />',
    size: "normal",
    position: {x: "right", y: "bottom"}
  },
  success: function(msg) {
    this.showMessage(msg, "success");
  },
  error: function(msg) {
    this.showMessage(msg, "alert");
  },
  showMessage: function(msg, type) {
    let args = this.get("defaultArgs");
    args["type"] = type;
    args["message"] = msg;
    notify(args);
  },
});
