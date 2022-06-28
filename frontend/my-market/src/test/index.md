### 这里记录一些测试相关的信息
### 随笔
### 漫谈


***
***





1： 关于jest

jest是Facebook开源的javascript测试框架，它集成了断言，JSDom，覆盖率报告等开发者需要的的测试工具。
对于前端测试框架，应该在性能，功能，易用性上都有不俗的表现。

jest是一个基于Node的运行器，也就是说始终运行在node环境中，而不是在真实的环境中，方便实际开发和迭代。

jest通过jsDom提供了window等浏览器全局对象，也只是真实浏览器行为的的近似值。对于jest而言，是用于逻辑和单元测试，并不对dom的行为进行测试。

对于create-react-app创建的项目。目前新版本都是集成jest的 (此项目就是react的最新版本18，ts也是最新版本)

当运行npm test时候， jest以watch的model启动，每次报错文件就会跑test 类似npm start重新编译代码一样。

2: 关于jest中的 snapshot

snapshot：把每次修改之后的代码形成快照。与上次的代码形成对比，若有修改部分，则会出现快照提示。(后续实际中在尝试snapshot)

3: 关于describe, it, expect, test

describe会形成一个作用域
it 断言
expect 期望
test 测试。类似与it