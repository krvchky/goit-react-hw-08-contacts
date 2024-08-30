// import { useEffect } from "react";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import ContactList from "../../components/ContactList/ContactList";
// import SearchBox from "../../components/SearchBox/SearchBox";
// import { fetchContacts } from "../../redux/contacts/operations";
// import s from "./ContactsPage.module.css";
// import { useDispatch } from "react-redux";

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={s.bg}>
//         <ContactForm />
//         <SearchBox />
//         <ContactList />
//       </div>
//     </>
//   );
// };

// export default ContactsPage;
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) { 
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
    return <p>Please log in to view your contacts.</p>; 
  }

  return (
    <>
      <div className={s.bg}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
