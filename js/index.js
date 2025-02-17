// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });

  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  const activePepperoni = document.querySelector('.btn.btn-pepperoni');
  const activeMushrooms = document.querySelector('.btn.btn-mushrooms');
  const activeGreenPepper = document.querySelector('.btn.btn-green-peppers');
  const activeSauce = document.querySelector('.btn.btn-sauce');
  const activeCrust = document.querySelector('.btn.btn-crust');

  if (!state.pepperoni) {
    activePepperoni.className = 'btn btn-pepperoni';
  } else if (state.pepperoni) {
    activePepperoni.className = 'btn btn-pepperoni active';
  }

  if (!state.mushrooms) {
    activeMushrooms.className = 'btn btn-mushrooms';
  } else if (state.mushrooms) {
    activeMushrooms.className = 'btn btn-mushrooms active';
  }

  if (!state.greenPeppers) {
    activeGreenPepper.className = 'btn btn-green-peppers';
  } else if (state.greenPeppers) {
    activeGreenPepper.className = 'btn btn-green-peppers active';
  }

  if (!state.whiteSauce) {
    activeSauce.className = 'btn btn-sauce';
  } else if (state.whiteSauce) {
    activeSauce.className = 'btn btn-sauce active';
  }
  
  if (!state.glutenFreeCrust) {
    activeCrust.className = 'btn btn-crust';
  } else if (state.glutenFreeCrust) {
    activeCrust.className = 'btn btn-crust active';
  }
}

function renderPrice() {
  const priceSection = document.querySelector('.panel.price ul');
  const price = document.querySelector('.panel.price strong');

  let sum = basePrice;
  let startingText = '';

  //calculo:

  for (let key in state) {
    if (state[key]) {
      startingText += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`;
      sum += ingredients[key].price;
    }
  }

  priceSection.innerHTML = startingText;
  price.innerText = sum;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
