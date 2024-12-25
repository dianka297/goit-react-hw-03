import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ contact: { id, name, number }, onDelete }) => {
    return (
        <>
            <p className={css.contactInfo}>
                <FaUser style={{ marginRight: "0.5rem" }} />
                {name}
                <span>
                    <FaPhone
                        style={{
                            marginRight: "0.5rem",
                            transform: "rotate(90deg)",
                        }}
                    />
                    {number}
                </span>
            </p>
            <button
                className={css.delete}
                type="button"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </>
    );
};

export default Contact;