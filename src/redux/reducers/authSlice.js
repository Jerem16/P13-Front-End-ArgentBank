import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import {
    apiPostRequest,
    apiGetRequest,
    prepareRequest,
    handleError,
} from "../../utils/api";
import { selectToken, selectStatus } from "../selector/selector";
import { splitAndStoreToken, clearStoredToken } from "../../utils/token";

const initialState = {
    status: "void",
    isAuth: false,
    isLoading: false,
    token: null,
    userData: null,
    error: null,
};

const accreditedState = {
    status: "resolved",
    isAuth: true,
    error: null,
};

const { actions, reducer } = createSlice({
    name: "users",
    initialState,
    reducers: {
        pendingAction: (draft) => {
            draft.isLoading = true;
            if (["void", "updating"].includes(draft.status))
                draft.status = "pending";
            if (draft.status === "resolved") draft.status = "updating";
            if (draft.status === "rejected") {
                draft.error = null;
                draft.status = "pending";
            }
        },
        rejectedAction: (draft, action) => {
            draft.status = "rejected";
            draft.isLoading = false;
            draft.error = action.payload;
        },

        getTokenAction: (draft, action) => {
            if (["pending", "updating"].includes(draft.status)) {
                Object.assign(draft, accreditedState);
                draft.token = action.payload;
            }
        },
        pushTokenAction: (draft, action) => {
            draft.isAuth = true;
            draft.token = action.payload;
        },

        getUserProfileAction: (draft, action) => {
            if (["pending", "updating"].includes(draft.status)) {
                Object.assign(draft, accreditedState);
                draft.userData = action.payload;
                draft.isLoading = false;
            }
        },
        updateUserNameAction: (draft, action) => {
            if (["pending", "updating"].includes(draft.status)) {
                Object.assign(draft, accreditedState);
                draft.userData.userName = action.payload;
                draft.isLoading = false;
            }
        },
        logoutAction: () => initialState,
    },
});

export default reducer;
export const {
    pendingAction,
    getTokenAction,
    getUserProfileAction,
    updateUserNameAction,
    rejectedAction,
    pushTokenAction,
    logoutAction,
} = actions;

// Thunks
export const loginUser = (email, password) => async (dispatch, getState) => {
    if (!prepareRequest(dispatch, getState, actions, selectStatus)) return;
    try {
        const { token } = await apiPostRequest("/login", { email, password });
        dispatch(getTokenAction(token));
        splitAndStoreToken(token);
    } catch (error) {
        handleError(dispatch, error, actions);
    }
};

export const getUserProfile = () => async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token) {
        try {
            prepareRequest(dispatch, getState, actions, selectStatus);
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };

            const response = await apiGetRequest(
                `/profile`,
                axios.get,
                headers
            );
            dispatch(getUserProfileAction(response));
        } catch (error) {
            handleError(dispatch, error, actions);
        }
    } else {
        console.error("Token introuvable !");
    }
};

export const updateProfile = (token, body) => async (dispatch, getState) => {
    try {
        prepareRequest(dispatch, getState, actions, selectStatus);
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        const response = await apiPostRequest(
            `/profile`,
            body,
            axios.put,
            headers
        );
        dispatch(updateUserNameAction(response.userName));
    } catch (error) {
        handleError(dispatch, error, actions);
    }
};

export const rememberToken = (memToken) => async (dispatch, getState) => {
    const token = selectToken(getState());
    if (!token) {
        dispatch(pushTokenAction(memToken));
    }
};

export const logoutUser = () => async (dispatch) => {
    clearStoredToken();
    dispatch(logoutAction());
};
