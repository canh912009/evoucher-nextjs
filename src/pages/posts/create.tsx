import { PostDetailForm } from '@/components/PostDetailForm'
import { PostDetailSibar } from '@/components/PostDetailSibar'
import React from 'react'

const PostCreate = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailForm />
                </div>
                <div className="col-lg-4">
                    <PostDetailSibar />
                </div>
            </div>
        </div>

    )
}

export default PostCreate