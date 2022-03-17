import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './molecules/Navbar';
import Modal from './molecules/Modal';
import TodoForm from './molecules/Todos/TodoForm';
import TodoList from './molecules/Todos/TodoList';
import apiCall from './configs/api';

const App = () => {
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.ui);
  const {
    req,
    isLoading,
    error,
    resdata,
  } = apiCall();
  useEffect(() => {
    req();
  }, [req]);
  useEffect(() => {
    dispatch({
      type: 'GetListData',
      isLoading,
      error,
      resdata,
    });
  }, [dispatch, isLoading, error, resdata]);
  return (
    <>
      <Navbar />
      {uiReducer.showModal && <Modal />}
      <main>
        {uiReducer.showForm && <TodoForm />}
        <TodoList />
      </main>
    </>
  );
};

export default App;