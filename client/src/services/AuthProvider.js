import AuthService from '@/API/AuthService';

export default async function(context) {
    const { token } = context.req.cookies;
    const response = await AuthService.auth(token);
    let isAuth = false;
    //console.log(response);
    if(response?.data) {
        if(!response.data?.error) {
            return {isAuth: true, user: response.data.user};
        }
    }
    
    return {isAuth: false, user: []};
}