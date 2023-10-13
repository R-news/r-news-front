export function getProfileNavItems(
    activePath: string,
    profile: any,
    role?: string | undefined,
) {
    const needUserAuth: any = [
        {
            path: `${activePath}/articles`,
            text: profile['articles'],
        },
        {
            path: `${activePath}/comments`,
            text: profile['comments'],
        },
        {
            path: `${activePath}/subscribers`,
            text: profile['subscribers'],
        },
    ];

    return [...needUserAuth];
}
