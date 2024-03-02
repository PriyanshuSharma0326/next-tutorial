export const metadata = {
    title: {
        // Absolute will override default
        absolute: 'Blog',
        // Default value for title
        default: 'Blog Page'
    },
    description: 'Next.js based blog page',
}

function Blog() {
    return <h1>Blog Page!</h1>;
}

export default Blog;
