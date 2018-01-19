let assert = require('assert');
let Item = require('../src/item');
let GildedRose = require('../src/gilded_rose');

describe('GildedRose', function() {
  it('change_this_name', function() {
    const gildedRose = new GildedRose([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    assert.equal(items[0].name, "foo");
  });
});