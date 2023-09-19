import { getDictionary } from '@/shared/config/i18n/dictionary';
import { Locale } from '@/shared/config/i18n/i18n';

const Subscriptions = async ({
    params: { lang },
}: {
    params: { lang: Locale };
}) => {
    const { bookmarksPage } = await getDictionary(lang);
    return <div>{bookmarksPage.subscription}</div>;
};

export default Subscriptions;
