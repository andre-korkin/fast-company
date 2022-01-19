import React, { useState } from 'react'
import LoginForm from '../components/page/loginForm'
import RegisterForm from '../components/page/registerForm'
import { useParams } from 'react-router-dom'


const LogIn = () => {
    const { reg } = useParams()
    const [formType, setFormType] = useState(reg === 'register' ? reg : 'login')

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow p-4'>
                    {formType === 'register'
                        ? <>
                            <RegisterForm />
                            <div className='mt-4'>Есть аккаунт? <a role='button' onClick={toggleFormType} className='primary'>Войдите</a></div>
                        </>
                        : <>
                            <LoginForm />
                            <div className='mt-4'>Нет аккаунта? <a role='button' onClick={toggleFormType} className='primary'>Зарегистрируйтесь</a></div>
                        </>}
                </div>
            </div>
        </div>
    )


    function toggleFormType () {
        setFormType(formType === 'register' ? 'login' : 'register')
    }
}

export default LogIn
