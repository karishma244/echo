import { z } from "zod";
export declare const escalateConversation: import("ai").Tool<z.ZodOptional<z.ZodUnion<[z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, z.ZodNull]>>, "Missing thread ID" | "Conversation escalated to a human operator"> & {
    execute: (args: {} | null | undefined, options: import("ai").ToolExecutionOptions) => PromiseLike<"Missing thread ID" | "Conversation escalated to a human operator">;
};
//# sourceMappingURL=escalateConversation.d.ts.map