import api from "./api";

const userService = {
    getUserById: async (userId: string) => {
        api.callJson(`/member/member.php?userid=${userId}`)
    }
}

export default userService