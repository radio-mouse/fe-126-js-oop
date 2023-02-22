import Alert from './Alert';
import Form from './Form';
import Movie from './Movie';
import Table from './Table';

document.addEventListener('DOMContentLoaded', () => {
  const form = new Form();
  const alert = new Alert();
  const table = new Table();

  const onAdd = () => {
    try {
      const data = form.getData();
      const movie = new Movie(data);

      movie.deleteBtn.addEventListener('click', () => table.removeMovie(movie.getId()));
      form.clear();
      table.addMovie(movie);
      alert.showAlert('Movie was successfully added!!!');
    } catch ({ message }) {
      alert.showAlert(message, true);
    }
  }

  form.node.addEventListener('submit', (e) => {
    e.preventDefault();
    onAdd();
  });
});
