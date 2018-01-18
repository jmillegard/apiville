import BaseObject from '../base/component';

export default BaseObject.extend({

  tagName: 'ellipse',
  attributeBindings: ['fill', 'cx', 'cy', 'rx', 'ry']

});
