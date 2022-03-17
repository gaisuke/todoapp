/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFormatdate from '../../configs/useFormatdate';

import Card from '../../atoms/Card';
import Buttons from '../Buttons';

import classes from './Modal.module.css';

const ModalBackdrop = () => {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch({ type: 'HideModal' });
  };
  return <div onClick={hideModal} className={classes.backdrop} />;
};

const ModalOverlay = () => {
    const todoState = useSelector((state) => state.todo);
    const { todoItem } = todoState;
    const formatDate = useFormatdate(Date.parse(todoItem.createdAt));
  return (
    <Card className={classes.overlay}>
        <h3>Detail Task</h3>
        <table className="mt-5 pt-5 pb-5 w-full border-y border-orange-600">
            <tbody>
            <tr className="pt-2 pb-2 text-left min-w-max">
                <th>Title</th>
                <td>{todoItem.title}</td>
            </tr>
            <tr className="pt-2 pb-2 text-left min-w-max">
                <th>Description</th>
                <td>{todoItem.description}</td>
            </tr>
            <tr className="pt-2 pb-2 text-left min-w-max">
                <th>Status</th>
                <td>{todoItem.status ? 'Finished' : 'Unfinished'}</td>
            </tr>
            <tr className="pt-2 pb-2 text-left min-w-max">
                <th>Created At</th>
                <td>{formatDate}</td>
            </tr>
            </tbody>
        </table>
        <Buttons id={todoItem.id} status={todoItem.status} isDetail />
    </Card>
  )
};

const Modal = () => (
  <>
    {ReactDOM.createPortal(
      <ModalBackdrop />,
      document.getElementById('rootBackdrop'),
    )}
    {ReactDOM.createPortal(
      <ModalOverlay />,
      document.getElementById('rootOverlay'),
    )}
  </>
);

export default Modal;