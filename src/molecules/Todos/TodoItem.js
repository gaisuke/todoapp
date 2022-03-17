import Card from '../../atoms/Card';
import Buttons from '../Buttons';

import classes from './TodoItem.module.css';

const TodoItem = ({
  id, title, description, status,
}) => (
  <Card className={classes.todo}>
    <strong>{title}</strong>
    <p>{description}</p>
    <Buttons id={id} status={status} />
  </Card>
);

export default TodoItem;
