import api from "./api";

type RegisterData = {
    fullname: string;
    email: string;
    password: string;
    repassword: string;
};

const userService = {
    getUserById: async (userId: string) => {
        return api.callJson(`/member/member.php?userid=${userId}`)
    },
    register: async (data: RegisterData) => {
        return api.callJson(`/member/register.php`, data, 'POST')
    }
}

export default userService