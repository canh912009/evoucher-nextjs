import { PostType } from '@/pages'
import { useGlobalState } from '@/state'
import React from 'react'

type PropsType = {
    userPosts: PostType[]
}

const HomeSidebar: React.FC<PropsType> = (props) => {
    const [userInfo, setUserInfo] = useGlobalState("currentUser")


    console.log("\x1b[36m--- usePosts ---", props.userPosts);
    return (
        <aside className="ass1-aside">
            <div className="ass1-content-head__t">
                <div>Bài viết gần đây của bạn.</div>
            </div>
            {
                !userInfo
                    ?
                    <div>Vui lòng đăng nhập để xem nội dung này
                        <a href="#">Đăng nhập</a>
                    </div>
                    :
                    <div>xem nội dung gần đây
                    </div>

            }
        </aside>

    )
}

export default HomeSidebar