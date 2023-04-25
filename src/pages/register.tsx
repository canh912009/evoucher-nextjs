import React from 'react'
import { useState } from 'react'

const initRegisterData = {
    fullname: {
        value: '',
        error: 'Truong bat buoc',
    },
    email: {
        value: '',
        error: '',
    },
    password: {
        value: '',
        error: '',
    },
    repassword: {
        value: '',
        error: '',
    },
}

const Register = () => {
    const [registerData, setRegisterData] = useState(initRegisterData)

    const onChangeData = (key: string) => (evt: any) => {
        const value = evt.target.value
        const error = ''
        console.log("key.", key, "value.", value);

        // handle error

        setRegisterData({
            ...registerData,
            [key]: {
                value,
                error
            }
        })
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <a href="/register" className="ass1-logo">ZendVn Meme</a>
            </div>
            <div className="ass1-login__content">
                <p>Đăng ký một tài khoản</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <div className="form-group">
                            <input
                                value={registerData.fullname.value}
                                onChange={onChangeData('fullname')}
                                type="text" className="form-control" placeholder="Tên hiển thị" required />
                            {registerData.fullname.error && <small className="form-text text-danger">{registerData.fullname.error} </small>}
                        </div>

                        <div className="form-group">
                            <input
                                value={registerData.email.value}
                                onChange={onChangeData('email')}
                                type="email" className="form-control" placeholder="Email" required />
                            {registerData.email.error && <small className="form-text text-danger">{registerData.email.error} </small>}
                        </div>

                        <div className="form-group">
                            <input
                                value={registerData.password.value}
                                onChange={onChangeData('password')}
                                type="password" className="form-control" placeholder="Mật khẩu" required />
                            {registerData.password.error && <small className="form-text text-danger">{registerData.password.error} </small>}
                        </div>

                        <div className="form-group">
                            <input
                                value={registerData.repassword.value}
                                onChange={onChangeData('repassword')}
                                type="password" className="form-control" placeholder="Nhập lại mật khẩu" required />
                            {registerData.repassword.error && <small className="form-text text-danger">{registerData.repassword.error}</small>}
                        </div>

                        <div className="ass1-login__send">
                            <a href="dang-nhap.html">Đăng nhập</a>
                            <button type="submit" className="ass1-btn">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register