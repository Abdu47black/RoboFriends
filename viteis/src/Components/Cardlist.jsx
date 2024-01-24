import Abdul from "/src/Components/Card.jsx";

// import "/src/Card.css";

export default function Cardlist({ robots }) {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Abdul
            className="car"
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}
