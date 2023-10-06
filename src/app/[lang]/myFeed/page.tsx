import { getServerSession } from 'next-auth/next';

import { authConfig } from '@/shared/config/auth/auth';

export default async function Myfeed() {
    const session = await getServerSession(authConfig);
    const isAuth = session;
    return <div>{isAuth ? 'My feed' : 'Not auth'}</div>;
}
