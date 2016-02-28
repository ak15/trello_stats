import Ember from 'ember';

export default Ember.Component.extend({
  message: "Please wait...",
  requestInProgress: false,
  pullSucessfullMessage: "Data pulled sucessfully",
  pullUnSucessfullMessage: "Failed to pull data",
  actions: {
    pullData() {
      let self = this;
      if (this.get('requestInProgress')) { return }
      this.set('requestInProgress', true)
      this.attrs.handleDataPulling().then(() => {
        self.set('requestInProgress', false);
        this.$('#pull-status-msg').text(self.get('pullSucessfullMessage'));
        this.$('#pull-status-msg').fadeIn(500).delay(2500).fadeOut(500);
      }).catch(() => {
        // This will not work. Check this
        this.$('#pull-status-msg').text(self.get('pullUnSucessfullMessage'));
      })
    }
  }
});
