import Group from '../svg-objects/group/component';

export default Group.extend({

  robotHidden: false,

  click() {

    //this.thing.animate({transform: 'translate(0,30)'}, 2000, mina.bounce);
    //this.snap('#hover').animate({transform: 'translate(0,-20)'}, 2000, mina.bounce);

    this.snap('#robot').animate({transform: 'r360, 0, 0'}, 1000, mina.bounce);

    this.toggleProperty('robotHidden');
    
  },

  didInsertElement() {

    this._super(...arguments);

    this.snap('#robot').animate({transform: 'translate(0,200)'}, 1000, mina.bounce);
    this.snap('#hover').animate({transform: 'translate(0,0)'}, 1000, mina.bounce);
    this.snap('#hover').animate({rx: 100}, 2000, mina.bounce);

  },

  move(x, y) {
    this.snap('#robot').attr({transform: `translate(${x},${y})`});
    this.snap('#hover').attr({cx: x + 300, rx: y});
  },

  stop(x, y) {
    this.snap('#robot').animate({transform: 'translate(0,100)'}, 600, mina.bounce);
    this.snap('#hover').animate({transform: 'translate(0,-20)'}, 600, mina.bounce);
    this.snap('#hover').animate({rx: 100}, 600, mina.bounce);
  },



});
