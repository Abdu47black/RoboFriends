import "/src/card.css";

function Abdul({ name, email, id }) {
  return (
    <div className="start">
      <img alt="" src={`https://robohash.org/${id}?150*90`} />
      <div>
        <h1>{name}</h1>
        <p> {email}</p>
      </div>
    </div>
  );
}

export default Abdul;

