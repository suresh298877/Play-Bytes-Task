import { Button } from '@mui/material';
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

function LowerPart() {
    const [passwordType, setPasswordType] = useState("password")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState({ username: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        if (usernameError || passwordError) {
            setErrors({ username: usernameError, password: passwordError });
        } else {
            setErrors({ username: "", password: "" });
            navigate("/questions")
            // Proceed with your login logic here
        }
    }

    const validateUsername = (value) => {
        if (!value) {
            return "Username cannot be empty.";
        }
        if (!/^[a-zA-Z]+$/.test(value)) {
            return "Username can only contain alphabetic characters.";
        }
        return "";
    };

    const validatePassword = (value) => {
        const lengthRequirement = value.length >= 8;
        const uppercaseRequirement = /[A-Z]/.test(value);
        const numberRequirement = /[0-9]/.test(value);
        const specialCharRequirement = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (!lengthRequirement) {
            return "Password must be at least 8 characters long.";
        }
        if (!uppercaseRequirement) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!numberRequirement) {
            return "Password must contain at least one number.";
        }
        if (!specialCharRequirement) {
            return "Password must contain at least one special character.";
        }
        return "";
    };


    return (
        <div className='h-[50%]'>
            <div className='text-center text-2xl font-semibold font-roboto text-[#2A4D76] mt-2'>Join the Fun</div>
            <form>
                <div className='text-center'>
                    <input name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' type='text' className='w-[80vw] md:max-w-[50%] h-[7vh] rounded-3xl pl-6 border m-2 mt-3 focus:border-[#4592EC] focus:border border-[#4592EC]' />
                </div>
                <div className='text-center'>
                    <input name='password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder='Password' type={passwordType} className='relative left-[13px] w-[80vw] md:max-w-[50%] h-[7vh] rounded-3xl pl-6 border m-2 focus:border-[#4592EC] focus:border border-[#4592EC]' />
                    <button onClick={(e) => {
                        e.preventDefault()
                        if (passwordType == 'text') {
                            setPasswordType('password')
                        }
                        else {
                            setPasswordType('text')
                        }
                    }}>
                        <VisibilityIcon sx={{ color: '#4592EC' }} className='relative right-[40px] bottom-[4px]' />
                    </button>
                </div>
                <div className='text-center'>
                    {errors.username && <span className='block text-[#FF3333]' >{errors.username}</span>}
                    {errors.password && <span className='block text-[#FF3333]'>{errors.password}</span>}
                </div>
                <div className='text-center mt-2'>
                    <Button onClick={handleSubmit} type='submit' className='bg-[#4592EC] w-[105px]' variant="contained">login</Button>
                </div>
            </form>
        </div>
    )
}

export default LowerPart;
