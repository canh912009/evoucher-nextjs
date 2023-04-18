import React from 'react'
import { PostCommentForm } from '../PostCommentForm'
import { PostCommentList } from '../PostCommentList'
import { PostItem } from '../PostItem'

const PostDetailContent = () => {
    return (
        <div className="ass1-section__list">

            <PostItem />

            <PostCommentForm />

            <PostCommentList />

        </div>
    )
}

export default PostDetailContent