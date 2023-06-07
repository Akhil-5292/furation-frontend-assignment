
// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description of Book 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description of Book 2',
    },
    
  ],
};

const store = createStore(rootReducer, initialState);

export default store;




