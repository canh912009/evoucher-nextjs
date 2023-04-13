import React/* , { useEffect, useState } */ from 'react'
import { NextPage, NextPageContext, } from 'next';

const BASE_URL: string = "http://apiluc.zendvn.com/api"

type PostType = {
    PID: string;
    post_content: string
}

type PropsType = {
    posts: PostType[]
}

const GetIntialProps: NextPage<PropsType> = (props) => {

    return (
        <div className='cointainer'>
            <h1>Demo list GetIntialProps</h1>
            <ul>
                {
                    props.posts.map((post) => {
                        return <li key={post.PID}>{post.PID}  {post.post_content}</li>
                    })
                }
            </ul>
        </div>
    )
}

GetIntialProps.getInitialProps = async (context: NextPageContext) => {
    const response = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1');
    const data = await response.json();

    return {
        posts: data.posts
    }
}

export default GetIntialProps;
