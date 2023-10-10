import { useState } from 'react';

export const useGetCreateArticles = () => {
    const [renderElements, setRenderElements] = useState([]);
    const onChangeDropDown = (e: string) => {
        setRenderElements((prev) => [...prev, e]);
    };

    return { renderElements, setRenderElements, onChangeDropDown };
};
