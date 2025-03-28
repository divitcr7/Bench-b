import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			abel: [
  				'Abel',
  				'sans-serif'
  			],
  			gilroy: [
  				'Gilroy',
  				'sans-serif'
  			]
  		},
  		height: {
  			headerBig: '4rem',
  			headerSmall: '3.5rem'
  		},
  		fontSize: {
  			h1Big: '5.75rem',
  			h1Small: '2.625rem',
  			h2Big: '4.875rem',
  			h2Small: '2rem',
  			h3Big: '2.25rem',
  			h3Small: '1.75rem',
  			h4Big: '1.75rem',
  			h4Small: '1.375rem',
  			h5Big: '1.375rem',
  			h5Small: '1.125rem',
  			h6Big: '1.125rem',
  			h6Small: '1rem',
  			body1Big: '1.125rem',
  			body1Small: '1.125rem',
  			body1BoltBig: '1.125rem',
  			body1BoltSmall: '1.125rem',
  			body2Big: '1rem',
  			body2Small: '1rem',
  			body2BoltBig: '1rem',
  			body2BoltSmall: '1rem',
  			smallBodyBig: '0.875rem',
  			smallBodySmall: '0.875rem',
  			overlineBig: '0.875rem',
  			overlineSmall: '0.875rem',
  			captionBig: '0.75rem',
  			captionSmall: '0.75rem',
  			menuBig: '4.25rem',
  			menuSmall: '2.5rem',
  			btnBig: '0.875rem',
  			btnSmall: '0.875rem'
  		},
  		lineHeight: {
  			h1Big: '5.75rem',
  			h1Small: '3.5rem',
  			h2Big: '6rem',
  			h2Small: '2.375rem',
  			h3Big: '2.875rem',
  			h3Small: '2rem',
  			h4Big: '2.375rem',
  			h4Small: '1.625rem',
  			h5Big: '1.875rem',
  			h5Small: '1.5625rem',
  			h6Big: '1.625rem',
  			h6Small: '1.25rem',
  			body1Big: '1.875rem',
  			body1Small: '1.875rem',
  			body1BoltBig: '1.875rem',
  			body1BoltSmall: '1.875rem',
  			body2Big: '1.75rem',
  			body2Small: '1.75rem',
  			body2BoltBig: '1.75rem',
  			body2BoltSmall: '1.75rem',
  			smallBodyBig: '1.5rem',
  			smallBodySmall: '1.5rem',
  			overlineBig: '1.5rem',
  			overlineSmall: '1.5rem',
  			captionBig: '0.875rem',
  			captionSmall: '0.875rem',
  			menuBig: '4.875rem',
  			menuSmall: '3.125rem',
  			btnBig: '1.75rem',
  			btnSmall: '1.75rem'
  		},
  		spacing: {
  			containerSideBig: '5rem',
  			containerSideSmall: '1rem',
  			eightyBig: '5rem',
  			eightySmall: '2rem',
  			fiftySixBig: '3.5rem',
  			fiftySixSmall: '1.5rem',
  			fortyEightBig: '2.4rem',
  			fortyEightSmall: '1.8rem',
  			fortyBig: '2rem',
  			fortySmall: '1.5rem',
  			thirtyTwoBig: '1.6rem',
  			thirtyTwoSmall: '1.2rem',
  			twentyFourBig: '1.2rem',
  			twentyFourSmall: '0.9rem',
  			sixteen: '1rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};

export default config;
