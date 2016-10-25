describe('Shephard', function() {
  var sheep;
  var pen;

  describe('knows that my sheep are safe', function() {

    it('has a pen for the sheep', function() {
      sheep = new Sheep("Shawn");
      pen = new Pen();
      pen.storeSheep(sheep.name);
      expect(pen.pen[0]).toEqual("Shawn");
    });
  });

  describe('have friendly sheep', function() {

    it('sheep should be able to say their names', function() {
      sheep = new Sheep("Shawn");
      expect(sheep.sayName()).toEqual("Shawn");
    });
  });

  describe('list of all the sheep', function() {

    it('returns the names of the sheep in the pen', function() {
      brian = new Sheep("Brian");
      rosie = new Sheep("Rosie");
      pen.storeSheep(brian.name);
      pen.storeSheep(rosie.name);
      expect(pen.pen.length).toEqual(3);
      expect(pen.allSheep()).toEqual("Shawn,Brian,Rosie")
    })
  })
});
