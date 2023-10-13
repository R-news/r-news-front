import { redirect } from 'next/navigation';

export default async function User({ children }: any) {
    if (children) {
        redirect('/');
    }
}
