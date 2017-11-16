// document.querySelector will return a single element that is the first in matching the criteria within the ()
document.querySelector("#header").textContent = "Hello World";

// document.querySelectorAll will return an array like data structure which contains all elements that match the criteria passed with the ()
var pStyles = document.querySelectorAll('.p-styles');
for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles " + (x + 1);
}

var li = document.querySelectorAll('li');
for (var x = 0; x < li.length; x++) {
  li[x].textContent = "I'm list item " + (x + 1) + " love me!";
}

// Another way to select an element by its ID is document.getElementById

document.getElementById('second-header').textContent = "something"

var awesomes = document.getElementsByClassName('awesome');
for (var x = 0; x < awesomes.xength; x++) {
  awesomes[x]
}

var h3s = document.getElementsByTagName('h3');
for (var x = 0; x < h3s.length; x++) {
  h3s[x].textContent = "This is header" + (x + 1);
}
