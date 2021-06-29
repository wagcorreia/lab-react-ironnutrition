import { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
    foodList: [],
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = () => {
    const clone = [...this.state.foodList];
    clone.push(
      this.state.name,
      this.state.calories,
      this.state.image,
      this.state.quantity
    );
    console.log(clone);
    this.setState({ foodList: clone });
  };

  handleDelete = (index) => {
    const clone = [...this.state.foodList];

    clone.splice(index, 1);

    this.setState({ foodList: clone });
  };

  render() {
    return (
      <div>
        <form className="control" onSubmit={this.handleSubmit}>
          <input
            className="input is-hovered   newfood-input"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="number"
            placeholder="Calories"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />
          <input
            className="input is-hovered   newfood-input"
            type="text"
            placeholder="Image"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <button className="button is-info" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddFood;
