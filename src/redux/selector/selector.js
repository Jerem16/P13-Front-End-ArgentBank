export const selectAuth = (state) => state.users.isAuth;
export const selectIsLoading = (state) => state.users.isLoading;

export const selectStatus = (state) => state.users.status;

export const selectToken = (state) => state.users.token;

export const selectUserData = (state) => state.users.userData;
export const selectUserName = (state) => state.users.userData.userName;
export const selectFirstName = (state) => state.users.userData.firstName;
export const selectLastName = (state) => state.users.userData.lastName;

export const selectError = (state) => state.users.error;
