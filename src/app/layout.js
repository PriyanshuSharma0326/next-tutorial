export const metadata = {
    title: {
        default: 'Next.js Page',
        template: '%s | Powered by Next.js',
    },
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
                <header style={headerStyles}>
                    <p>Header</p>
                </header>
                {children}
                <footer style={footerStyles}>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
