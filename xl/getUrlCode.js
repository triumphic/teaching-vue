window.my = {};
my.getURLCode = function (){
        var search = location.search.length > 0 ? location.search.substring(1) : '',
              args = {},
              items = search.length ? search.split('&') : [],
              item = null,
              name = null,
              value = null,
              i = 0,
              len = items.length,
              data = '';
        for (i = 0; i < len; i++) {
          item = items[i].split('=');
          name = decodeURIComponent(item[0]);
          value = decodeURIComponent(item[1]);
          if (item.length) {args[name] = value }
        }
        return args;
    }
