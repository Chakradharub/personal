import {Link} from "react-router-dom";
import TypingText from "PersonalPage";

 export function ProfessionalPage({ selectedName }) {
  return (
    <div>
      <div>
        <Link to="/personal">
          Switch to Personal
        </Link>
      </div>

      <TypingText text={`Hello ${selectedName}`}/>

      <div>
        <h2>Professional CV</h2>
      </div>
    </div>
  );
}
