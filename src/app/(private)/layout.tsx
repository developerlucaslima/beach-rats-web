import { Header } from "@/components/header"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="container mx-auto flex-1 flex overflow-hidden">
        {children}
      </div>
    </>
  )
}
