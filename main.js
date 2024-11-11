const axios = require('axios');
const readline = require('readline');
console.log("enjoy your life")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('seed -> ', async (mnemonicsInput) => {
  const mnemonics = mnemonicsInput.split(' ');

  async function getkey(mnemonics) {
    return 'your_generated_public_key_here';
  }

  const headers = {
    'User-Agent': "okhttp/4.9.2",
    'Accept-Encoding': "gzip",
    'Content-Type': "application/json",
    'Authorization': "Bearer AF77F5JNEUSNXPQAAAAMDXXG7RBQ3IRP6PC2HTHL4KYRWMZYOUQGDEKYFDKBETZ6FDVZJBI",
    'Cache-Control': "no-cache"
  };

  try {
    const pk = await getkey(mnemonics);
    const walletr = await axios.get(`https://keeper.tonapi.io/v2/pubkeys/${pk}/wallets`, { headers });
    const account = walletr.data.accounts[0];
    const address = account.address;

    const tonr = await axios.get(`https://keeper.tonapi.io/v2/accounts/${address}/jettons`, { headers });
    console.log(tonr.data);
  } catch (error) { console.error(error); }
  rl.close();
});
