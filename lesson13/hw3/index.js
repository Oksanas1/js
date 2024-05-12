export const getAdults = obj =>
  Object.fromEntries(Object.entries(obj).filter(item => item[1] > 17));

export const withdraw = (clients, balances, client, amount) => {
  const indexUser = clients.indexOf(client);

  if (balances[indexUser] >= amount) {
    // eslint-disable-next-line no-param-reassign
    balances[indexUser] -= amount;

    return balances[indexUser];
  }

  return -1;
};

export const reverseArray = arr => (Array.isArray(arr) ? arr.reverse() : null);
