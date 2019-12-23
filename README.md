Adds a `set()` method to `Meteor.environmentVariable()`;

Example:
```js
cont myVar = new Meteor.EnvironmentVariable();

console.log(myVar.get()); // undefined
myVar.set('hello!');
console.log(myVar.get()); // 'hello!'
```
