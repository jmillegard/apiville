import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-objects/ellipse', 'Integration | Component | svg objects/ellipse', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{svg-objects/ellipse}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#svg-objects/ellipse}}
      template block text
    {{/svg-objects/ellipse}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
