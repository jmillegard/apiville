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

    this.thing.drag((x, y) => {
      const pos = this.calcPos(x, y);
      this.move(pos.x, pos.y);
    }, (x, y) => {
      const pos = this.calcPos(x, y);
      this.start(pos.x, pos.y);
    }, (x, y) => {
      const pos = this.calcPos(x, y);
      this.stop(pos.x, pos.y);
    });

    this.world.mousemove((ev, x, y) => {
      const pos = this.calcPos(x, y);
      this.mouseDidMove(pos.x, pos.y);
    })

  },

  calcPos(x, y) {
    const svg = this.world.node;
    let pt = svg.createSVGPoint();
    pt.x = x; 
    pt.y = y;
    let pos = pt.matrixTransform(svg.getScreenCTM().inverse());
    return pos;
  },

  mouseDidMove(x, y) {

  },

  move(x, y) {

  },

  start(x, y) {

  },

  stop(x, y) {

  }

});