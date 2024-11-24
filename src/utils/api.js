import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";

export const apiPostRequest = async (
    url,
    data = {},
    method = axios.post,
    headers = {}
) => {
    const response = await method(`${BASE_URL}${url}`, data, { headers });
    return response.data.body;
};

export const apiGetRequest = async (url, method = axios.get, headers = {}) => {
    const response = await method(`${BASE_URL}${url}`, { headers });
    return response.data.body;
};

export const prepareRequest = (dispatch, getState, actions, selectStatus) => {
    const status = selectStatus(getState());
    if (status === "pending" || status === "updating") return false;
    dispatch(actions.pendingAction());
    return true;
};

export const handleError = (dispatch, error, actions) => {
    const errorMessage = error.response?.status === 400 ? 400 : error.message;
    if (actions?.rejectedAction) {
        dispatch(actions.rejectedAction(errorMessage));
    } else {
        console.error("Action 'rejected' introuvable ou non définie !");
    }
};
