import React, { useState } from 'react';
import { PostItem } from '../PostItem';
import { PostType } from '@/pages';
import postService from '@/services/postService';
import Button from '../Button';

type PropsType = {
    listPosts: PostType[]
}

const pagesize = 3;

const PostListItem: React.FC<PropsType> = (props) => {
    const [listPosts, setListPosts] = useState(props.listPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function handleLoadMore(): void {
        if (loading) return

        setLoading(true)
        postService
            .getPostsPaging({ pagesize, currPage: currentPage + 1 })
            .then(res => {
                if (res.status === 200) {
                    const newPosts = res.posts || [];
                    setListPosts([
                        ...listPosts,
                        ...newPosts
                    ])
                    setCurrentPage(currentPage => currentPage + 1)
                }
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className="ass1-section__list">
            {
                listPosts.map((post) => <PostItem key={post.PID} post={post} />)
            }

            <Button
                isLoading={loading}
                onClick={handleLoadMore}
                className="load-more ass1-btn"><span>Xem thêm</span></Button>
        </div>
    )
}

export default PostListItem