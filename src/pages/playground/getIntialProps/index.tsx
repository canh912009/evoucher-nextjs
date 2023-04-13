import React, { useEffect, useState } from 'react'

const BASE_URL: string = "http://apiluc.zendvn.com/api"

const GetIntialProps = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        // CSR , toàn bộ sữ liệu có đc sau khi render --> lần đầu tiên ko lấy đc dữ liệu phía server
        fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1')
            .then(async (response) => {
                const data = await response.json();
                setPosts(data.posts)
                console.log(data.posts)
            })
    }, []);

    return (
        <div className='cointainer'>
            <h1>Demo list GetIntialProps</h1>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.PID}>{post.PID}  {post.post_content}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default GetIntialProps