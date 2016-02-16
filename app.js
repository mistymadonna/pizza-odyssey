'use  strict';
function pizzasAndDeliveriesAt(time) {
  var pizzas = 0
  var deliveries = 0

  // logic
  // 1. is 8 always gonna be 0? because the table says between 8 am & 11 am. it doesn't say it's gonna be equal to 8 am.
  // 2. the table says 11 am could be zero to 4 pizzas or zero to 7 pizzas? which one is it? it cannot be both.
  // we are assuming it's gonna start at 8 am and end right before 11 am for the pizza to vary between 0 and 4 pizzas.
  if (time >= 8 && time < 11) {
    pizzas = randomBetween(0,4);
    deliveries = randomBetween(0,4);
  }
  else if (time >= 11 && time < 14) {
    pizzas = randomBetween(0,7);
    deliveries = randomBetween(0,4);
  }
  else if (time >= 14 && time < 17) {
    pizzas = randomBetween(2,15);
    deliveries = randomBetween(1,4);
  }
  else if (time >= 17 && time < 20) {
    pizzas = randomBetween(15, 35);
    deliveries = randomBetween(3,8);
  }
  else if (time >= 20 && time < 23) {
    pizzas = randomBetween(12,31);
    deliveries = randomBetween(5,12);
  }
  else if (time == 23) {
    pizzas = randomBetween(5,20);
    deliveries = randomBetween(6,11);
  }
  else if (time >= 0 && time <= 2) {
    pizzas = randomBetween(5,20);
    deliveries = randomBetween(6,11);
  }

  return [pizzas, deliveries]
}

function randomBetween(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function listify(placeForMyList, stuffToBeListed) {
  // for loop to iterate thru yon array
  for (var i = 0; i < stuffToBeListed.length; i++) {
    // build an <li> element
    var liEl = document.createElement('li');
    liEl.textContent = stuffToBeListed[i];
    // put it in the DOM
    placeForMyList.appendChild(liEl);
  }
}

function itemsForALocation() {
  var items = []

  // to do: fix the time to be am, pm format
  for (var i = 8; i <= 23; i++) {
    var pAndD = pizzasAndDeliveriesAt(i)
    items.push(i + ':00 ' + pAndD[0] + ' pizzas ' + pAndD[1] + ' deliveries')
  }

  for (var i = 0; i <= 2; i++) {
    var pAndD = pizzasAndDeliveriesAt(i)
    items.push(i + ':00 ' + pAndD[0] + ' pizzas ' + pAndD[1] + ' deliveries')
  }
  return items
}

// main code, copy and paste these for all the locations. do this.
var ballard = document.getElementById('ballard');
var ballardItems = itemsForALocation();
listify(ballard, ballardItems)

var firstHill = document.getElementById('firstHill');
var firstHillItems = itemsForALocation();
listify(firstHill, firstHillItems)

var theInternationalDistrict = document.getElementById('theInternationalDistrict');
var theInternationalDistrict = itemsForALocation();
listify(theInternationalDistrict, theInternationalDistrictItems)

var southlakeUnion = document.getElementById('southlakeUnion');
var southlakeUnion = itemsForALocation();
listify(southlakeUnion, southlakeUnionItems)

var georgetown = document.getElementById('georgetown');
var georgetown = itemsForALocation();
listify(georgetown, georgetownItems)

var ravenna = document.getElementById('ravenna');
var ravenna = itemsForALocation();
listify(ravenna, ravennaItems)
