import { ArticlesListWithButtons } from '@/PagesComposition/Home';
import { getDictionary } from '@/shared/config/i18n/dictionary';
import { PageParams } from '@/shared/types/pageParams';

interface HomePageProps {
    params: PageParams;
}

const Home = async ({ params }: HomePageProps) => {
    const { lang } = params;
    const { shared } = await getDictionary(lang);

    return (
        <>
            <ArticlesListWithButtons langData={shared} />
        </>
    );
};

export default Home;
