import Abdul from "./card";
import { robots } from "/src/robots.js";

export default function Cardlist() {
 const CardArray= robots.map((user, i) => {
 return  (<Abdul  key ={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
 }  )

  return(
   <div>
  {CardArray}
    </div>
);
}
