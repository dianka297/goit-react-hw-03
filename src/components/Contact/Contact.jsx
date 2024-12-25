import css from './Contact.module.css';
import { HiMiniUser, HiPhone } from 'react-icons/hi2';

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p className="text">
          <HiMiniUser className={css.userIcon} />
          {contact.name}
        </p>
        <p className="text">
          <HiPhone className={css.userIcon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </>
  );
}