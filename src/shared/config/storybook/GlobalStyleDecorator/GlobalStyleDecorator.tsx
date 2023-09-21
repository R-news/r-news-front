import { ElementType } from 'react';

const GlobalStyleDecorator = (Story: ElementType) => {
    
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.add('app');
    bodyElement?.classList.add('storybook');
    return <Story />;
};

export default GlobalStyleDecorator;
