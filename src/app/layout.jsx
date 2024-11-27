
import "./globals.css";
import Navbar from "./componants/Navbar";
// import NavbarMenu from '../navbar/page';





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
      {/* <NavbarMenu/> */}
            <Navbar/>
           {children} 
          
      </body>
    </html>
  );
}
