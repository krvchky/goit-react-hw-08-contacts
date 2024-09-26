import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) => {
    const filterValue =
      nameFilter && typeof nameFilter === 'string'
        ? nameFilter.toLowerCase()
        : '';

    return contacts.filter(
      (contact) =>
        (contact.name && contact.name.toLowerCase().includes(filterValue)) ||
        (contact.number && contact.number.includes(filterValue))
    );
  }
);