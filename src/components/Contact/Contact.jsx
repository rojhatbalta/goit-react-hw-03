import PropTypes from "prop-types";
import Style from "./Contact.module.css";
import IconURL from "../../assets/icons.svg";

export default function Contact({ contact, deleteContact }) {
  return (
    <li>
      <div className={Style.contactContainer}>
        <div>
          <div className={Style.contactItem}>
            <svg
              className={Style.contactSvg}
              width="16"
              height="16"
              fill="#fffff"
            >
              <use href={IconURL + "#person"}></use>
            </svg>
            <h2 className={Style.contactName}>{contact.name}</h2>
          </div>
          <div className={Style.contactItem}>
            <svg
              className={Style.contactSvg}
              height="16"
              width="16"
              fill="#ffffff"
            >
              <use href={IconURL + "#phone"}></use>
            </svg>
            <p className={Style.contactNumber}>{contact.number}</p>
          </div>
        </div>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
