import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"

const font = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'CarePulse',
	description:
		'A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn('min-h-screen font-sans bg-dark-300', font.variable)}>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}