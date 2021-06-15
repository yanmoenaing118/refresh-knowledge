import { lorem } from "faker";
import { useState } from "react";

export default function AddNewPerson(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    props.addPerson(name, age, lorem.paragraph());
    setName("");
    setAge("");
    setAbout("");
  };

  return (
    <div className="container p-4 shadow-sm mb-4">
      <form autoComplete="off">
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-success fs-4"
          >
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-success fs-4"
          >
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-success fs-4"
          >
            About person
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-info ps-4 pe-4 text-uppercase text-white"
          onClick={addPerson}
        >
          add person
        </button>
      </form>
    </div>
  );
}
