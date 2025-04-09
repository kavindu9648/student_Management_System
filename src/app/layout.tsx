import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Student Management System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
