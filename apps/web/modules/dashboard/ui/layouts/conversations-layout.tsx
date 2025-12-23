import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ConversationsPanel } from "../components/conversations-panel";

export const ConversationsLayout=({
    children
}:{children:React.ReactNode;})=>{
    return (
         <div className="h-full w-full">
        <ResizablePanelGroup className=" w-full h-full " direction="horizontal">
            <ResizablePanel defaultSize={30} maxSize={30} minSize={20} className="h-full border-r">
                 
       <ConversationsPanel/>
       
            </ResizablePanel>
           <ResizableHandle/>
           <ResizablePanel className="h-full w-full" defaultSize={70}>
            
            {children}
         
           </ResizablePanel>
        </ResizablePanelGroup>
          </div>
    );
};