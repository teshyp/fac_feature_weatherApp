import { TIMEOUT_SEC } from "./../js/config.js";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long - timed out after ${s} seconds`));
    }, s * 1000);
  });
};
