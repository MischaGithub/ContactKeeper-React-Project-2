import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  // Initialise Context
  const contactContext = useContext(ContactContext);

  // Ref Value
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  // useEffect
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  // Create onChange
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
