import "/src/card.css";

export default function Abdul({ name, email, id }) {
  return (
    <div className="start">
      <img alt="robots" src={`https://robohash.org/${id}?`} />
      <div>
        <h1>{name}</h1>
        <p> {email}</p>
      </div>
    </div>
  );
}
