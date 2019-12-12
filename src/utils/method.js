import { api_response } from "./common";
import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

export const APIhandler = options => {

  let params = {};
  // get url params
  const routeParams = options.reqUrl.split("?");
  if (routeParams.length > 1) {
    let paramsStr = routeParams[1];
    paramsStr.split("&").map(data => {
      let keyValue = data.split("=");
      params[keyValue[0]] = keyValue[1] ? keyValue[1] : "";
      return "";
    });
  }

  // name: "dsds"
  // limit: "20"
  // skip: "0"
  // sort: "-season"
  return new Promise(async (resolve, reject) => {
    console.log("params", params);
    if (api_response.length) {
      if (
        !isEmpty(params) &&
        (!isEmpty(params.name) || !isEmpty(params.sort))
      ) {
        let response = api_response.filter(
          item => item.name.toLowerCase() === params.name.toLowerCase()
        );
        if (params.sort.length) {
          const [sort, order] = params.sort.split(",");

          response = orderBy(response, sort, order);
        }
        return resolve({
          data: { totalElements: response.length, content: response }
        });
      } else {
        return resolve({
          data: { totalElements: api_response.length, content: api_response }
        });
      }
    } else {
      return reject({});
    }
  });
};
