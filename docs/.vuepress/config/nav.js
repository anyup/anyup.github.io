module.exports = [
  { text: "首页", link: "/" },
  {
    text: "指南",
    link: "/pages/introduce/",
    items: [
      { text: "介绍", link: "/pages/introduce/" },
      { text: "安装", link: "/pages/install/" },
      { text: "快速上手", link: "/pages/quickstart/" },
      { text: "目录结构", link: "/pages/directory/" },
      { text: "开发工具", link: "/pages/devtools/" },
      { text: "注意事项", link: "/pages/feature/" },
      { text: "更新日志", link: "/pages/changelog/" },
    ],
  },
  {
    text: "组件",
    link: "/pages/layout/",
    items: [
      { text: "Layout - 布局", link: "/pages/components/layout/" },
      { text: "Button - 按钮", link: "/pages/components/button/" },
      { text: "Loading - 加载框", link: "/pages/components/loading/" },
      { text: "Loader - 加载ICON", link: "/pages/components/loader/" },
      { text: "Table - 表格", link: "/pages/components/table/" },
      { text: "Toast - 提示", link: "/pages/components/toast/" },
      { text: "WebView - 网页视图", link: "/pages/components/webview/" },
      { text: "Updater - 应用更新管理", link: "/pages/components/updater/" },
    ],
  },
  {
    text: "JS工具类",
    link: "/pages/js/checker/",
    items: [
      { text: "checker - 表单校验", link: "/pages/js/checker/" },
      {
        text: '工具类 - Class',
        items: [
          { text: 'Bluetooth - 蓝牙', link: '/pages/class/Bluetooth/' },
          { text: 'Http - 网络请求', link: '/pages/class/Http/' },
          { text: 'Mixin - 全局混入', link: '/pages/class/Mixin/' },
          { text: 'Optimize - 优化类', link: '/pages/class/Optimize/' },
          { text: 'Pager - 分页', link: '/pages/class/Pager/' },
          { text: 'Plus - 真机类', link: '/pages/class/Plus/' },
          { text: 'Store - 状态管理', link: '/pages/class/Store/' },
          { text: 'StoreModule - 状态管理', link: '/pages/class/StoreModule/' },
          { text: 'Tips - 提示', link: '/pages/class/Tips/' },
        ],
      }
    ],
  },
];
