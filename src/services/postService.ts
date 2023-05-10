import api from "./api";

const postService = {
    getPostsPaging: async ({ pagesize = 5, currPage = 1 } = {}) => {
        const params = `pagesize=${pagesize}&currPage=${currPage}`
        const url = `/post/getListPagination.php?${params}`;

        return api.callJson(url)
    },

    getPostsByCategory: async ({ pagesize = 10, currPage = 1, tagIndex = '' } = {}) => {
        if (!tagIndex) return null

        const params = `pagesize=${pagesize}&currPage=${currPage}&tagIndex=${tagIndex}`
        const url = `/post/getListByCategory.php?${params}`;

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
        const url = `/post/search.php?query=${encodeURI(searchStr)}`;
        return api.callJson(url)
    },

    getCategory: async () => {
        const url = `/categories/index.php`;
        return api.callJson(url)
    },
}

export default postService