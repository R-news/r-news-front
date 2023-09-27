import { LoginForm } from '@/features/AuthByCredentials';

interface pageProps {
    classname?: string;
}

export default function Auth(props: pageProps) {
    const { classname } = props;
    return (
        <main>
            <h1>SignIn</h1>
            <div>or</div>
            <LoginForm />
        </main>
    );
}
