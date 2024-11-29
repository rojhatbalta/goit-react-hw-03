import PropTypes from "prop-types";
import "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
  return (
    <li>
      <div className="contactContainer">
        <div>
          <h2 className="contactName">{contact.name}</h2>
          <p className="contactNumber">{contact.number}</p>
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
