import { useState, } from "react";
import { LanguageContext, defaultState } from './LanguageContext'

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
    const [language, setLanguage] = useState(defaultState.language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
