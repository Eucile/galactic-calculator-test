import { Age } from './../src/backend.js';

describe('Age', function() {
  let mercuryTest = new Age(1, 79);
  it('should return user age multiplied by .24', function() {
    expect(mercuryTest.mercury()).toEqual(1);
  })
  it('should return user age multiplied by .62', function() {
    let venusTest = new Age(1, 79);
    expect(venusTest.venus()).toEqual(0.62);
  })
});
