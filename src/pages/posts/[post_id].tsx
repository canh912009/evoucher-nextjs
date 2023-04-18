import { PostDetailContent } from '@/components/PostDetailContent'
import React from 'react'

const PostDetail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <PostDetailContent />
                </div>
                <div className="col-lg-4">
                </div>
            </div>
        </div>

    )
}

export default PostDetail