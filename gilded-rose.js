export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {}
}

export class Basic extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality < 50) {
      this.quality--;
    }
    if (this.sellIn < 0) {
      this.quality--;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export class Legendary extends Item {
  updateQuality() {}
}

export class Cheese extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality < 50) {
      this.quality++;
    }
  }
}

export class Tickets extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.sellIn <= 10) {
      this.quality += 2;
    }
    if (this.sellIn <= 5) {
      this.quality++;
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

export class Conjured extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.quality > 0) {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  //
  for (const item of items) {
    item.updateQuality();
  }
  //
};

//Factory funcs.

export function ItemFactory(name, sellIn, quality) {
  switch (name) {
    case "Aged Brie":
      return new Cheese(name, sellIn, quality);
    case "basic":
      return new Basic(name, sellIn, quality);
    case "Backstage":
      return new Tickets(name, sellIn, quality);
    case "Sulfuras, Hand of Ragnaros":
      return new Legendary(name, sellIn, quality);
    case "Conjured":
      return new Conjured(name, sellIn, quality);
  }
}
