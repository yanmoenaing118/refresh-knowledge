import Person from "./Person/Person";

export default function Persons(props) {
  console.log("[Persons.js] rendering...");
  return (
    <div className="row">
      {props.persons.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            id={person.id}
            updatePerson={props.updatePerson}
            deletePerson={props.deletePerson}
            showAboutPerson={props.showAboutPerson}
          />
        );
      })}
    </div>
  );
}
