import { ArticlesListWithButtons } from '@/PagesComposition/Bookmarks';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';

export default async function Bookmarks({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { shared } = await getDictionary(lang);
    return (
        <>
            <ArticlesListWithButtons langData={shared} />
        </>
    );
}
