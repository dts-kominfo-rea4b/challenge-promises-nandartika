const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  let data = await promiseTheaterIXX();
  data.push(...(await promiseTheaterVGC()));

  const filteredData = data.filter((it) => it.hasil == keyword);
  return filteredData.length;
};

module.exports = {
  promiseOutput,
};
