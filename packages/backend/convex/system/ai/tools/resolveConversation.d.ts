import { z } from "zod";
export declare const resolveConversation: import("ai").Tool<z.ZodOptional<z.ZodUnion<[z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, z.ZodNull]>>, "Conversation resolved" | "Missing thread ID"> & {
    execute: (args: {} | null | undefined, options: import("ai").ToolExecutionOptions) => PromiseLike<"Conversation resolved" | "Missing thread ID">;
};
//# sourceMappingURL=resolveConversation.d.ts.map