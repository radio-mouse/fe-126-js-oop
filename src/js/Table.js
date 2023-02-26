import Storage from "./Storage";
import Movie from "./Movie";
import Modal from './Modal';

class Table {
  #movies = [];

  update() {
    this.node.innerHTML = '';
    this.#movies.map(({ node }) => this.node.append(node));
  }

  addMovie(movie) {
    this.#movies.unshift(movie);

    movie.deleteBtn.addEventListener('click', () => this.removeMovie(movie.getId()));
    movie.editBtn.addEventListener('click', () => this.modal.open(movie));
    this.update();
  }

  removeMovie(id) {
    this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
    this.update();
    Storage.setData(this.#movies);
  }

  create() {
    const movies = Storage.getData();

    movies.reverse().map(({ id, data }) => {
      const movie = new Movie(id, data);
      this.addMovie(movie);
    });
  }

  getMovies() {
    return this.#movies;
  }

  constructor() {
    this.node = document.getElementById('table');
    this.modal = new Modal();
    this.create();
  }
}

export default Table;
