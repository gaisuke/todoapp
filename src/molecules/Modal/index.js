/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import Card from '../../atoms/Card';
import DetailTask from './DetailTask';

import classes from './ModalDetail.module.css';

const ModalBackdrop = () => {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch({ type: 'HideModal' });
  };
  return <div onClick={hideModal} className={classes.backdrop} class="z-40"/>;
};

const ModalOverlay = () => (
  <Card className={classes.overlay} class="z-50">
    <DetailTask />
  </Card>
);

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
