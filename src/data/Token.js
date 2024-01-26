
const getToken = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
};

const setToken = (value) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    const cookiename="token";
    const cookieString = `${cookiename}=${value}; expires=${expirationDate.toUTCString()}`;
    document.cookie = cookieString;
};

export {getToken,setToken};