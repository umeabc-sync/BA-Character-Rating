<p>
  <a href="./docs/README.en.md">English</a> | 
  繁體中文 | 
  <a href="./docs/README.zh-CN.md">简体中文</a> | 
</p>

# BA Character Rating - 蔚藍檔案角色評分

<p align="left">
  <a href="https://vuejs.org/"><img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square"></a>
  <a href="https://vitejs.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square"></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square"></a>
</p>

這是一個為手遊《蔚藍檔案》（Blue Archive）玩家設計的角色評分與資訊查詢整合網站。專案使用 Vue 3 和 Vite 建立，提供一個簡潔、快速且響應式的介面，幫助玩家快速查閱角色資料、評分、裝備與技能等資訊。網站資料來源為賽博夜貓攻略組角評資料（已徵得攻略組同意）。

**[➡️ 點此進入網站](https://yuuzi.dev/BA-Character-Rating/)**

![專案預覽圖](https://raw.githubusercontent.com/Yuuzi261/BA-Character-Rating/refs/heads/main/public/og_image.webp)

---

## ✨ 主要功能

*   **角色評分**：整合賽博夜貓攻略組角評資訊，提供更好的查詢體驗。
*   **多語言支援**：內建簡體中文（`zh-cn`）與繁體中文（`zh-tw`）語言切換。
*   **篩選與排序**：可依據學校、攻擊類型、防禦類型等多種條件篩選角色。
*   **響應式設計**：無論在桌面或行動裝置上，都能提供良好的瀏覽體驗。
*   **PWA 支援**：支援漸進式網路應用程式，可將網站「安裝」到桌面或主畫面，提供離線存取能力。

## 🛠️ 主要開發框架&套件

*   **前端框架**: [Vue 3](https://vuejs.org/) (Composition API)
*   **建置工具**: [Vite](https://vitejs.dev/)
*   **狀態管理**: [Pinia](https://pinia.vuejs.org/)
*   **程式碼風格**: [Prettier](https://prettier.io/)
*   **程式碼檢查**: [ESLint](https://eslint.org/)
*   **部署平台**: [CloudFlare](https://www.cloudflare.com/)

## 🚀 本地開發

請確認您的電腦已安裝 [Node.js](https://nodejs.org/)（建議版本 18.x 或以上）。

1.  **複製專案**
    ```bash
    git clone https://github.com/Yuuzi/BA-Character-Rating.git
    ```

2.  **進入專案目錄**
    ```bash
    cd BA-Character-Rating
    ```

3.  **安裝依賴**
    ```bash
    npm install
    ```

4.  **啟動開發伺服器**
    ```bash
    npm run dev
    ```
    啟動後，瀏覽器將自動打開 `http://localhost:5173`。

5.  **建置專案**
    若要建置用於生產環境的檔案，請執行：
    ```bash
    npm run build
    ```
    建置後的檔案會存放在 `dist` 目錄下。

### 專案腳本
 
| 指令 | 描述 |
| :--- | :--- |
| `npm install` | 安裝專案所有依賴。 |
| `npm run dev` | 啟動本地開發伺服器，支援熱重載。 |
| `npm run build` | 將專案打包至 dist 資料夾，並壓縮 JSON 檔案。 |
| `npm run preview` | 預覽打包後的成果。 |
| `npm run format` | 使用 Prettier 格式化所有程式碼。 |
| `npm run lint` | 使用 ESLint 檢查並修正程式碼風格問題。 |

## 📁 專案結構

```
BA-Character-Rating/
├── public/            # 公共資源，不會被 Vite 處理
├── src/
│   ├── assets/        # 圖片、字體、資料 JSON 等靜態資源
│   ├── components/    # 可重複使用的 Vue 元件
│   ├── composables/   # 可組合的函式 (Hooks)
│   ├── locales/       # i18n 語言檔案
│   ├── store/         # Pinia 狀態管理
│   ├── style/         # 全域樣式
│   ├── utils/         # 共用工具函數
│   ├── App.vue        # 主元件
│   └── main.js        # 應用程式進入點
├── .eslintrc.cjs      # ESLint 設定檔
├── package.json       # 專案依賴與腳本
└── vite.config.js     # Vite 設定檔
```

## 🤝 貢獻與協助

本專案非常歡迎社群的貢獻，不論是協助角評資料更新、提供建議或報告 Bug 等。

你可以透過以下方式協助我們：

*   在 [Issues](https://github.com/Yuuzi261/BA-Character-Rating/issues) 中提出問題及建議。
*   在 [Pull Request](https://github.com/Yuuzi261/BA-Character-Rating/pulls) 中提交缺失的角評資料或程式碼修改。

## 📄 授權

本專案採用 [MIT License](https://opensource.org/licenses/MIT) 授權。

## 🙏 致謝

*   感謝所有共同開發者。
*   感謝賽博夜貓攻略組提供的角評資料。
*   本站所有遊戲資料與圖片版權均歸原作者所有。
