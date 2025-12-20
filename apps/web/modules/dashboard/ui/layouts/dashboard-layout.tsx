import { AuthGuard } from "@/modules/auth/ui/components/auth-guard"
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard"
import { SidebarProvider} from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
export const DashboardLayout= async({children}:{children:React.ReactNode}) => {
    const cookieStore= await cookies();
    //to collapse the sidebar or not and when we collapse backend should know
    const defaultOpen=cookieStore.get("sidebar_state")?.value==="true";
    return(
        <AuthGuard>
            <OrganizationGuard>
                <SidebarProvider defaultOpen={defaultOpen}>
                      <div className="flex h-screen w-screen overflow-hidden">
                <DashboardSidebar/>
                <main className="flex-1 h-full overflow-hidden">
               
        {children}
      
                </main>
              </div>
                </SidebarProvider>
            </OrganizationGuard>
        </AuthGuard>
    );
};

