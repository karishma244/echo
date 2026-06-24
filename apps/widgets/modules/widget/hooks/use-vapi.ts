import Vapi from "@vapi-ai/web";
import { error } from "console";
import { useAtomValue } from "jotai";

import { useEffect,useState } from "react";
import { vapiSecretsAtom, widgetSettingsAtom } from "../atoms/widget-atoms";

interface TranscriptMessage{
    role:"user"|"assistant";
    text:string;
};

export const useVapi=()=>{
   const vapiSecrets=useAtomValue(vapiSecretsAtom);
   const widgetSettings=useAtomValue(widgetSettingsAtom);
    const[vapi,setVapi]=useState<Vapi  | null>(null);
     const[isConnected,setisConnected]=useState(false);
      const[isConnecting,setisConnecting]=useState(false);
       const[isSpeaking,setIsSpeaking]=useState(false);
       const[transcript,setTranscript]=useState<TranscriptMessage[]>([]);
       
       useEffect(()=>{
         if(!vapiSecrets){
            return;
         }
         console.log("Creating Vapi instance", vapiSecrets);
        //only for testing customers will provide their own api keys that s why not added in env file
        //they can create their own agents workflows and their phoen numbers assistants
         const vapiInstance=new Vapi(vapiSecrets.publicApiKey);
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

         
       },[vapiSecrets]);

     const startCall=()=>{
       console.log("vapiSecrets", vapiSecrets);
  console.log("assistantId", widgetSettings?.vapiSettings?.assistantId);
  console.log("vapi", vapi);
      if(!vapiSecrets || !widgetSettings?.vapiSettings?.assistantId){
         console.log("Missing data");
         return;
      }
        setisConnecting(true);


        if(vapi){
            //only for testing customers can provide their own build assistant ids this is how whitelabeling works
            vapi.start(widgetSettings.vapiSettings.assistantId);
        } else {
    console.log("Vapi instance null");
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