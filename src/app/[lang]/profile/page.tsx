import Link from 'next/link';
import { getServerSession } from 'next-auth/next';

import { authConfig } from '@/shared/config/auth/auth';

const Profile = async () => {
    const session = await getServerSession(authConfig);
    return (
        <div>
            profile
            <Link href="/profile/settings">Settings</Link>
        </div>
    );
};

export default Profile;
