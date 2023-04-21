import { type } from 'os'
import React, { FormEvent, useEffect, useState } from 'react'
import api from '@/services/api'
import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

type FormLogin = {
    email: string,
    password: string
}

const initFormLogin: FormLogin = {
    email: '',
    password: ''
}

const Login = () => {
    const [formData, setFormData] = useState(initFormLogin);
    const router = useRouter()
    const errorString = router.query.error;

    useEffect(() => {
        console.log("errorString ", errorString);

        if (errorString) {
            alert("Login failed") //co the thay lib hỗ trợ notification khac đc
            window.history.pushState({}, document.title, "/login")
        }
    }, [errorString])

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
                // Cookies.set("token", data.token, {
                //     expires: 30
                // }) 

                router.push('/')
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
                            <a href="dang-ky.html">Đăng ký một tài khoản</a>
                            <button type="submit" className="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login