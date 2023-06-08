import { fromBech32, toBech32 } from "@cosmjs/encoding";

export enum Prefix {
  Fetch = "fetch",
  Agent = "agent",
  Invalid = "invalid",
}

export function toggleAddress(input: string): string {
  let outputPrefix: Prefix = Prefix.Invalid;
  if (input.startsWith(Prefix.Fetch)) {
    outputPrefix = Prefix.Agent;
  } else {
    if (input.startsWith(Prefix.Agent)) {
      outputPrefix = Prefix.Fetch;
    }
  }

  if (outputPrefix === Prefix.Invalid) {
    throw new Error(`Invalid prefix for address: ${input}`);
  }

  const parsed = fromBech32(input, 65);

  return toBech32(outputPrefix, parsed.data, 65);
}
