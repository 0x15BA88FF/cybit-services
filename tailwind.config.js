module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
            },
            backgroundImage: {
                'gradient-background': 'var(--gradient-background)',
                'gradient-secondary': 'var(--gradient-secondary)',
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-hero': 'var(--gradient-hero)',
            },
        },
    },
    plugins: [],
};
