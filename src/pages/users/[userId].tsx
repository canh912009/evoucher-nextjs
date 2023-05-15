import { NextPage, NextPageContext } from 'next'
import UserDetailInfo from '@/components/UserDetailInfo'
import UserDetailPost from '@/components/UserDetailPost'
import { TypeUser } from '@/state'
import React, { useEffect } from 'react'
import { PostType } from '@/pages';
import { getTokenSSR_CSR } from '@/helpers'
import postService from '@/services/postService'
import userService from '@/services/userService'
import { useAuthen } from '@/helpers/useAuthen'

type PropsType = {
    userDetailInfo: TypeUser | null;
    userDetailPost: PostType[];
}

const UserDetail: NextPage<PropsType> = (props) => {
    useAuthen()

    useEffect(() => {
        if (!props.userDetailInfo) {
            alert('User not found');
        }
    }, [props.userDetailInfo])
    return (
        <div className="container">
            <UserDetailInfo userDetailInfo={props.userDetailInfo} />
            <UserDetailPost userDetailPost={props.userDetailPost} />
        </div>
    )
}

UserDetail.getInitialProps = async (ctx: NextPageContext) => {
    console.log("\x1b[36m--- ctx.query ---", ctx.query.userId);

    const userId = ctx.query.userId as string
    let [token,] = getTokenSSR_CSR(ctx)

    const userPromise = userService.getUserById(userId)
    const postPromise = postService.getPostsByUserId(userId, token);

    const [userRes, postRes] = await Promise.all([userPromise, postPromise])

    return {
        userDetailInfo: userRes?.user || null,
        userDetailPost: postRes?.posts || []
    };
};

export default UserDetail 