import "./App.css";
import initContacts from "../data/contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("savedContacts");
        return savedContacts ? JSON.parse(savedContacts) : initContacts;
    });
    const [search, setSearch] = useState("");

    const addContact = (newContact) => {
        setContacts((prevContacts) => [
            ...prevContacts,
            { id: nanoid(), ...newContact },
        ]);
    };
    const handleDelete = (contactId) => {
        console.log(contactId);
        setContacts(contacts.filter((contact) => contact.id !== contactId));
    };
    useEffect(() => {
        window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
    }, [contacts]);

    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox onSearch={setSearch} value={search} />
            <ContactList contacts={visibleContacts} onDelete={handleDelete} />
        </>
    );
}