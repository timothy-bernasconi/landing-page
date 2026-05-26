import Header from "./components/Header";
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="color-scheme" content="only light" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet" />
        <title> Le stud x Agir </title> 
        
      </head>
    
      <body>
     {/* <Header/> */}
        <main>
            
          {children}
      
        </main>

        <Footer/>
   
       
      </body>
    </html>
  );
}