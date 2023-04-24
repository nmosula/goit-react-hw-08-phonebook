import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContactsItems, selectError, selectIsLoading } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';
// import { Layout } from 'components/Layout';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';


export const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContactsItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <Layout>
    <>
      {isLoading && !error && <b><Loader /></b>}

      <ContactForm />
      
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
        ) : ( <h3>There are no contacts in your phonebook!</h3> )
      }
    </>
    // </Layout>
  );
}

export default Contacts;