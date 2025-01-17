import type { Config } from "tailwindcss";

export default {
    darkMode:'selector',
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		
		transitionDuration:{
			'3000': '3000ms',
		},
		backgroundColor: {
			'bg-gradient': 'radial-gradient(at 42% 65%, #202040 0px, transparent 50%), radial-gradient(at 33% 15%, #202060 0px, transparent 50%), radial-gradient(at 32% 21%, #602080 0px, transparent 50%), radial-gradient(at 30% 97%, #b030b0 0px, transparent 50%), #202040',
			'dot': 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
			'conic': "conic-gradient(red, orange, yellow, green, blue)",
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
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'hero-in': {
				'0%' : {
					opacity: '0',
				},
				'50%' : {
					opacity: '1',
				},
				'100%' : {
					opacity: '0',
				}
			},
			'blob-move': {
				'0%, 100%': { transform: 'translateY(-50%) translateX(-10%) scale(1)' },
				'50%': { transform: 'translateY(-10px) scale(1.5)' },
			},
			'blob-move-random': {
				'0%': { transform: 'translate(0,0) scale(1)' },
				'25%': { transform: 'translate(-100px, 10px) scale(1.1)' },
				'50%': { transform: 'translate(-10px, 100px) scale(0.95)' },
				'60%': { transform: 'translate(-80px, 10px) scale(1.2)' },
				'100%': { transform: 'translate(0, 0) scale(1)' },
			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'hero-in': 'hero-in 2s ease-out',
			'blob-move': 'blob-move 5s ease-in-out infinite',
			'blob-move-random': 'blob-move-random 6s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
