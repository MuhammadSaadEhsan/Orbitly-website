import { myAxios, privateAxios } from "./helper";

export const singUp = (user) => {
    return myAxios
    .post('/register',user)
    .then((response) => response.data);
};


export const loginUser = (user) => {
    return myAxios
    .post('/login',user)
    .then((response) => response.data);
}


export const fetchUserName = async (userId) => {
    try {
        const response = await privateAxios.get(`/api/users/${userId}`);
        return response.data.name;
    } catch (error) {
        console.error(`Error fetching username for userId ${userId}:`, error);
        return 'Unknown';
    }
};