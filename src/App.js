import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incRement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  decRement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  reSet = () => {
    this.setState((prevState) => ({
      counter: (prevState.counter = 0),
    }));
  };
  render() {
    const { firstName, lastName, link } = this.props;
    return (
      <div>
        <h1>
          Mening ismim - {firstName}, Sharifim {lastName}
        </h1>
        <a href={link}>Link</a>
        <hr />
        <button onClick={this.incRement} className="btn btn-success">
          Increement
        </button>
        <button className="btn btn-danger" onClick={this.decRement}>
          Decrement
        </button>
        <button className="btn btn-info" onClick={this.reSet}>
          Reset
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="w-50 mx-auto">
      <User firstName="Aziz" lastName="Kuchkarov" link="www.google.com" />
      <User firstName="Laziz" lastName="Boqiev" link="youtube.com" />
    </div>
  );
};

export default App;
