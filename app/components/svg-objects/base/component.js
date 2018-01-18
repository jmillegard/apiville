import Component from '@ember/component';
import Snap from 'npm:snapsvg-cjs';

export default Component.extend({

  tagName: '',

  didReceiveAttrs() {
    this.set('snap', Snap);
  },

  didInsertElement() {
    this.set('world', Snap('#svg'));
    this.set('thing', Snap(this.element));
  }

});