import { signup } from '@/app/signup/actions'
import { Button } from "@/components/ui/button";

export function SignUpForm() {
    return (
        <form action={signup}>
            <input name='name'/>
            <input name='email'/>
            <input name='password'/>

            <Button>Sign Up</Button>
        </form>
    )
}