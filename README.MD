# TON API Wallet Interaction Script

This Node.js script allows you to interact with the **TON blockchain** API to retrieve wallet information and jetton balances using a seed phrase (mnemonics). 

The script asks the user for their seed phrase, derives the public key from it, and then fetches wallet information and jetton balances associated with that public key.

## Features

- **Retrieve Wallet Information**: Fetch wallet details associated with the provided seed phrase.
- **Get Jetton Balances**: Fetch jetton balances for the wallet associated with the seed phrase.
- **Easy to Use**: The script prompts the user for their seed phrase and handles all API requests automatically.

## Prerequisites

To use this script, you will need:
- **Node.js** installed on your system.
- **npm** (Node Package Manager) for managing dependencies.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/infalibless/ton-wallet-checker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ton-wallet-checker
    ```

3. Install the required dependencies:

    ```bash
    npm install axios readline
    ```

## Usage

1. Run the script:

    ```bash
    node main.js
    ```

2. You will be prompted to enter your **seed phrase** (mnemonic). Enter your seed phrase when prompted. For example:

    ```
    Seed -> your seed phrase here
    ```

3. The script will then fetch and display your wallet information and jetton balances.

## Code Explanation

- **User Input**: The script prompts the user for their seed phrase using the `readline` module.
- **Public Key Generation**: Although the script currently simulates public key generation (via `getkey` function), in practice, you would replace this with a library to derive the public key from the seed phrase.
- **API Requests**: It uses **axios** to make requests to the [TON API](https://keeper.tonapi.io/) for fetching wallet and jetton balance information.
- **Authorization**: The script uses a **Bearer token** for authentication in the API request headers. Make sure to replace the token with your own.

## Sample Output

When the script runs successfully, it will display the jetton balances of the specified wallet. Example:

```json
{
  "jettons": [
    {
      "symbol": "TON",
      "balance": "1000.0"
    },
    {
      "symbol": "USDT",
      "balance": "200.5"
    }
  ]
}
