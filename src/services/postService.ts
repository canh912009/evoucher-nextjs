import api from "./api";

const postService = {
    getPostsPaging: async ({ pagesize = 5, currPage = 1 } = {}) => {
        const params = `pagesize=${pagesize}&currPage=${currPage}`
        const url = `/post/getListPagination.php?${params}`;

        return api.callJson(url)
    },

    getPostsByUserId: async (userid: string, token: string) => {
        const url = `/post/getListPostUserID.php?userid=${userid}`;

        if (!userid || !token) return {
            status: 200,
            posts: []
        }

        return api.callApi(url, {
            token // token: token
        })
    },

    getPostsSearch: async (searchStr: string) => {
        const url = `/post/search.php?query=${searchStr}`;
        return api.callJson(url)
    },
}

export default postService