import { createContext, useState } from "react";
import Languages from 'features/language/language.types';

interface ILanguageContext {
    language: string;
    setLanguage: (l: Languages) => void;
}

export const defaultState = {
    language: 'ENGLISH',
    setLanguage: (language: Languages) => { }
}

export const LanguageContext = createContext<ILanguageContext>(defaultState);