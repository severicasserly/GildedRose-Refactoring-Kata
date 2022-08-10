export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item, i) => {
      this.doUpdateQuality(item);
      this.updateExpiry(item);
      this.updateIfExpired(item);
    });

    return this.items;
  }

  private updateIfExpired(item: Item) {
    if (item.sellIn < 0) {
      this.updateExpired(item);
    }
  }

  private updateExpired(item: Item) {
    if (item.name != "Aged Brie") {
      this.updateExpiredNotBrie(item);
    } else {
      this.updateExpiredAgedBrie(item);
    }
  }

  private updateExpiredNotBrie(item: Item) {
    if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
      this.updateExpiredIfPositiveQuality(item);
    } else {
      this.updateExpiredBackstagePasses(item);
    }
  }

  private updateExpiredIfPositiveQuality(item: Item) {
    if (item.quality > 0) {
      this.decreaseQuality(item);
    }
  }

  private decreaseQuality(item: Item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.quality = item.quality - 1;
    }
  }

  private updateExpiredBackstagePasses(item: Item) {
    item.quality = item.quality - item.quality;
  }

  private updateExpiredAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private updateExpiry(item: Item) {
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
  }

  private doUpdateQuality(item: Item) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      this.newMethod(item);
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
  }

  private newMethod(item: Item) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  }
}
