class Table {
  #movies = [];

  update() {
    this.node.innerHTML = '';
    this.#movies.map(({ node }) => this.node.append(node));
  }

  addMovie(movie) {
    this.#movies.unshift(movie);
    this.update();
  }

  removeMovie(id) {
    this.#movies = this.#movies.filter((movie) => movie.getId() !== id);
    this.update();
  }

  constructor() {
    this.node = document.getElementById('table');
  }
}

export default Table;
