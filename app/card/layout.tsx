
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b text-xl font-semibold text-center">Layout for card</div>
      {children}
    </>
  );
}
