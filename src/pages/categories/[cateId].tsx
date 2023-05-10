import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react'
import { PostType } from '@/pages';
import postService from '@/services/postService';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PostItem from '@/components/PostItem/PostItem';
import { useGlobalState } from '@/state';

type PropsType = {
    listPosts: PostType[]
}

const CategoryIdPage: NextPage<PropsType> = ({ listPosts }) => {
    const router = useRouter();
    const categoryId = router.query.cateId || null;
    const [categories] = useGlobalState("categories");

    useEffect(() => {
        if (!categoryId) router.push("/")
    }, [categoryId])

    const findText = useMemo(() => {
        const findObj = categories.find((obj) => obj.id === Number(categoryId));
        return findObj?.text
    }, [categories, categoryId]);

    return (
        <div className='cointainer'  >
            <div className='header-search'>
                <h3>Từ khóa tìm kiếm : <strong>{findText}</strong></h3>
                <p>Tìm đc <strong>{listPosts.length}</strong> kết quả </p>
            </div>
            <Masonry columnsCount={3} gutter='15px'
                className="ass1-section__wrap row ass1-section__isotope-init">
                {
                    listPosts.map((post) =>
                        <PostItem
                            key={post.PID}
                            post={post}
                        />)
                }
            </Masonry>

        </div>
    )
}

CategoryIdPage.getInitialProps = async (ctx: NextPageContext) => {
    const tagIndex = ctx.query.cateId as string || "4";
    const listPostsRes = await postService.getPostsByCategory({ tagIndex });

    return {
        listPosts: listPostsRes?.posts || []
    };
};

export default CategoryIdPage