import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});

// store should be like this
// {
//   contacts: [ {id, name, number}, {id, name, number} ],
//   filter: ""
// }
