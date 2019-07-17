import React, { useState } from "react";
import "./App.css";
import fullListOfContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(fullListOfContacts.slice(0, 5));

  function handleAddRandomContact() {
    let randomIndex = Math.floor(Math.random() * fullListOfContacts.length);
    let randomContact = fullListOfContacts[randomIndex];
    setContacts([...contacts, randomContact]);
  }

  function handleSort(category) {
    if (category === "name") {
      setContacts(
        [...contacts].sort((a, b) => {
          if (a.name > b.name) return 1;
          else return -1;
        })
      );
    }
    if (category === "popularity") {
      setContacts(
        [...contacts].sort((a, b) => {
          if (a.popularity > b.popularity) return 1;
          else return -1;
        })
      );
    }
  }

  function handleDelete(indexToRemove) {
    let sliced = [...contacts];
    sliced.splice(indexToRemove, 1);
    setContacts(sliced);
  }

  return (
    <div>
      <h1>Iron Contacts</h1>
      <div className="actions">
        <button onClick={handleAddRandomContact}>Add Random</button>
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("popularity")}>
          Sort by Popularity
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i + contact.name}>
              <td>
                <img className="contact-picture" src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><button onClick={() => handleDelete(i)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
