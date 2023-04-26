import { type } from 'os'
import React, { FormEvent, useEffect, useState } from 'react'
import api from '@/services/api'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobalState } from '@/state'
import { useNotAuthen } from '@/helpers/useAuthen'

type FormLogin = {
    email: string,
    password: string
}

const initFormLogin: FormLogin = {
    email: '',
    password: ''
}

const Login = (props: any) => {
    useNotAuthen()

    const router = useRouter()
    const [formData, setFormData] = useState(initFormLogin);
    const [token, setToken] = useGlobalState("token")
    const [userInfo, setCurrentUser] = useGlobalState("currentUser")

    useEffect(() => {
        console.log("userInfo Login page : ", userInfo);
    }, [userInfo])
    useEffect(() => {
        console.log("token Login page : ", token);
    }, [token])

    // console.log("\x1b[36m--- Props Login COmponent ---", props);


    // function handleOnChange(key: string) {
    //     return (evt: any) => {
    //         setFormData({
    //             ...formData, // lấy data từ cả form cũ và chỉ sửa data Email dưới
    //             [key]: evt.target.value
    //         });
    //     }
    // }

    // const handleOnChange = (key: string) => (evt: any) => {  //function return a function , t.tự hàm trên
    //     setFormData({
    //         ...formData, // lấy data từ cả form cũ và chỉ sửa data Email dưới
    //         [key]: evt.target.value
    //     });
    // }

    function handleSubmit(event: any): void {
        event.preventDefault();
        // console.log("formData", formData);
        // api.callJson("/member/login.php", formData, "POST")
        //     .then(
        //         data => {
        //             console.log("data", data);
        //             // show loading
        //             // get Token --> setup to cookie
        //             // login ok --> router.push('/') : home page
        //         }
        //     )

        fetch('/api/login', {
            body: JSON.stringify(formData),
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log("data ====", data);
                // set set Cookie client side
                // Cookies.set("token", data.token, {expires: 30})  

                if (data.status === 200) {
                    setToken(data.token)
                    setCurrentUser(data.user)
                    router.push('/')
                } else {
                    // router.push('/login')
                    alert(data.error ? data.error : "Login failed")
                }
            })

    }

    function handleOnChange(key: string): React.ChangeEventHandler<HTMLInputElement> | undefined {
        return (evt: any) => {
            setFormData({
                ...formData, // lấy data từ cả form cũ và chỉ sửa data Email dưới
                [key]: evt.target.value
            });
        }
    }

    function handleSubmitForm(event: any) {
        event.preventDefault()
        console.log("run handleSubmitForm");
        const target = event.target

        //B1. Valadation form data : email , pass nhập đúng định dạng...


        //B2. gọi hàm submit của form
        target.submit()

    }

    return (
        <div className="ass1-login">

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: 'rgb(241, 242, 243)', display: 'block' }} width="51px" height="51px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(30 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(60 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(90 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(120 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(150 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(180 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(210 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(240 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(270 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(300 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(330 50 50)">
                    <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                    </rect>
                </g>
            </svg>


            <div className="ass1-login__logo">
                <a href="index.html" className="ass1-logo">ZendVn Meme</a>
            </div>
            <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form action="#" onSubmit={handleSubmit}>
                        {/* <form action="/api/login" method='POST' onSubmit={handleSubmitForm}> */}
                        <input
                            value={formData.email}
                            onChange={handleOnChange('email')}

                            // name='email'
                            type="text" className="form-control" placeholder="Email" required />
                        <input
                            value={formData.password}
                            onChange={handleOnChange('password')}

                            // name='password'
                            type="password" className="form-control" placeholder="Mật khẩu" required />
                        <div className="ass1-login__send">
                            <Link href="/register">Đăng ký một tài khoản</Link>
                            <button type="submit" className="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login