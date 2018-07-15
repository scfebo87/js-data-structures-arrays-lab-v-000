const drivers =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) { 
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) { 
  drivers.shift(name);
}

function appendDriver(name) { 
  newDrivers = drivers.concat(name);
  return newDrivers; 
}

function prependDriver(name) { 
  newDrivers = drivers(name, ...drivers);
  return newDrivers;
}