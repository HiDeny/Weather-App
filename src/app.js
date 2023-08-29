import './style.css';
import 'normalize.css';

import createSearchForm from './components/searchForm';
import formController from './components/controlSearchForm';

const body = document.querySelector('body');

const searchBar = () => {
  const searchForm = createSearchForm();
  formController(searchForm);
  body.append(searchForm);
  return searchForm;
};

searchBar();
