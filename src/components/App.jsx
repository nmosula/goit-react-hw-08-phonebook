import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Layout from './Layout';
import Filter from './Filter';
import { selectContactsItems, selectError, selectIsLoading } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import Loader from './Loader/Loader';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContactsItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;