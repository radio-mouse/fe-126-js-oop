class Storage {
  static setData(movies) {
    const data = movies.map((movie) => ({ id: movie.getId(), data: movie.getData() }));
    localStorage.setItem('movies', JSON.stringify(data));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('movies') ?? []);
  }
}

export default Storage;
