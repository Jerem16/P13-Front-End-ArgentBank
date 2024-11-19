import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { selectToken, selectStatus } from "../selector/selector";
import { splitAndStoreToken, clearStoredToken } from "../../utils/token";

const URL = "http://localhost:3001/api/v1/user";

const apiRequest = async (
    url,
    data = {},
    method = axios.post,
    headers = {}
) => {
    const response = await method(`${URL}${url}`, data, { headers });
    return response.data.body;
};

const prepareRequest = async (dispatch, getState) => {
    const status = selectStatus(getState());
    if (status === "pending" || status === "updating") {
        return;
    }
    dispatch(actions.pending());
};

const handleError = async (dispatch, error) => {
    const errorMessage = error.response?.status === 400 ? 400 : error.message;
    dispatch(actions.rejected(errorMessage));
};

export const loginUser = (email, password) => async (dispatch, getState) => {
    try {
        prepareRequest(dispatch, getState);
        const response = await apiRequest(
            `/login`,
            { email, password },
            axios.post
        );
        const resultValue = response.token;
        dispatch(actions.loginUser(resultValue));
        splitAndStoreToken(resultValue);
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const getUserProfile = () => async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token) {
        try {
            prepareRequest(dispatch, getState);
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };
            const response = await apiRequest(
                `/profile`,
                {},
                axios.post,
                headers
            );
            const resultValue = await response;

            await dispatch(actions.getUserProfile(resultValue));
        } catch (error) {
            handleError(dispatch, error);
        }
    }
};

export const updateProfile = (token, body) => async (dispatch, getState) => {
    try {
        prepareRequest(dispatch, getState);
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        const response = await apiRequest(`/profile`, body, axios.put, headers);
        const resultValue = await response.userName;

        await dispatch(actions.updateUserProfile(resultValue));
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const rememberToken = (memToken) => async (dispatch, getState) => {
    const token = selectToken(getState());
    if (!token) {
        dispatch(actions.sendToken(memToken));
    }
};

export const logoutUser = () => async (dispatch) => {
    clearStoredToken();
    dispatch(actions.logout());
};

const initialState = {
    status: "void",
    isAuth: false,
    isLoading: false,
    token: null,
    userData: null,
    error: null,
};

const resolved = {
    status: "resolved",
    isAuth: true,
    error: null,
};

const { actions, reducer } = createSlice({
    name: "users",
    initialState,
    reducers: {
        pending: (draft) => {
            draft.isLoading = true;
            if (draft.status === "void" || draft.status === "updating") {
                draft.status = "pending";
                return;
            }
            if (draft.status === "resolved") {
                draft.status = "updating";
                return;
            }
            if (draft.status === "rejected") {
                draft.error = null;
                draft.status = "pending";
                return;
            }
        },

        loginUser: (draft, action) => {
            if (draft.status === "pending" || draft.status === "updating") {
                Object.assign(draft, resolved);
                draft.token = action.payload;
            }
        },

        getUserProfile: (draft, action) => {
            if (draft.status === "pending" || draft.status === "updating") {
                Object.assign(draft, resolved);
                draft.userData = action.payload;
                draft.isLoading = false;
            }
        },
        updateUserProfile: (draft, action) => {
            if (draft.status === "pending" || draft.status === "updating") {
                Object.assign(draft, resolved);
                draft.userData.userName = action.payload;
                draft.isLoading = false;
            }
        },

        rejected: (draft, action) => {
            draft.status = "rejected";
            draft.isLoading = false;
            draft.error = action.payload;
        },

        sendToken: (draft, action) => {
            draft.isAuth = true;
            draft.token = action.payload;
        },

        logout: () => initialState,
    },
});

export default reducer;
