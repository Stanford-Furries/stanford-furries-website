import Spacer from "./Spacer";
import "./PersonInfo.css";

function PersonInfo(props) {
  return (
    <div className="person-content">
      <img className="panel-pfp" src={props.profileSrc} alt="Profile" />
      <div className="person-info-group">
        <div className="person-info">
          <h3 className="person-name">{props.name}</h3>
          <Spacer type="small" />
          <div className="person-contact-info">
            <img width="20" src="discord-logo.png" alt="Discord logo" />
            <Spacer type="mini" />
            <span>{props.discord}</span>
          </div>
        </div>
        <h5 className="person-role">{props.role}</h5>
        <p className="person-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default PersonInfo;
