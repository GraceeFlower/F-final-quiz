### 完成度：

- 完成"未分组"学员/讲师的获取，添加，删除；未完成学员分组

**Details:**

- \- 没有 autofocus

### 测试：

**Details:**

### 知识点：

**Details:**

- \+ sass 语法正确使用
- \+ ES6+ 解构语法使用正确
- \+ html 标签已经 css 使用合理

* \- 这里最好重新从后端获取一次数据
* \- traineeId 可以直接通过参数传进来使用，避免从 dom 上去拿数据
* \- 这里没有做异常处理，如果删除失败，前端数据自行更改是不合理的
* \- 删除之后也需要从后端获取一次数据
* \- 可以使用 section 更语义化的标签
* \- 这里可以提取一个公共组件，如 PersonnelItem 组件，在 trainerList 和 groupList 里面也可以共用
* \- 添加功能也可以提取一个公共组件，如 AddPersonnel，在 trainerList 可以共用
* \- 这里不需要加 async，这里本身返回就是一个 promise

### 工程实践：

**Details:**

- \+ 第一层组件划分合理
- \+ 小步提交
- \+ 提取 URL 常量

* \- 无用代码不要提交
* \- 因为没有提前公用组件导致大量重复代码
* \- 因为没有提前公用组件导致重复 CSS (eg .add-trainee-btn)
* \- 文件名命名不合适，这里也不只是是 get traineeList
* \- 文件名命名不合适，这里也不只是是 get trainerList

### 综合：

**Details:**
