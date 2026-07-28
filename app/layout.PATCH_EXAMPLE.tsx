/**
 * Приклад того, як обгорнути застосунок у app/layout.tsx компонентом AuthProvider.
 * AuthProvider має бути ВСЕРЕДИНІ TanStackProvider і обгортати header, modal, children, footer.
 */

// import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
// import AuthProvider from '@/components/AuthProvider/AuthProvider';
// import Header from '@/components/Header/Header';
// import Footer from '@/components/Footer/Footer';
//
// export default function RootLayout({
//   children,
//   modal,
// }: {
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <TanStackProvider>
//           <AuthProvider>
//             <Header />
//             {modal}
//             {children}
//             <Footer />
//           </AuthProvider>
//         </TanStackProvider>
//       </body>
//     </html>
//   );
// }
