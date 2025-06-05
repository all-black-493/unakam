import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { Footer } from "@/components/Footer";
import { NotificationBell } from "@/components/NotificationBell";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function GroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="flex flex-1">
                <AppSidebar />
                <main className="flex-1 flex flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
                    <div className="sticky top-0 z-10 bg-background/15 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 flex items-center border-b">
                        <SidebarTrigger className="md:hidden" />
                        <div className="ml-auto flex items-center gap-3">
                            <NotificationBell />
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="flex-1">
                        {children}
                    </div>
                    <div className="border-t">
                        <Footer />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}