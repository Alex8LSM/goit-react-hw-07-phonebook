import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contact <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
