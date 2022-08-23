import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateValue(event.currentTarget.value));
  };

  return (
    <div className={css.filter__container}>
      <p className={css.filter__title}>Find contacts by name</p>
      <label className={css.filter__label}>
        <input
          type="text"
          name="filter"
          value={filterValue}
          className={css.filter__input}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
