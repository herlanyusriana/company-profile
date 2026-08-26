import './globals.css';

export const metadata = {
	title: 'PT CJ Trading | Luxury Living & Spa Solutions',
	description: 'Curated wellness, spa, and luxury living products for homes, hospitality, and commercial spaces across Indonesia.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>{children}</body>
		</html>
	);
}
