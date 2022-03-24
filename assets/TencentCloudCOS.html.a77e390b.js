import{r as c,o,c as n,a as t,b as a,F as s,e,d as r}from"./app.b1e805c8.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l={},_=e("\u817E\u8BAF\u4E91\u5BF9\u8C61\u50A8\u5B58COS\u7533\u8BF7\u5730\u5740\uFF1A"),b={href:"https://cloud.tencent.com/product/cos",target:"_blank",rel:"noopener noreferrer"},g=e("https://cloud.tencent.com/product/cos"),h=r('<p>\u7533\u8BF7\u4E86\u817E\u8BAF\u4E91\u5BF9\u8C61\u50A8\u5B58COS\u4EE5\u540E\uFF0C\u8FDB\u5165\u5BF9\u8C61\u50A8\u5B58\u63A7\u5236\u53F0\uFF0C\u7136\u540E\u70B9\u51FB\u50A8\u5B58\u6876\u5217\u8868\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://box.kancloud.cn/d3610ed7180e487057e448c4ddfe37d7_381x289.png" alt="COS-01"></p><p>\u7136\u540E\u70B9\u51FB\u521B\u5EFA\u50A8\u5B58\u6876</p><p><img src="https://box.kancloud.cn/b9a302455a816618428787d545626564_730x434.png" alt="COS-02"></p><p>\u6CE8\u610F\u8BBF\u95EE\u6743\u9650\u9700\u8981\u9009\u62E9\u516C\u6709\u8BFB\u79C1\u6709\u5199</p><p>\u521B\u5EFA\u6210\u529F\u540E\u6211\u4EEC\u5148\u6682\u653E\uFF0C\u9F20\u6807\u60AC\u6D6E\u53F3\u4E0A\u89D2\u7684\u6635\u79F0\uFF0C\u70B9\u51FB\u8BBF\u95EE\u7BA1\u7406\u3002</p><p><img src="https://box.kancloud.cn/8db43e2f8a448a6f3c0550c1d9c5b1a3_220x324.png" alt="COS-03"></p><p>\u7136\u540E\u4F1A\u5728\u5DE6\u4FA7\u5BFC\u822A\u680F\u770B\u5230\u201C\u4E91API\u5BC6\u94A5\u201D -&gt; \u201CAPI\u5BC6\u94A5\u7BA1\u7406\u201D\uFF0C\u70B9\u51FB\u8FDB\u53BB\u3002</p><p><img src="https://box.kancloud.cn/581ef65f148b3eb7e48bc6b464c28fa5_313x451.png" alt="COS-04"></p><p>\u8FDB\u53BB\u540E\u4F1A\u6709\u4E00\u4E2A\u9AD8\u98CE\u9669\u63D0\u793A\uFF0C\u8BF7\u9009\u62E9\u7EE7\u7EED\u4F7F\u7528\uFF0C\u7136\u540E\u4F60\u4F1A\u770B\u5230\u4F60\u7684API\u5BC6\u94A5(\u5982\u679C\u6CA1\u6709\u8BF7\u65B0\u5EFA)\uFF0C\u70B9\u51FB\u663E\u793A\u83B7\u53D6SecretKey\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://box.kancloud.cn/7667f123449022daf0611ef0da6ab267_964x302.png" alt="COS-05"></p><p>\u83B7\u53D6\u5230\u540E\u8BF7\u590D\u5236\u4FDD\u5B58\u4E0B\u6765\u3002</p><p>\u7136\u540E\u6211\u4EEC\u5728\u56DE\u5230\u50A8\u5B58\u6876\u5217\u8868\uFF0C\u70B9\u51FB\u8FDB\u5165\u4F60\u521A\u521A\u521B\u5EFA\u7684\u50A8\u5B58\u6876\uFF0C\u518D\u70B9\u51FB\u201C\u57DF\u540D\u7BA1\u7406\u201D\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><blockquote><p>\u8FD9\u5F20\u56FE\u7247\u662F\u540E\u8865\u7684\uFF0C\u56E0\u4E3A\u539F\u4F5C\u8005\u5E76\u6CA1\u6709\u5728\u6B64\u5904\u9644\u56FE <img src="https://img.cdn.chs.pub/2022/03/04/9f2b250866493.png" alt="COS-06"></p></blockquote><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u5728\u6253\u5F00Lsky Pro\u540E\u53F0\u7BA1\u7406-&gt;\u50A8\u5B58\u7B56\u7565-&gt;\u817E\u8BAF\u4E91COS</p><p>\u586B\u5199\u914D\u7F6E\u5982\u56FE\uFF1A</p><p><img src="https://box.kancloud.cn/61c05e35917e5427d5000cb3117766ea_873x503.png" alt="COS-07"></p><p>\u5982\u679C\u4F60\u7ED1\u5B9A\u4E86\u81EA\u5B9A\u4E49\u57DF\u540D\uFF0C\u8FD9\u91CC\u7684CDN\u52A0\u901F\u57DF\u540D\u8BF7\u586B\u5199\u4F60\u7ED1\u5B9A\u7684\u57DF\u540D\uFF0C\u5982\u679C\u4E0D\u52A0\u8BBF\u95EE\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u662Fhttp\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u57DF\u540D\u524D\u52A0\u4E0A\u534F\u8BAE\uFF0C\u4F8B\u5982\uFF1Ahttps://\u57DF\u540D\u3002(https\u524D\u63D0\u6761\u4EF6\u662F\u4F60\u7684\u57DF\u540D\u6B63\u786E\u7684\u914D\u7F6E\u4E86SSL\u8BC1\u4E66)</p><p>\u586B\u5199\u5B8C\u6BD5\u540E\u70B9\u51FB\u4FDD\u5B58\u5373\u53EF\u3002</p>',19);function m(f,i){const p=c("ExternalLinkIcon");return o(),n(s,null,[t("p",null,[_,t("a",b,[g,a(p)])]),h],64)}var S=d(l,[["render",m]]);export{S as default};
