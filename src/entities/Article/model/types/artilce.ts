import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ArticleBlockType, ArticleType } from './enums';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleVideoBlock extends ArticleBlockBase {
    type: ArticleBlockType.VIDEO;
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock
    | ArticleVideoBlock;

interface ArticleUserInfo {
    _id: string;
    username: string;
    avatar: string;
}
export interface Article {
    _id: string;
    title: string;
    subtitle?: string;
    img?: string | StaticImport;
    views?: number;
    userId: ArticleUserInfo;
    type?: ArticleType;
    blocks: ArticleBlock[];
    comments?: Array<string>;
    likes: string[];
    createdAt?: string;
}

type ArticleWithoutCommnet = Omit<Article, 'comments'>;
export interface ArticleUpdate extends ArticleWithoutCommnet {
    comments: number;
    user: ArticleUserInfo;
}
