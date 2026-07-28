/**
 * Це НЕ окремий компонент — приклад того, як підключити AuthNavigation
 * до твого вже наявного components/Header/Header.tsx.
 *
 * 1) Додай імпорт вгорі файлу Header.tsx:
 *      import AuthNavigation from '../AuthNavigation/AuthNavigation';
 *
 * 2) У розмітці <ul> в кінець списку пунктів навігації додай:
 *      <AuthNavigation />
 *
 * Приклад (спрощено):
 */

// import Link from 'next/link';
// import AuthNavigation from '../AuthNavigation/AuthNavigation';
// import css from './Header.module.css';
//
// export default function Header() {
//   return (
//     <header className={css.header}>
//       <Link href="/" className={css.logo}>
//         NoteHub
//       </Link>
//       <nav>
//         <ul className={css.navigation}>
//           <li className={css.navigationItem}>
//             <Link href="/" className={css.navigationLink}>
//               Home
//             </Link>
//           </li>
//           <li className={css.navigationItem}>
//             <Link href="/notes/filter/All" className={css.navigationLink}>
//               Notes
//             </Link>
//           </li>
//           <AuthNavigation />
//         </ul>
//       </nav>
//     </header>
//   );
// }
