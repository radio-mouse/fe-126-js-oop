import Alert from './Alert';

class Modal {
  open(movie) {
    this.node.classList.remove('hidden');
    this.movie = movie;
    this.setData(movie);
  }

  close() {
    this.node.classList.add('hidden');
  }

  setData() {
    const { title, rating, isFavorite, thoughts } = this.movie.getData();

    this.form[0].value = title;
    this.form[1].value = rating;
    this.form[2].value = thoughts;
    this.form[4].checked = isFavorite;
  }

  getData() {
    const title = this.form[0].value;

    if (!title) {
      throw new Error("You can't save movie without title!");
    }

    return {
      title: this.form[0].value,
      rating: this.form[1].value,
      thoughts: this.form[2].value,
      isFavorite: this.form[4].checked,
    };
  }

  constructor() {
    this.node = document.getElementById('modal');
    this.form = document.getElementById('edit-form');
    this.cancelBtn = document.getElementById('edit-cancel');
    this.cancelBtn.addEventListener('click', () => this.close());
    this.alert = new Alert();

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      try {
        this.movie.setData(this.getData());
        this.close();
        this.alert.showAlert('Movie was successfully edited!!!');
      } catch ({ message }) {
        this.alert.showAlert(message, true);
      }
    });
  }
}

export default Modal;
