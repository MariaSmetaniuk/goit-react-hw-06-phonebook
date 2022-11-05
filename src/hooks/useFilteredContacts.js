import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const useFilteredContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  //   const getFilteredContacts = () => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  //   };

  //   return getFilteredContacts();
};
