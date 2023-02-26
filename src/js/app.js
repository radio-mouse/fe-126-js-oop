import Alert from './Alert';
import Form from './Form';
import Movie from './Movie';
import Table from './Table';
import Storage from './Storage';

document.addEventListener('DOMContentLoaded', () => {
  const form = new Form();
  const alert = new Alert();
  const table = new Table();

  const onAdd = () => {
    try {
      const data = form.getData();
      const movie = new Movie(Date.now(), data);

      form.clear();
      table.addMovie(movie);
      Storage.setData(table.getMovies());
      alert.showAlert('Movie was successfully added!!!');
    } catch ({ message }) {
      alert.showAlert(message, true);
    }
  };

  form.node.addEventListener('submit', (e) => {
    e.preventDefault();
    onAdd();
  });
});
