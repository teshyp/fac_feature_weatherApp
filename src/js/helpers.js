// import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./../js/config.js";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long - timed out after ${s} seconds`));
    }, s * 1000);
  });
};

// export const getJSON = async function (url) {
//   try {
//     const fetchData = fetch(url);
//     const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
//     const data = await res.JSON();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     console.log(data);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
