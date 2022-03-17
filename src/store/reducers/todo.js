const initialState = {
    isLoading: false,
    error: null,
    data: [],
    todoItem: null,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GetListData':
        return {
          ...state,
          isLoading: action.isLoading,
          error: action.error,
          data: action.data,
        };
      case 'SaveTodo':
        return {
          ...state,
          data: action.data,
          todoItem: null,
        };
      case 'TodoDetails':
        return {
          ...state,
          todoItem: state.data.find((item) => item.id === action.id),
        };
      case 'DeleteTodo':
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.id),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;