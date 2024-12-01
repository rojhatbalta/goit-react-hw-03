import PropTypes from "prop-types";
import Style from "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
  return (
    <li>
      <div className={Style.contactContainer}>
        <div>
          <h2 className={Style.contactName}>
            <svg
              className={Style.contactSvg}
              height="16"
              width="16"
              fill="#ffffff"
            >
              <use href="../../assets/person.svg"></use>
            </svg>
            {contact.name}
          </h2>
          <p className={Style.contactNumber}>
            <svg
              className={Style.contactSvg}
              height="16"
              width="16"
              fill="#ffffff"
            >
              <use href="../../assets/phone.svg"></use>
            </svg>
            {contact.number}
          </p>
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
