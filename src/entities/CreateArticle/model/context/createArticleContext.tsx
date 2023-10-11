import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { RenderElement } from '../types/types';

export interface CreateArticleContextProps {
    renderElements: Array<RenderElement>;
    setRenderElements: Dispatch<
        SetStateAction<{ value: string; id: number | string }[]>
    >;
    onChangeDropDown: (e: string) => void;
    onDeleteElement: (idToDelete: number | string) => void;
}

const initialValue: CreateArticleContextProps = {
    renderElements: [],
    setRenderElements: () => {},
    onChangeDropDown: () => {},
    onDeleteElement: () => {},
};

export const CreateArticleContext =
    createContext<CreateArticleContextProps>(initialValue);

interface CreateArticleProviderProps {
    children: ReactNode;
}

const CreateArticleProvider = ({ children }: CreateArticleProviderProps) => {
    const [renderElements, setRenderElements] = useState<RenderElement[]>([]);
    const onChangeDropDown = useCallback(
        (e: string) => {
            setRenderElements((prev) => [
                ...prev,
                { value: e, id: renderElements.length },
            ]);
        },
        [renderElements.length],
    );

    const onDeleteElement = useCallback(
        (idToDelete: number | string) => {
            setRenderElements((prev) =>
                prev.filter((element) => element.id !== Number(idToDelete)),
            );

            console.log(renderElements);
        },
        [renderElements],
    );

    useEffect(() => {
        setRenderElements(renderElements);
    }, [renderElements]);

    const defaultProps = useMemo(
        () => ({
            renderElements,
            setRenderElements,
            onChangeDropDown,
            onDeleteElement,
        }),
        [onChangeDropDown, onDeleteElement, renderElements],
    );
    return (
        <CreateArticleContext.Provider value={defaultProps}>
            {children}
        </CreateArticleContext.Provider>
    );
};

export default CreateArticleProvider;
