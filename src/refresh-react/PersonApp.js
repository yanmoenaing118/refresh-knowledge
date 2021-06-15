import { Component } from "react";
import AddNewPerson from "./Person/AddNewPerson";
import Persons from "./Persons";
import faker from "faker";
import AboutPerson from "./Person/AboutPerson";
import db from "../utils/firebase";
class PersonApp extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [],
    person: null,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  componentDidMount() {
    db.collection("persons")
      .get()
      .then((querySnapshot) => {
        const persons = [];
        querySnapshot.forEach((doc) => {
          const person = {
            id: doc.id,
            name: doc.data().name,
            age: doc.data().age,
            about: doc.data().about,
          };
          persons.push(person);
        });
        this.setState({ persons: persons });
      });
  }

  updatePerson(id) {
    let person = this.state.persons.find((person) => person.id === id);
    const name = faker.name.firstName();
    fetch(`http://localhost:9000/persons/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: Math.round(Math.random() * 100),
        about: person.about,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let personIndex = this.state.persons.findIndex(
          (person) => person.id === id
        );
        let person = this.state.persons.find((person) => person.id === id);

        person.name = data.name;
        person.age = data.age;

        this.setState((prevState) => {
          prevState.persons[personIndex] = { ...person };
          return prevState;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addPerson(name, age, about) {
    db.collection("persons")
      .add({
        name,
        age,
        about,
      })
      .then((docRef) => {
        this.setState({
          persons: [...this.state.persons, { id: docRef.id, name, age, about }],
        });
      })
      .catch((err) => console.error(err));
  }

  deletePerson(id) {
    db.collection("persons")
      .doc(id)
      .delete()
      .then(() => {
        let personIndex = this.state.persons.findIndex(
          (person) => person.id === id
        );
        let newPersons = [...this.state.persons];
        newPersons.splice(personIndex, 1);
        this.setState({ persons: newPersons });
      });
  }

  showAboutPerson(id) {
    db.collection("persons")
      .doc(id)
      .get()
      .then((doc) => {
        this.setState({ person: doc.data() });
      });
  }

  renderPerson() {
    return (
      this.state.persons.length !== 0 && (
        <Persons
          persons={this.state.persons}
          updatePerson={this.updatePerson.bind(this)}
          deletePerson={this.deletePerson.bind(this)}
          showAboutPerson={this.showAboutPerson.bind(this)}
        />
      )
    );
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
            {this.state.person && <AboutPerson person={this.state.person} />}
          </div>
          <div className="col-12 col-md-6">{this.renderPerson()}</div>
        </div>
      </div>
    );
  }
}

export default PersonApp;
