import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../atoms/Card';
import TodoGroup from './TodoGroup';

import classes from './TodoList.module.css';

const TodoList = () => {
  const [todoActive, setTodoActive] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState([]);
  const todos = useSelector((state) => state.todo);
  const { isLoading, error, data: dataTodos } = todos;
  useEffect(() => {
    const completed = dataTodos.filter((todo) => todo.status === 0);
    const active = dataTodos.filter((todo) => todo.status === 1);
    setTodoActive(completed);
    setTodoCompleted(active);
  }, [dataTodos]);
  let contentWrapper;
  if (isLoading) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>Loading...</p>
      </Card>
    );
  }
  if (!isLoading && error) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>{error}</p>
      </Card>
    );
  }
  if (!isLoading && !error 
    // && dataTodos.length === 0
   ) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>Data not found. Please add new task.</p>
      </Card>
    );
  }
  if (!isLoading && !error
    //  && dataTodos.length > 0
     ) {
    const showAllTodos = todoCompleted.length > 0 && todoActive.length > 0;
    contentWrapper = (
      <div className={`${classes.todos} ${showAllTodos ? classes.todosColumn : ''}`}>
        {todoActive.length > 0 && <TodoGroup title="Active" todos={todoActive} sortAsc />}
        {todoCompleted.length > 0 && <TodoGroup title="Completed" todos={todoCompleted} />}
      </div>
    );
  }
  return (
    <>
      <h3 className={classes.title}>Task To Do List</h3>
      <div className={classes.underline} />
      {contentWrapper}
    </>
  );
};

export default TodoList;
