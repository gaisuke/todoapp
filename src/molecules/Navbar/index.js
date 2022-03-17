import { useDispatch } from 'react-redux';

import Button from '../../atoms/Button';

const Navbar = () => {
  const dispatch = useDispatch();
  const showTodoForm = () => {
    dispatch({ type: 'ShowForm' });
    dispatch({ type: 'TodoDetails' });
  };
  return (
    <navbar className="items-center bg-orange-600 flex h-20 justify-between pt-0 pb-0 pr-5 pl-5 md:pr-12 md:pl-12">
      <h2 className="text-white text-3xl font-semibold">Todoapp</h2>
      <Button
        title="Tambah Task"
        variant="outline"
        onClick={showTodoForm}
      />
    </navbar>
  );
};

export default Navbar;