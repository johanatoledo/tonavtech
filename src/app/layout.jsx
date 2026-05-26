import './global.css';
import Providers from './Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'TonavTech - Soluciones de Software IA a Medida',
  description: 'Desarrollo de software y soluciones tecnológicas IA a medida para potenciar tu negocio. Transformamos tus ideas en aplicaciones web innovadoras y eficientes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased selection:bg-primary/30">
        <Providers>
         <Navbar />
           <main className="transition-colors duration-300 bg-white dark:diagonal-gradient-pro min-h-screen pt-20">
            {children}
           </main>
         <Footer />
        </Providers>
      </body>
    </html>
  );
}