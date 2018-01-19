import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('levels/level-two', 'Integration | Component | levels/level two', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{levels/level-two}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#levels/level-two}}
      template block text
    {{/levels/level-two}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
