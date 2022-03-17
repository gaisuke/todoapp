const initialState = {
    showTodoForm: false,
    showModal: false,
  };
  
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ShowForm':
        return {
          ...state,
          showTodoForm: true,
          showModal: false,
        };
      case 'HideForm':
        return {
          ...state,
          showTodoForm: false,
        };
      case 'ShowModal':
        return {
          ...state,
          showModal: true,
        };
      case 'HideModal':
        return {
          ...state,
          showModal: false,
        };
      default:
        return state;
    }
  };
  
  export default uiReducer;