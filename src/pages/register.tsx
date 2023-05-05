import Button from '@/components/Button';
import { handleError } from '@/helpers'
import { useNotAuthen } from '@/helpers/useAuthen';
import userService from '@/services/userService';
import { useGlobalState } from '@/state';
import Cookies from 'js-cookie';
import Link from 'next/link';
import router from 'next/router';
import React, { FormEvent, useMemo } from 'react'
import { useState } from 'react'

type RegisterData = {
    fullname: {
        value: string;
        error: string;
    };
    email: {
        value: string;
        error: string;
    };
    password: {
        value: string;
        error: string;
    };
    repassword: {
        value: string;
        error: string;
    };
};

const initRegisterData: RegisterData = {
    fullname: {
        value: '',
        error: '',
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
    useNotAuthen()

    const [registerData, setRegisterData] = useState(initRegisterData)
    const [, setToken] = useGlobalState('token')
    const [, setCurrentUser] = useGlobalState('currentUser')
    const [loading, setLoading] = useState(false);

    const isvalidate: boolean = useMemo(() => {
        for (let key in registerData) {
            if (initRegisterData.hasOwnProperty(key)) {
                const error: string = (registerData as any)[key].error
                if (error !== '') return false
            }
        }
        return true
    }, [registerData])

    const onChangeData = (key: string) => (evt: any) => {
        const value = evt.target.value
        const error = handleError(key, value, registerData.password.value)

        setRegisterData({
            ...registerData,
            [key]: {
                value,
                error
            }
        })
    }

    function handleRegister(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (loading) return

        if (!isvalidate) {
            alert('Du lieu nhap vao khong hop le')
            return
        }
        const email = registerData.email.value
        const fullname = registerData.fullname.value
        const password = registerData.password.value
        const repassword = registerData.repassword.value

        const data = { email, fullname, password, repassword }

        setLoading(true)
        userService.register(data)
            .then(
                res => {
                    if (res.status === 200) {
                        // alert('Register sucsess')
                        setToken(res.token)
                        setCurrentUser(res.user)
                        Cookies.set("token", res.token, { expires: 30 })
                        // router.push('/') //ko can vi useNotAuthen() da lang nghe reong useEffect r
                    } else {
                        alert(res.error)
                    }
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <Link href="/" className="ass1-logo">ZendVn Meme</Link>
            </div>
            <div className="ass1-login__content">
                <p>Đăng ký một tài khoản</p>
                <div className="ass1-login__form">
                    <form action="#" onSubmit={handleRegister}>
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
                            <Link href="/login">Đăng nhập</Link>
                            <Button type="submit" className="ass1-btn" isLoading={loading}>Đăng ký</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register

