// export default function({children}: { React.ReactNode }){
//   return <div className="border-b text-center font-semibold text-xl p-3">
//     Banner for every page starting with signin
//   </div>
//   {children}
// }


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b text-xl font-semibold text-center">Banner for each auth pages</div>
      {children}
    </>
  );
}
