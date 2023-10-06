import Link from 'next/link';
import { getServerSession } from 'next-auth/next';

import { authConfig } from '@/shared/config/auth/auth';

export default async function Profile() {
    const session = await getServerSession(authConfig);
    return (
        <div>
            profile
            <Link href="/profile/settings">Settings</Link>
        </div>
    );
}
