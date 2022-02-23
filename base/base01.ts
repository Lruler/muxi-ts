// let a: number = 7;
// let b: number = 13;

// function sum(x: number, y: number): number {
//     return x + y
// }

// console.log(sum(a, b));
// interface API {
//   getList: "aaa";
//   getBlog: "bbb";
// }


// let urlMap = new Map();

// urlMap.set("getList", `test/get?id`);
// urlMap.set("getTest", `test/test?id&pwd`);

// const getUrl = (api: string, query?: string[] | string): string => {
//   let url: string = urlMap.get(api);
//   if (typeof query === "string") url += `=${query}`;
//   else if (typeof query === "object") {
//     url = url
//       .split("&")
//       .map((q, i) => `${q}=${query[i]}`)
//       .join("&");
//   }
//   return url;
// };



export {};
