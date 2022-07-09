import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contact <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
