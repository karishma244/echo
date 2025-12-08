import Vapi from "@vapi-ai/web";
import { error } from "console";

import { useEffect,useState } from "react";

interface TranscriptMessage{
    role:"user"|"assistant";
    text:string;
};

export const useVapi=()=>{
    const[vapi,setVapi]=useState<Vapi  | null>(null);
     const[isConnected,setisConnected]=useState(false);
      const[isConnecting,setisConnecting]=useState(false);
       const[isSpeaking,setIsSpeaking]=useState(false);
       const[transcript,setTranscript]=useState<TranscriptMessage[]>([]);
       
       useEffect(()=>{
        //only for testing customers will provide their own api keys that s why not added in env file
        //they can create their own agents workflows and their phoen numbers assistants
         const vapiInstance=new Vapi("173868ce-f15a-4622-a9b4-9e65629e09cc");
         setVapi(vapiInstance);

         vapiInstance.on("call-start",()=>{
            setisConnected(true);
            setisConnecting(false);
            setTranscript([]);
         });
           vapiInstance.on("call-end",()=>{
            setisConnected(false);
            setisConnecting(false);
            setIsSpeaking(false);
         });
         vapiInstance.on("speech-start",()=>{
            setIsSpeaking(true);
         });
         vapiInstance.on("speech-end",()=>{
            setIsSpeaking(false);
         });

         vapiInstance.on("error",(error)=>{
            console.log(error,"VAPI_ERROR");
            setisConnecting(false);
         });

         vapiInstance.on("message",(message) => {
            if(message.type==="transcript" && message.transcriptType==="final"){
                setTranscript((prev)=>[
                    ...prev,
                    {
                        role:message.role==="user"? "user":"assistant",
                        text:message.transcript,
                    }
                ]);
            }
         });

         return()=>{
            vapiInstance?.stop();
         }

         
       },[]);
     const startCall=()=>{
        setisConnecting(true);
        if(vapi){
            //only for testing customers can provide their own build assistant ids this is how whitelabeling works
            vapi.start("673f399c-b12e-482e-a4b4-c64c6ea20b20");
        }
     }
      const endCall=()=>{
        if(vapi){
            vapi.stop();
        }
      };
      return{
        isSpeaking,
        isConnecting,
        isConnected,
        transcript,
        startCall,
        endCall,
      }
};