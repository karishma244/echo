"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "./layouts/auth-layout";
import { OrgSelectionView } from "./layouts/views/org-selection-view";

export const OrganizationGuard=({children}:{children:React.ReactNode;})=>{
    const{organization}=useOrganization();

    if(!organization){
        return(
            <AuthLayout>
                <OrgSelectionView/>
                <p>Create an Organization!!</p>
            </AuthLayout>
        )
    }
    return(
     <>
     {children}
      </>
    );
};