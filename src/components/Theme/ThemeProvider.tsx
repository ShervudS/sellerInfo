// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setAppTheme } from '_redux/reducers/appReducer';
//
// export const themes = {
//     dark: 'dark',
//     light: 'light',
// };
//
// const getTheme = (): string => {
//     const theme = `${window?.localStorage?.getItem('theme')}`;
//     if (Object.values(themes).includes(theme)) return theme;
//
//     const userMedia = window.matchMedia('(prefers-color-scheme: light)');
//     if (userMedia.matches) return themes.light;
//
//     return themes.dark;
// };
//
// interface IThemeContext {
//     theme: string;
//     setTheme?: () => void;
// }
//
// export const ThemeContext = React.createContext<IThemeContext>({''});
//
// interface IThemeProvider {
//     children: React.ReactChildren | React.ReactNode;
// }
//
// export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
//     const [theme, setTheme] = useState<string>(getTheme);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         document.documentElement.dataset.theme = theme;
//         localStorage.setItem('theme', theme);
//         dispatch(setAppTheme(theme));
//     }, [theme]);
//
//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };