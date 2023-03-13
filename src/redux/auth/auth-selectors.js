export const selectUser = ({auth}) => auth.user.name;
export const selectIsLogin = ({auth}) => auth.isLogin;
export const selectToken = ({auth}) => auth.token;