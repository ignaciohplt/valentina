import '../styles/globals.css';

export const metadata = {
  title: 'Cotizador Publicidad',
  description: 'App para cotizar publicaciones, reels e historias',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}