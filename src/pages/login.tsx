import { type } from 'os'
import React, { useState } from 'react'

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

    // function handleOnChange(key: string) {
    //     return (evt: any) => {
    //         setFormData({
    //             ...formData, // lấy data từ cả form cũ và chỉ sửa data Email dưới
    //             [key]: evt.target.value
    //         });
    //     }
    // }

    const handleOnChange = (key: string) => (evt: any) => {  //function return a function , t.tự hàm trên
        setFormData({
            ...formData, // lấy data từ cả form cũ và chỉ sửa data Email dưới
            [key]: evt.target.value
        });
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <a href="index.html" className="ass1-logo">ZendVn Meme</a>
            </div>
            <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <input
                            value={formData.email}
                            onChange={handleOnChange('email')}
                            type="text" className="form-control" placeholder="Email" required />
                        <input
                            value={formData.password}
                            onChange={handleOnChange('password')}
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