function Person(name) {
  this._nm = name;
}

Person.prototype.get = function() {
  return 'My name is ' + this._nm;
};

var person1 = new Person('Parviz');
alert(person1.get());


function Teacher(name, subject) {
  Person.call(this, name);
  this._sbjct = subject;
}

Teacher.prototype.get = function() {
  return this._nm + ' is a ' + this._sbjct + ' teacher';
}

var teacher1 = new Teacher('Karim', 'Math');
alert(teacher1.get());