import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import {
  FetchNameSystemClient,
  FetchNameSystemQueryClient,
} from "./FetchNameSystemContract";
import {
  MAINNET_CONTRACT_ADDRESS,
  TESTNET_CONTRACT_ADDRESS,
} from "./config";

/**
 * Creates a Read-Only client to query the Fetch Name System smart contract
 * @param {CosmWasmClient} client
 * @param {"mainnet" | "testnet"} network
 * @returns {FetchNameSystemQueryClient} fetchNameSystemQueryClient
 */
export function createQueryClient(
  client: CosmWasmClient,
  network: "mainnet" | "testnet"
) {
  const contractAddress =
    network === "mainnet" ? MAINNET_CONTRACT_ADDRESS : TESTNET_CONTRACT_ADDRESS;

  return new FetchNameSystemQueryClient(client, contractAddress);
}

/**
 * Creates a client to interact with the Fetch Name System smart contract. This client is able to create and send messages.
 * @param {CosmWasmClient} client
 * @param {"mainnet" | "testnet"} network
 * @returns {FetchNameSystemQueryClient} fetchNameSystemQueryClient
 */
export function createSigningClient(
  client: SigningCosmWasmClient,
  sender: string,
  network: "mainnet" | "testnet"
) {
  const contractAddress =
    network === "mainnet" ? MAINNET_CONTRACT_ADDRESS : TESTNET_CONTRACT_ADDRESS;

  return new FetchNameSystemClient(client, sender, contractAddress);
}
