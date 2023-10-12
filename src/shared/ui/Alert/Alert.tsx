import { ToastContainer } from 'react-toastify';

interface AlertProps {
    theme: string;
}

export const Alert = ({ theme }: AlertProps) => {
    const handleTheme = theme === 'app_light_theme' ? 'light' : 'dark';

    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={true}
            theme={handleTheme}
        />
    );
};
