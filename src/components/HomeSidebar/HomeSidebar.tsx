import { PostType } from '@/pages'
import { useGlobalState } from '@/state'
import Link from 'next/link'
import React from 'react'
import PostItem from '../PostItem/PostItem'

type PropsType = {
    userPosts: PostType[]
}

const HomeSidebar: React.FC<PropsType> = (props) => {
    const [userInfo, setUserInfo] = useGlobalState("currentUser")

    function renderUserPosts() {
        let posts = props.userPosts
        if (posts.length === 0) return <p>Bạn chưa đang bài nào cả. Truy cập <Link href={'/posts/create'}>link</Link> để dăng bài</p>

        return posts.map((post) => <PostItem key={post.PID} post={post} />)
    }


    // console.log("\x1b[36m--- usePosts ---", props.userPosts);
    return (
        <aside className="ass1-aside">
            <div className="ass1-content-head__t">
                <div>Bài viết gần đây của bạn.</div>
            </div>
            {
                !userInfo
                    ?
                    <div>Vui lòng đăng nhập để xem nội dung này
                        <Link href="/login">Đăng nhập</Link>
                    </div>
                    :
                    renderUserPosts()

            }
        </aside>

    )
}

export default HomeSidebar