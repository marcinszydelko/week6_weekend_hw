document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleButtonDelete);
});

const handleFormSubmit = function () {
  event.preventDefault();

  const unorderedList = document.querySelector('#endangered-anim-list');

  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const data = document.createElement('article');

  const species = document.createElement('p');
  species.textContent = `Species name: ${event.target.species.value}`;
  data.appendChild(species);

  const numberOfIndividuals = document.createElement('p');
  numberOfIndividuals.textContent = `Number of individuals: ${event.target.number_of_individuals.value}`;
  data.appendChild(numberOfIndividuals);

  const continent = document.createElement('p');
  continent.textContent = `Continent: ${event.target.continent.value}`;
  data.appendChild(continent);

  listItem.appendChild(data);
  unorderedList.appendChild(listItem);
};

const handleButtonDelete = function () {
  while (document.getElementsByClassName('list-item')[0]) {
          document.getElementsByClassName('list-item')[0].remove();
      }
};
