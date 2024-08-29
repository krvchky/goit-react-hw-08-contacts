import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../../redux/contacts/operations";
const Contact = ({ contact }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  const dispatch = useDispatch();
  return (
    <li className={s.contact}>
      <p className="title">{name}</p>
      <p className="telefon">{number}</p>
      <button
        type="button"
        className="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;