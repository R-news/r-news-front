import { ThemeProvider } from '@/global/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

const ThemeDecorator = (storyFn: any) => (
    <ThemeProvider initialValue={Theme.DARK}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
