# 文少前端工具包 wenhao-utils-package

> 文少提供的功能函数库，欢迎补充！

## 使用方式:

### step1 下载工具包

```bash
# 名称是你前面指定的库的名称
npm install wenhao-utils-package
```

### step2-1 在网页中引用工具包

```html
<script src="./node_modules/wenhao-utils-package/dist/index.js"></script>
<script>
  whutils.testUtils();
</script>
```

### step2-2 模块化项目中引用并使用

```js
// 使用ESM引入
import { testUtils } from "wenhao-utils-package";
testUtils(); //控制台打印内容：wenhao-utils-package成功引入！

// 使用commonjs引入
const { testUtils } = require("wenhao-utils-package");
testUtils(); //控制台打印内容：wenhao-utils-package成功引入！
```
