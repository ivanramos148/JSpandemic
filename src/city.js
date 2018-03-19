export class City {
  constructor(name){
    this.name = name;
    this.numberSick = 10;
  }

  setSickness() {
    setInterval(() => {
      this.numberSick++;
    }, 1000);
  }
}
