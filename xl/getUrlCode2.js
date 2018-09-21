function parseQueryString(url) {
         var urlObj = {};
         var reg = /([^?=&]+)=([^?=&]+)/g;
         url.replace(reg, ($0, $1, $2) => {
             urlObj[$1] = decodeURIComponent($2);
        })
        return urlObj;
}
