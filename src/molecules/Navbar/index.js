import { useDispatch } from 'react-redux';

import Button from '../../atoms/Button';

const Navbar = () => {
  const dispatch = useDispatch();
  const showForm = () => {
    dispatch({ type: 'ShowForm' });
    dispatch({ type: 'TodoDetails' });
  };
  return (
    <navbar className="items-center bg-orange-600 flex h-20 justify-between pt-0 pb-0 pr-5 pl-5 xl:pr-12 xl:pl-12">
      <h2 className="text-white text-3xl font-semibold">Todoapp</h2>
      <Button
        title="Add New Task"
        variant="outline"
        onClick={showForm}
      />
    </navbar>
  );
};

export default Navbar;