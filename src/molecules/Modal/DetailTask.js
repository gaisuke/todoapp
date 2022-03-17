import { useSelector } from 'react-redux';

import useFormatdate from '../../configs/useFormatdate';
import Buttons from '../Buttons';

import classes from './DetailTask.module.css';

const DetailTask = () => {
  const todoState = useSelector((state) => state.todo);
  const { todoItem } = todoState;
  const formatDate = useFormatdate(Date.parse(todoItem.createdAt));
  return (
    <>
      <h3>Detail Task</h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Judul</th>
            <td>{todoItem.title}</td>
          </tr>
          <tr>
            <th>Deskripsi</th>
            <td>{todoItem.description}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{todoItem.status ? 'Completed' : 'Active'}</td>
          </tr>
          <tr>
            <th>Dibuat pada</th>
            <td>{formatDate}</td>
          </tr>
        </tbody>
      </table>
      <Buttons id={todoItem.id} status={todoItem.status} isDetail />
    </>
  );
};

export default DetailTask;
