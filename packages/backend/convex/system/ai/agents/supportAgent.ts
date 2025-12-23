import { groq } from "@ai-sdk/groq"; // Import the Groq provider
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";


export const supportAgent = new Agent(components.agent, {
  // Use 'llama-3.3-70b-versatile' on Groq—it is free and very powerful.
  chat: groq("llama-3.3-70b-versatile"), 
  instructions: `You are a customer support agent. Use "resolveConversation" tool when user
  expresses finalization of the conversation. Use "escalateConversation" tool when user expresses
  frustration,or requests a human explicitly.`,
  
});