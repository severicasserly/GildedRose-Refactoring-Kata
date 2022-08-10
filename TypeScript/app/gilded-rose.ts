export class Item {
  
  name: string;
  sellIn: number;
  quality: number;
  
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  doDecreaseQuality() {
    if (this.name != "Sulfuras, Hand of Ragnaros") {
      this.quality = this.quality - 1;
    }
  }

  doIncreaseQuality() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }

  decreaseQuality() {
    if (this.quality > 0) {
      this.doDecreaseQuality();
    }
  }

  updateExpiredBackstagePasses() {
    this.quality = this.quality - this.quality;
  }

  increaseQualityOfBackstagePassesGeneral(days: number) {
    if (this.sellIn < days) {
      this.doIncreaseQuality();
    }
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
      item.decreaseQuality();
    } else {
      this.updateExpiredBackstagePasses(item);
    }
  }

  private updateExpiredBackstagePasses(item: Item) {
    item.updateExpiredBackstagePasses();
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
      item.decreaseQuality();
    } else {
      this.increaseQuality(item);
    }
  }

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      this.increaseQualityOfBackstagePasses(item);
    }
  }

  private increaseQualityOfBackstagePasses(item: Item) {
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      item.increaseQualityOfBackstagePassesGeneral(11);
      item.increaseQualityOfBackstagePassesGeneral(6);
    }
  }
}
