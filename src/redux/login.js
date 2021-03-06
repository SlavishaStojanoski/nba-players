const loginReducer = (
  state = {
    username: '',
    // password: '',
    // niza: []
  },
  action
) => {
  switch (action.type) {
    case 'SAVE_LOGIN_INFO': {
      const { username } = action.payload;
      // const novaNiza = [...state.niza, 'asd']
      // const newObject = {...state.object, property: 'asd' }
      localStorage.setItem('username', username);
      // localStorage.setItem('password', password);
      return {
        ...state,
        username,
        // password,
        // niza: novaNiza
      };
    }

    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        username: '',
        // password: '',
        // niza: novaNiza
      };
    }
    default: {
      return state;
    }
  }
};

const saveLoginInfo = (username) => {
  return {
    type: 'SAVE_LOGIN_INFO',
    payload: { username },
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
    payload: null,
  };
};

export { saveLoginInfo, logout, loginReducer };
