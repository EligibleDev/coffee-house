import HomeHeader from "@/components/homeHeader/homeHeader";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HomeHeader />
            {children}
        </>
    );
}
