export default function AboutPerson(props) {
  return (
    <div className=" mt-4 p-4 shadow border-top">
      <h1 className="h4 text-uppercase text-info mb-2">
        About {props.person.name}
      </h1>
      <p>{props.person.about}</p>
    </div>
  );
}
