import jwt_decode from 'jwt-decode';


export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('jwt')) {
        const { exp } = jwt_decode(JSON.parse(localStorage.getItem('jwt')));
        if ((new Date()).getTime() <= exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.removeItem('expirationTime');
            return false;
        }
    } else return false;
}

export const userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('token'));
    const decoded = jwt_decode(jwt);
    return { ...decoded, token: jwt }
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
}