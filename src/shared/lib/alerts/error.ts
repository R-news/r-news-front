import { toast } from 'react-toastify';

export const errorMessage = (
    message = 'Oops, an unexpected error occurred',
) => {
    toast.error(message, {
        autoClose: 5000,
    });
};
