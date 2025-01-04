import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contacList}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete}></Contact>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;