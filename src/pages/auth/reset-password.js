import React, { useState } from 'react';
import './reset-password.css'; 

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Logique de réinitialisation du mot de passe ici
        // Par exemple, une simple validation du formulaire
        if (email) {
            setMessage("تم إرسال تعليمات إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");
        } else {
            setMessage("من فضلك أدخل بريدك الإلكتروني.");
        }
    };

    return (
        <div className="reset-container">
            <div className="reset-form-box">
                <h1>إعادة تعيين كلمة المرور</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="البريد الإلكتروني"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">إرسال</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;
