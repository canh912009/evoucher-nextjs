import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { PostType } from '@/pages';
import postService from '@/services/postService';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PostItem from '@/components/PostItem/PostItem';

type PropsType = {
    listPosts: PostType[]
}

const SearchPage: NextPage<PropsType> = ({ listPosts }) => {
    const router = useRouter();
    const searchStr = router.query.q || '';  //Router.push(`/search?q=${queryStr}`);

    console.log("\x1b[36m--- serchposts ---", listPosts);

    useEffect(() => {
        if (!searchStr) {
            router.push("/")
        }
    }, [searchStr])

    return (
        <div className='cointainer'  >
            <div className='header-search'>
                <h3>Từ khóa tìm kiếm : <strong>{searchStr}</strong></h3>
                <p>Tìm đc <strong>{listPosts.length}</strong> kết quả </p>
            </div>
            <Masonry columnsCount={3} gutter='15px'
                className="ass1-section__wrap row ass1-section__isotope-init">
                {
                    listPosts.map((post) => <PostItem key={post.PID} post={post} /* customClass='col-lg-3' */ />)
                }
            </Masonry>

        </div>
    )
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
    const query = ctx.query.q || '';
    const listPostsRes = await postService.getPostsSearch(query as string);

    return {
        listPosts: listPostsRes?.posts || []
    };
};

export default SearchPage