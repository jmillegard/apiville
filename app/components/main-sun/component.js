import Ellipse from '../svg-objects/ellipse/component';

export default Ellipse.extend({

  fill: '#FFCA00',

  cx: -100,
  cy: 100,
  rx: 40,
  ry: 40,

  click() {
    this.thing.animate({rx: 600, ry: 600}, 2000, mina.bounce);
  },

  didInsertElement() {

    this._super(...arguments);

    let p = this.world.path('M10-5-10,15M15,0,0,15M0-5-20,15').attr({
      fill: 'none',
      stroke: '#bada55',
      strokeWidth: 5
    });

    p = p.pattern(0, 0, 10, 10);

    this.thing.attr({
      fill: p
    });

  },

  didRender() {
    
  }

});
