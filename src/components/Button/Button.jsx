import { useDispatch, useSelector } from 'react-redux';
import { Btn } from './styles';
import { config } from '../../helpers/btnConfig';
import { getOnClick } from '../../store/button/button';

const Button = ({ product }) => {
  const state = useSelector((state) => state.button);
  const dispatch = useDispatch();
  const data = { type: state.icon.type, product };

  if (state.active)
    return (
      <Btn onClick={() => dispatch(getOnClick(data))} {...state}>
        {`${state.title}`} {config.getIcon(state.icon)}
      </Btn>
    );
  return null;
};

export default Button;
