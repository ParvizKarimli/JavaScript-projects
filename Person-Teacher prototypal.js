var Person = {
  constructor: function(name) {
    this._nm = name;
  },
  get: function() {
    return this._nm;
  }
};

var person1 = Object.create(Person);
person1.constructor('Parviz');
alert(person1.get());


var Teacher = {
  constructor: function(name, subject) {
    Person.constructor.call(this, name);
    this._sbjct = subject;
  },
  get: function() {
    return this._nm + ' is a ' + this._sbjct + ' teacher';
  }
};

var teacher1 = Object.create(Teacher);
teacher1.constructor('Karim', 'Math');
alert(teacher1.get());