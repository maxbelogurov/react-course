export const metadata = {
  title: "My Restaurants",
  description: "First project on React + Next"
};
  
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}