"use client"

import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { register } from "@/lib/action";

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter

    useEffect(()=>{
        state?.success && router.push('/login')
    }, [state?.success, router])

    return ( 
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="confirm password" name="confirmPassword" />
            <button>Register</button>
            {state?.error}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    )
}
export default RegisterForm;