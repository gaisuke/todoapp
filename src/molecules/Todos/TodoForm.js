import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';

import classes from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const { todoItem, data: todosData } = todos;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const resetState = () => {
    setTitle('');
    setDescription('');
    setStatus(false);
  };

  useEffect(() => {
    if (todoItem) {
      setTitle(todoItem.title);
      setDescription(todoItem.description);
      setStatus(!!todoItem.status);
    } else {
      resetState();
    }
  }, [todoItem]);

  const closeTodoForm = () => {
    dispatch({ type: 'HideForm' });
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.checked);
  };

  const saveTodoHandler = (event) => {
    event.preventDefault();
    const inputData = {
      id: Date.now(),
      title,
      description,
      status: status ? 1 : 0,
      createdAt: new Date().toISOString(),
    };
    const existingTodoIndex = todosData.findIndex(
      (item) => item.id === todoItem?.id,
    );
    const existingTodoItem = todosData[existingTodoIndex];
    let updatedTodos;
    if (existingTodoItem) {
      const updatedTodo = {
        ...existingTodoItem,
        title,
        description,
        status: status ? 1 : 0,
      };
      updatedTodos = [...todosData];
      updatedTodos[existingTodoIndex] = updatedTodo;
    } else {
      updatedTodos = todosData.concat(inputData);
    }
    dispatch({ type: 'SaveTodo', data: updatedTodos });
    resetState();
    dispatch({ type: 'HideForm' });
  };

  return (
    <Card className={classes.form}>
      <h3 className={classes.title}>
        {todoItem ? 'Ubah Task' : 'Buat Task Baru'}
      </h3>
      <form autoComplete="off" onSubmit={saveTodoHandler}>
        <Input
          id="title"
          label="Judul"
          value={title}
          onChange={titleChangeHandler}
        />
        <Input
          id="description"
          label="Deskripsi"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <div className={classes['form-group']}>
          <label htmlFor="status">
            <input
              type="checkbox"
              id="status"
              checked={status}
              onChange={statusChangeHandler}
            />
            Selesai
          </label>
        </div>
        <div className={classes['button-group']}>
          <Button
            title={todoItem ? 'Ubah Task' : 'Simpan Task'}
            variant="primary"
            type="submit"
          />
          <Button
            title="Batal"
            variant="danger"
            onClick={closeTodoForm}
          />
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
