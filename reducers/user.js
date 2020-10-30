export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
};

export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};
export const loginRequestSuccess = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data,
    }
};
export const loginRequestFailure = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        data,
    }
};
export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
        data,
    }
};
export const logoutRequestSuccess = (data) => {
    return {
        type: 'LOG_OUT_SUCCESS',
        data,
    }
};
export const logoutRequestFailure = (data) => {
    return {
        type: 'LOG_OUT_FAILURE',
        data,
    }
};
export const logoutAction = {
    type: 'LOG_OUT',
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    console.log(action.data);
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                me: action.data,

            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,

            };
        default:
            return state;
    }
};
export default reducer;