import { PostType } from '@/pages';
import Link from 'next/link';
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import viLocale from 'dayjs/locale/vi'
import { hightlightText } from '@/helpers';

dayjs.extend(relativeTime)

type PropsType = {
    post: PostType;
    customClass?: string;
    isHightlight?: boolean;
    query?: string;
}

const PostItem: React.FC<PropsType> = ({ post, customClass, isHightlight, query }) => {
    const timeFomat = dayjs(post.time_added).locale(viLocale).fromNow();
    let classNameX: string = "ass1-section__item"

    if (customClass) classNameX = classNameX + " " + customClass

    function renderFullname() {
        if (isHightlight && query) {
            return hightlightText(post.fullname, query as string);
        }
        return post.fullname
    }

    function renderContent() {
        if (isHightlight && query) {
            return hightlightText(post.post_content, query as string);
        }
        return post.post_content
    }

    return (
        <div className={classNameX}>
            <div className="ass1-section">
                <div className="ass1-section__head">
                    <Link
                        href={`/users/${post.USERID}`}
                        className="ass1-section__avatar ass1-avatar">
                        <img src={post.profilepicture || "/images/avatar-02.png"} alt={post.fullname} /></Link>
                    <div>
                        {/* <Link href={`/users/${post.USERID}`} className="ass1-section__name">{renderFullname()}</Link> */}
                        <Link
                            href={`/users/${post.USERID}`}
                            className="ass1-section__name"
                            dangerouslySetInnerHTML={
                                { __html: renderFullname() }
                            }>
                        </Link>
                        <span className="ass1-section__passed">{timeFomat}</span>
                    </div>
                </div>
                <div className="ass1-section__content">
                    <p dangerouslySetInnerHTML={
                        { __html: renderContent() }
                    } />
                    <div className="ass1-section__image">
                        <Link
                            href={`/posts/${post.PID}`}>
                            <img src={post.url_image || "/images/microphone-1209816_1920.jpg"} alt={post.url_image} /></Link>
                    </div>
                </div>
                <div className="ass1-section__footer">
                    <Link href={`/posts/${post.PID}`} className="ass1-section__btn-comment ass1-btn-icon">
                        <i className="icon-Comment_Full" />
                        <span>{post.count || 0}</span>
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default PostItem