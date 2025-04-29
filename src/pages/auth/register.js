import React, { useState } from 'react';
import './register.css';  // تأكد من تضمين الـ CSS

const SignUpLogInForm = () => {
    const [isActive, setIsActive] = useState(false);

    // إدارة التبديل بين التسجيل وتسجيل الدخول
    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`}>
            {/* Formulaire de Connexion */}
            <div className="form-box login">
                <form>
                    <h1>تسجيل الدخول</h1>
                    <div className="input-box">
                        <input type="text" placeholder="اسم المستخدم" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="كلمة المرور" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="forgot-link">
                        {/* Lien pour réinitialiser le mot de passe */}
                        <a href="/reset-password" className="reset-link">
                            هل نسيت كلمة المرور؟
                        </a>
                    </div>
                    <button type="submit" className="btn">تسجيل الدخول</button>
                </form>
            </div>

            {/* Formulaire d'Enregistrement */}
            <div className="form-box register">
                <form>
                    <h1>التسجيل</h1>
                    <div className="input-box">
                        <input type="text" placeholder="اسم المستخدم" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="البريد الإلكتروني" required />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="كلمة المرور" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="تأكيد كلمة المرور " required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button type="submit" className="btn">تسجيل</button>
                </form>
            </div>

            {/* Boîte de bascule */}
            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>مرحباً، أهلاً بك!</h1>
                    <p>ليس لديك حساب؟</p>
                    <button className="btn register-btn" onClick={handleRegisterClick}>تسجيل</button>
                </div>

                <div className="toggle-panel toggle-right">
                    <h1>مرحباً بك مرة أخرى!</h1>
                    <p>هل لديك حساب؟</p>
                    <button className="btn login-btn" onClick={handleLoginClick}>تسجيل الدخول</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpLogInForm;
