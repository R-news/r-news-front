import { ElementType } from 'react';

const GlobalStyleDecorator = (Story: ElementType) => {
    const root = document.documentElement;
    root.style.setProperty('--font-family-main', 'Montserrat, sans-serif');
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.add('app');
    bodyElement?.classList.add('storybook');
    return <Story />;
};

export default GlobalStyleDecorator;
