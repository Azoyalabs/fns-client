# @azoyalabs/fns-client

The Azoyalabs fns-client library provides a convenient way to interact with the Fetch Name Service smart contract on the Fetch.ai blockchain.

The library exposes two main functions for creating clients to query and interact with the smart contract: createQueryClient and createSigningClient.

## Installation
Install the library via your package manager of choice:

```shell
npm install @azoyalabs/fns-client
```
## Usage
You can use either a **SigningCosmWasmClient** to interact with the contract or a regular **CosmWasmClient** if you only need to read the contract's state.

```ts
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";

import {
  FetchNameSystemClient,
  FetchNameSystemQueryClient,
} from "@azoyalabs/fns-client";

```

### Creating a Query Client
The createQueryClient function allows you to create a read-only client to query the Fetch Name System smart contract. Here's how you can use it:

```typescript
const client = new CosmWasmClient("https://rpc-fetchhub.fetch.ai:443");
const network = "mainnet"; // or "testnet"
const queryClient = createQueryClient(client, network);
```
The createQueryClient function takes a CosmWasmClient instance and the network ("mainnet" or "testnet") as parameters and returns a FetchNameSystemQueryClient instance.

### Creating a Signing Client
The createSigningClient function enables you to create a client that can interact with the Fetch Name System smart contract by creating and sending CosmWasm messages. This client is also able to do everything the Query Client can.

Here's an example:

```ts
const client = new SigningCosmWasmClient("https://rpc-fetchhub.fetch.ai:443", signer);
const sender = "fetch1a....";
const network = "mainnet"; // or "testnet"

const signingClient = createSigningClient(client, sender, network);
```
The createSigningClient function takes a SigningCosmWasmClient instance, the sender address, and the network ("mainnet" or "testnet") as parameters. It returns a FetchNameSystemClient instance.

### Querying the Primary Domain
Retrieve the primary domain set by a user for their Fetch.ai address:

```ts
const userAddress = "fetch1b";

const response = await signingClient.getPrimary({ userAddress });
console.log(response); // "primary domain" || null if not set
```

More info is available on the [documentation](https://docs.azoyalabs.com/fetch-name-service/main).

##  Development
Most of the code contained in this repository is generated from the FNS smart contract.

Follow these steps to set up a development environment:

Clone the repository:
```shell
git clone https://github.com/Azoyalabs/fns-client.git
```
Install dependencies:
```shell
cd fns-client
npm install
```

We use vitest as our test runner.
You can run tests with the following command:
```shell
npm test
```

Submit a pull request with your changes.


## Known issues

## License
This library is released under the MIT License.