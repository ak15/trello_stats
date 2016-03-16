import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  title: 'Are you sure you want to delete it?',
  yesButtonName: 'Yes',
  noButtonName: 'No',
  showLoader: false,
  actions: {
    hideConfirmBox() {
      this.set('show', false);
    },
    onYesClick() {
      if (this.attrs.onYesClick) {
        this.set('showLoader', true);
        this.attrs.onYesClick().then(() => {
          this.set('showLoader', false);
        });
      }
    },
    onNoClick() {
      this.attrs.onNoClick && this.attrs.onNoClick();
    }
  }
});
