import BaseObject from '../base/component';

export default BaseObject.extend({

  tagName: 'rect',
  attributeBindings: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'stroke'],

});
