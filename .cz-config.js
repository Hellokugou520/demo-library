module.exports = {
  types: [
    { value: "✨ feat", name: "✨ feat:          新增特性" },
    { value: "🐛 fix", name: "🐛 fix:           修复bug" },
    { value: "📝 docs", name: "📝 docs:          修改文档" },
    { value: "💎 style", name: "💎 style:         代码格式" },
    { value: "🔨 refactor", name: "🔨 refactor:      代码重构" },
    { value: "🚀 perf", name: "🚀 perf:          性能优化" },
    { value: "📦 build", name: "📦 build:         变更项目构建或依赖" },
    { value: "⏪ revert", name: "⏪ revert:        代码回退" },
    { value: "🚨 test", name: "🚨 test:          添加测试" },
    { value: "🚧 WIP", name: "🚧 WIP:           开发中" },
  ],
  // 修改范围
  scopes: [],
  messages: {
    type: "请选择提交的类型；",
    customScope: "请选择修改范围",
    subject: "请简要描述提交（必填）",
    body: "请输入详细描述（可选）",
    footer: "请选择要关闭的issue(可选)",
    confirmCommit: "确认要使用以上信息提交?(y/n)",
  },
  skipQuestions: ["scope", "footer"],
  subjectLimit: 80,
};
