import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WishListButton from '../components/WishListButton'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
         
        {children}
         <Footer />
         <WishListButton />
      </body>
    </html>
  );
}