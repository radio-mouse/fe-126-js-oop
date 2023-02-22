class Form {
  clear() {
    this.node[0].value = '';
    this.node[1].value = '5';
    this.node[2].value = '';
    this.node[4].checked = false;
  }

  getData() {
    const title = this.node[0].value;

    if (!title) {
      throw new Error("You can't add movie without title!");
    }

    return {
      title: this.node[0].value,
      rating: this.node[1].value,
      thoughts: this.node[2].value,
      isFavorite: this.node[4].checked,
    };
  }

  constructor() {
    this.node = document.getElementById('form');
  }
}

export default Form;
