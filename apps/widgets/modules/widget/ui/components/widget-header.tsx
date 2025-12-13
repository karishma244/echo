import { cn } from "@workspace/ui/lib/utils";

export const WidgetHeader=({
    children,
    classname,
}:{
 children:React.ReactNode;
 classname?:string;
})=>{
   return(
    <header className={cn("bg-gradient-to-b from-rpimary to-[#0b63f3] -4 text-primary-foreground",
        classname,
    )}
    >
     {children}
    </header>
   );
};