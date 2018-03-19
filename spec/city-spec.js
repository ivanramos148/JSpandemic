import { City } from './../src/city.js';

describe('City', function() {
  let city = new City("Boston");

  beforeEach(function() {
    jasmine.clock().install();
    city.setSickness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(city.name).toEqual("Boston");
    expect(city.numberSick).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(city.numberSick).toEqual(13);
  });
});
