// import React from 'react';
// import classNames from 'classnames';
// import { Icon } from '_ui/Icon';
// import { ThemeContext, themes } from '_components/Theme/ThemeProvider';
// import styles from './style.module.scss';
//
// interface ISwitcher {
//     value: string;
//     onChange: React.MouseEventHandler<HTMLButtonElement>;
// }
//
// const Switcher: React.FC<ISwitcher> = ({ value, onChange }) => {
//     const buttonClass = classNames(styles.button, {
//         [styles.dark]: value === 'dark',
//         [styles.light]: value === 'light',
//     });
//
//     return (
//         <button
//             className={buttonClass}
//             type="button"
//             onClick={onChange}
//             aria-label={'theme toggle'}
//         >
//             <Icon name={'theme'} />
//         </button>
//     );
// };
//
// export const ThemeSwitcher: React.FC = () => (
//     <ThemeContext.Consumer>
//         {({ theme, setTheme }) => {
//             const toggleTheme = () => {
//                 if (theme === themes.light) setTheme(themes.dark);
//                 if (theme === themes.dark) setTheme(themes.light);
//             };
//             return <Switcher onChange={toggleTheme} value={theme} />;
//         }}
//     </ThemeContext.Consumer>
// );
