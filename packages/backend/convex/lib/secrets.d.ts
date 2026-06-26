import { type GetSecretValueCommandOutput, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
export declare function createSecretsManagerClient(): SecretsManagerClient;
export declare function getSecretValue(secretName: string): Promise<GetSecretValueCommandOutput>;
export declare function upsertSecret(secretName: string, secretValue: Record<string, unknown>): Promise<void>;
export declare function parseSecretString<T = Record<string, unknown>>(secret: GetSecretValueCommandOutput): T | null;
//# sourceMappingURL=secrets.d.ts.map