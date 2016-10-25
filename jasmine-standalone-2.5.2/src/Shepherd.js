function Sheep(name) {
  this.name = name
};

function Pen() {
  this.pen = []
};

Pen.prototype.storeSheep = function (sheep) {
  this.pen.push(sheep);
};

Sheep.prototype.sayName = function () {
  return this.name;
};

Pen.prototype.allSheep = function () {
  return this.pen.toString();
};
