export function getProfileNavItems(
    activePath: string,
    profile: any,
    role?: string | undefined,
) {
    const hrefArray = activePath.split('/');
    hrefArray.length === 5 ? hrefArray.splice(4, 1) : hrefArray;
    const link = hrefArray.join('/');

    const needUserAuth: any = [
        {
            path: `${link}/articles`,
            text: profile['articles'],
        },
        {
            path: `${link}/comments`,
            text: profile['comments'],
        },
        {
            path: `${link}/subscribers`,
            text: profile['subscribers'],
        },
    ];

    return [...needUserAuth];
}
