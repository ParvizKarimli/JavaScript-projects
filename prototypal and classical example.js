var Person = {
  set: function(name) {
    this.name = name;
  },
  get: function() {
    return this.name;
  }
};

var tom = Object.create(Person);
tom.set("Thomas");
alert(tom.get());


function PersonSet(name) {
  this.name = name;
}

PersonSet.prototype.get = function() {
  return this.name;
};

var jack = new PersonSet("Jackson");
alert(jack.get());


var Person2 = {
  set: PersonSet,
  get: PersonSet.prototype.get
};

var nick = Object.create(Person2);
nick.set("Nicholas");
alert(nick.get());