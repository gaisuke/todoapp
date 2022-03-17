import { useDispatch } from "react-redux";
import Button from "../../atoms/Button";

const Buttons = ({ id, status, isDetail = false }) => {
    const dispatch = useDispatch();
    
    const deleteTodoHandler = () => {
        const confirm = window.confirm('Yakin nih mau dihapus?');
        if (!confirm) {
            return;
        }
        dispatch({ type: 'DeleteTodo', id });
    };

    const updateTodoHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        dispatch({ type: 'TodoDetails', id });
        dispatch({ type: 'ShowForm' });
    };

    const showDetailHandler = () => {
        dispatch({ type: 'HideForm' });
        dispatch({ type: 'ShowModal' });
        dispatch({ type: 'TodoDetails', id });
    };

    return (
        <div className="flex gap-1 mt-5">
            <Button
                title="Ubah"
                size="sm"
                onClick={updateTodoHandler}
            />
            {!status && (
                <Button
                title="Hapus"
                variant="danger"
                size="sm"
                onClick={deleteTodoHandler}
                />
            )}
            {!isDetail && (
                <Button
                title="Detail"
                variant="success"
                size="sm"
                onClick={showDetailHandler}
                />
            )}
        </div>
    )
}

export default Buttons;