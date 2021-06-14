export default function Person(props) {
  console.log("[Person.js] rendering...");
  const deletePerson = (e) => {
    e.stopPropagation();
    props.deletePerson(props.id);
  };
  return (
    <div
      className="col-12 border rounded p-3 shadow-sm mb-4 text-success"
      onClick={(e) => props.changeName(props.id, "Love")}
    >
      <div className="d-flex justify-content-between">
        <span className="h5 text-uppercase">Name</span>{" "}
        <span className="text-info">{props.name}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="h5 text-uppercase">Age</span> {props.age}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-info text-uppercase text-white"
          onClick={deletePerson}
        >
          <i className="bi-pencil"></i>
        </button>
        <button
          className="btn btn-danger text-uppercase"
          onClick={deletePerson}
        >
          <i className="bi-trash"></i>
        </button>
      </div>
    </div>
  );
}
