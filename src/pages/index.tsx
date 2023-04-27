import React, { useEffect } from 'react'
import { HomeSidebar } from "../components/HomeSidebar";
import { PostListItem } from "../components/PostListItem";
import { GetServerSideProps, NextPageContext } from "next";
import { InferGetServerSidePropsType } from "next";
import postService from '@/services/postService';
import { getTokenSSR_CSR } from '@/helpers';

export type PostType = {
    PID: string; //id cua bai viet
    USERID: string;
    fullname: string;
    profilepicture: string;
    url_image: string;
    post_content: string;
    time_added: string;
    status: string;
    count: string | null;
}

type HomeDataProps = {
    listPosts: PostType[];
    usePosts: PostType[]
}

const Home: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    // useEffect(() => {
    //     console.log("\x1b[36m--- listPosts ---", props.listPosts);
    //     console.log("\x1b[36m--- usePosts ---", props.usePosts);
    // }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8">
                    <PostListItem listPosts={props.listPosts} />
                </div>
                <div className="col-lg-4">
                    <HomeSidebar userPosts={props.usePosts} />
                </div>
            </div>
        </div>
    )
}

// getServerSideProps allways run on server side
export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {
    const ctx = context as unknown as NextPageContext;
    let [token, userToken] = getTokenSSR_CSR(ctx)

    const userId = userToken?.id;

    const listPostsPos = postService.getPostsPaging();
    const userPostsPos = postService.getPostsByUserId(userId as string, token);

    // Promise.all giúp chạy song song cả 2 lệnh gọi API trên, await từng thằng 1 mất tg chờ nhau
    const [listPostsRes, userPostsRes] = await Promise.all([listPostsPos, userPostsPos]);

    const props = {
        listPosts: listPostsRes?.posts || [],
        usePosts: userPostsRes?.posts || [],
    }

    return {
        props
    }
}

export default Home