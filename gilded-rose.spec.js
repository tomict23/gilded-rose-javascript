import { expect, describe, it } from "vitest";
import { Cheese, Item, ItemFactory, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("EXAMPLE TEST", () => {
    const testItem = ItemFactory("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });
  //
  it("Once the `sellIn` days is less then zero, `quality` degrades twice as fast.", () => {
    const testItem = ItemFactory("basic", 0, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(1);
  });
  //
  it("The `quality` of an item is never negative.", () => {
    const testItem = ItemFactory("basic", 0, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(0);
  });
  //
  it('"Aged Brie" actually increases in `quality` the older it gets.', () => {
    const testItem = ItemFactory("Aged Brie", 2, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(1);
    expect(testItem.quality).toBe(1);
  });
  //
  it("The `quality` of an item is never more than `50`.", () => {
    const brie = ItemFactory("Aged Brie", 5, 50);
    items.push(brie);

    updateQuality();

    expect(brie.sellIn).toBe(4);
    expect(brie.quality).toBe(50);
  });
  //
  it('"Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`.', () => {
    const testItem = ItemFactory("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(0);
    expect(testItem.quality).toBe(80);
  });
  //
  it("Backstage passes: `quality` increases by `2` when there are `10` days or less left before the concert.", () => {
    const testItem = ItemFactory("Backstage", 10, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(22);
  });
  //
  it("Backstage passes: `quality` increases by `3` when there are `5` days or less left before the concert.", () => {
    const testItem = ItemFactory("Backstage", 5, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(23);
  });
  //
  it("Backstage passes: `quality` drops to `0` after the concert.", () => {
    const testItem = ItemFactory("Backstage", 0, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(0);
  });
  //
  it(`"Conjured" items degrade in \`quality\` twice as fast as normal items.`, () => {
    const testItem = ItemFactory("Conjured", 5, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(18);
  });
  //
});
