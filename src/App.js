import { Component } from "react";
import AddNewPerson from "./refresh-react/Person/AddNewPerson";
import Persons from "./refresh-react/Persons";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [],
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
    // fetch("http://localhost:9000/persons", {
    //   method: "POST",
    //   body: JSON.stringify()
    // })
    //   .then((res) => res.json())
    //   .then((persons) => {
    //     this.setState({ persons: persons });
    //   });
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    fetch("http://localhost:9000/persons")
      .then((res) => res.json())
      .then((persons) => {
        this.setState({ persons: persons });
      });
  }

  changeName(id, name) {
    let personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    let person = this.state.persons.find((person) => person.id === id);

    person.name = name;
    this.setState((prevState) => {
      prevState.persons[personIndex] = { ...person };
      return prevState;
    });
  }

  addPerson(name, age) {
    const id = Math.random();

    fetch("http://localhost:9000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, id: id }),
    })
      .then((res) => res.json())
      .then((persons) => {
        this.setState({
          persons: [...this.state.persons, { name, age, id: Math.random() }],
        });
      });
  }

  renderPerson() {
    return (
      this.state.persons.length !== 0 && (
        <Persons
          persons={this.state.persons}
          changeName={this.changeName.bind(this)}
          deletePerson={this.deletePerson.bind(this)}
        />
      )
    );
  }

  deletePerson(id) {
    fetch(`http://localhost:9000/persons/${id}`, {
      method: "DELETE",
    }).then((res) => {
      let personIndex = this.state.persons.findIndex(
        (person) => person.id === id
      );
      let newPersons = [...this.state.persons];
      newPersons.splice(personIndex, 1);
      this.setState({ persons: newPersons });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="h1 text-uppercase text-success p-4">
          React life cycle methods
        </h1>
        <div className="row justify-content-between">
          <div className="col-12 col-md-5">
            <AddNewPerson addPerson={this.addPerson.bind(this)} />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="h3 text-uppercase text-info shadow-sm p-2 mb-4">
              Persons
            </h1>
            {this.renderPerson()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
