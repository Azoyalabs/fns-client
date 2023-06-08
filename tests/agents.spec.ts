import { describe, expect, it } from "vitest";
import { Prefix, toggleAddress } from "../src/utils";

const AGENT_ADDRESS =
  "agent1qfpqn9jhvp9cg33f27q6jvmuv52dgyg9rfuu37rmxrletlqe7lewwjed5gy";
const FETCH_ADDRESS =
  "fetch1qfpqn9jhvp9cg33f27q6jvmuv52dgyg9rfuu37rmxrletlqe7lewwjex3tr";

describe("toggle between fetch and agent address", () => {
  it("converts an agent address to a regular fetch address", () => {
    const fetchAddress = toggleAddress(AGENT_ADDRESS);

    expect(fetchAddress.startsWith(Prefix.Fetch)).toBe(true);
    expect(fetchAddress).to.eq(FETCH_ADDRESS);
  });

  it("converts a fetch address to an agent address", () => {
    const agentAddress = toggleAddress(FETCH_ADDRESS);
    expect(agentAddress.startsWith(Prefix.Agent)).toBe(true);
    expect(agentAddress).to.eq(AGENT_ADDRESS);
  });
});
