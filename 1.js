// let a = 'test/?id&user&pwd';
// let b = a.split('&')
// let d = ['1', 'user', 'pwd']
// let url = b.map((q, i) => `${q}=${d[i]}`)
// let f = url.join('&')



// console.log(f)



let urlMap = new Map();

urlMap.set("getPost", `test/post`)
urlMap.set("getList", `test/get?id`);
urlMap.set("getTest", `test/test?id&pwd&user`);

const getUrl = (api, query) => {
    let url = urlMap.get(api);
    if (typeof query === "string") url += `=${query}`;
    else if (typeof query === "object") {
        url = url
            .split("&")
            .map((q, i) => `${q}=${query[i]}`)
            .join("&");
    }
    return url;
};

console.log(getUrl('getPost'))
console.log(getUrl('getList', '123'))
console.log(getUrl('getTest', ['123', '456', '789']))