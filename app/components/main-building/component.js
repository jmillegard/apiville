import Group from '../svg-objects/group/component';

export default Group.extend({
  
  click() {
    this.thing.animate({height: 50}, 1000);
  }

});
