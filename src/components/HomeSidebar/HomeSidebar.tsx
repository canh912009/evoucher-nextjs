import { useGlobalState } from '@/state'
import React from 'react'

const HomeSidebar = () => {
    const [userInfo, setUserInfo] = useGlobalState("currentUser")
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