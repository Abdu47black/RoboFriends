import Abdul from "./card";
import { robots } from "/src/robots.js";

function Cardlist() {
  return (
    <div>
      <Abdul id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Abdul id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Abdul id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  );
}
export default Cardlist;