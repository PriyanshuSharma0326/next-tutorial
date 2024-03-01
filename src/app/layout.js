export const metadata = {
    title: 'Next.js',
    description: 'Next.js tutorial',
}

export const headerStyles = {
    backgroundColor: 'lightblue',
    padding: '1rem',
};
  
export const footerStyles = {
    backgroundColor: 'ghostwhite',
    padding: '1rem',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header style={{
                    backgroundColor: 'lightblue',
                    padding: '1rem'
                }}>
                    <p>Header</p>
                </header>
                {children}
                <footer style={{
                    backgroundColor: 'ghostwhite',
                    padding: '1rem'
                }}>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
