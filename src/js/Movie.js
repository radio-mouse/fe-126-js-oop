class Movie {
  #data = {};
  #id = null;

  setData(data) {
    this.#data = data;

    this.node.querySelector('.movie-title').innerHTML = data.title;
    this.node.querySelector('.movie-rating').innerHTML = data.rating;
    this.node.querySelector('.movie-thoughts').innerHTML = data.thoughts;
    this.node.querySelector('.movie-isFavorite').innerHTML = data.isFavorite ? '⭐' : '';
  }

  getData() {
    return this.#data;
  }

  getId() {
    return this.#id;
  }

  createButton(isDelete) {
    const button = document.createElement('button');

    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add(`btn-${isDelete ? 'danger' : 'warning'}`);
    button.innerText = isDelete ? '🗑️' : '✏️';

    return button;
  }

  setNode() {
    const { title, rating, thoughts, isFavorite } = this.getData();

    const tr = document.createElement('tr');
    const html = `
      <th class="movie-title" scope="row">${title}</th>
      <td class="movie-rating">${rating}</td>
      <td class="movie-thoughts">${thoughts}</td>
      <td class="movie-isFavorite">${isFavorite ? '⭐' : ''}</td>
      <td>
        <div class="btn-group" role="group">
        </div>
      </td>
    `;

    tr.insertAdjacentHTML('beforeend',html);

    const btnGroup = tr.querySelector('.btn-group');
    const editButton = this.createButton(false);
    const deleteButton = this.createButton(true);

    btnGroup.append(editButton, deleteButton);

    this.node = tr;
    this.deleteBtn = deleteButton;
    this.editBtn = editButton;
  }

  constructor(id, data) {
    this.#id = id;
    this.setNode();
    this.setData(data);
  }
}

export default Movie;

