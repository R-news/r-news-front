'use client';
import { useState } from 'react';

import { ArticleList } from '@/entities/Article';
import { BookmarksButton } from '@/features/BookmarksButton';
import { LikeBtn } from '@/features/LikeBtn';
import ThemeIconDeprecated from '@/shared/assets/icons/bookmark.svg';
import { PageParams } from '@/shared/types/pageParams';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';

interface HomePageProps {
    params: PageParams;
}

export default function Home({ params }: HomePageProps) {
    const { lang } = params;
    const [open, setopen] = useState(false);
    // console.log(typeof window === 'undefined' ? 'server' : 'client');

    return (
        <main>
            <Modal isOpen={open} onClose={() => setopen((prev) => !prev)}>
                <p>dfsfsffsrsfsfsdf</p>

                <p>dfsfsffsrsfsfsdf</p>
            </Modal>
            <Button onClick={() => setopen((prev) => !prev)}>Test</Button>
            <Icon Svg={ThemeIconDeprecated} />
            <ArticleList />
            <LikeBtn value="323" />
            <BookmarksButton value="323" />
        </main>
    );
}
