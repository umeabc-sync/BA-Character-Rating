<p>
  <a href="./README.en.md">English</a> | 
  <a href="../README.md">繁體中文</a> | 
  简体中文 | 
</p>

# BA Character Rating - 蔚蓝档案角色评分

<p align="left">
  <a href="https://vuejs.org/"><img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square"></a>
  <a href="https://vitejs.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square"></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"></a>
</p>

这是一个为手游《蔚蓝档案》（Blue Archive）玩家设计的角色评分与信息查询整合网站。项目使用 Vue 3 和 Vite 构建，提供一个简洁、快速且响应式的界面，帮助玩家快速查阅角色数据、评分、装备与技能等信息。网站数据来源于赛博夜猫攻略组角评数据（已征得攻略组同意）。

**[➡️ 点此进入网站](https://ba-character-rating.pages.dev/)**

![项目预览图](https://raw.githubusercontent.com/Yuuzi261/BA-Character-Rating/refs/heads/main/public/og_image.webp)

---

## ✨ 主要功能

*   **角色评分**：整合赛博夜猫攻略组角评信息，提供更好的查询体验。
*   **多语言支持**：内置简体中文（`zh-cn`）与繁体中文（`zh-tw`）语言切换。
*   **筛选与排序**：可依据学校、攻击类型、防御类型等多种条件筛选角色。
*   **响应式设计**：无论在桌面或移动设备上，都能提供良好的浏览体验。
*   **PWA 支持**：支持渐进式网络应用，可将网站“安装”到桌面或主屏幕，提供更便捷的开启。

## 🛠️ 主要开发框架与套件

*   **前端框架**: [Vue 3](https://vuejs.org/) (Composition API)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **状态管理**: [Pinia](https://pinia.vuejs.org/)
*   **代码风格**: [Prettier](https://prettier.io/)
*   **代码检查**: [ESLint](https://eslint.org/)
*   **部署平台**: [CloudFlare](https://www.cloudflare.com/)

## 🚀 本地开发

请确认您的电脑已安装 [Node.js](https://nodejs.org/)（建议版本 18.x 或以上）。

1.  **克隆项目**
    ```bash
    git clone https://github.com/Yuuzi/BA-Character-Rating.git
    ```

2.  **进入项目目录**
    ```bash
    cd BA-Character-Rating
    ```

3.  **安装依赖**
    ```bash
    npm install
    ```

4.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    启动后，浏览器将自动打开 `http://localhost:5173`。

5.  **构建项目**
    若要构建用于生产环境的文件，请执行：
    ```bash
    npm run build
    ```
    构建后的文件会存放在 `dist` 目录下。

### 项目脚本
 
| 命令 | 描述 |
| :--- | :--- |
| `npm install` | 安装项目所有依赖。 |
| `npm run dev` | 启动本地开发服务器，支持热重载。 |
| `npm run build` | 将项目打包至 dist 文件夹，并压缩 JSON 文件。 |
| `npm run preview` | 预览打包后的成果。 |
| `npm run format` | 使用 Prettier 格式化所有代码。 |
| `npm run lint` | 使用 ESLint 检查并修正代码风格问题。 |
| `npm run analyze` | 执行打包分析，生成 `stats.html` 报告。 |

## 📁 项目结构

```
BA-Character-Rating/
├── public/            # 公共资源，不会被 Vite 处理
├── src/
│   ├── assets/        # ���片、字体、数据 JSON 等静态资源
│   ├── components/    # 可复用的 Vue 组件
│   ├── composables/   # 可组合的函数 (Hooks)
│   ├── locales/       # i18n 语言文件
│   ├── store/         # Pinia 状态管理
│   ├── style/         # 全局样式
│   ├── utils/         # 共享工具函数
│   ├── App.vue        # 主组件
│   └── main.js        # 应用程序入口点
├── .eslintrc.cjs      # ESLint 配置文件
├── package.json       # 项目依赖与脚本
└── vite.config.js     # Vite 配置文件
```

## 🤝 贡献与协助

本项目非常欢迎社区的贡献，不论是协助角评数据更新、提供建议或报告 Bug 等。

你可以通过以下方式协助我们：

*   在 [Issues](https://github.com/Yuuzi261/BA-Character-Rating/issues) 中提出问题及建议。
*   在 [Pull Request](https://github.com/Yuuzi261/BA-Character-Rating/pulls) 中提交缺失的角评数据或代码修改。

## 📄 授权

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 授权。

## 🙏 致谢

*   感谢所有共同开发者。
*   感谢赛博夜猫攻略组提供的角评数据。
*   本站所有游戏数据与图片版权均归原作者所有。
