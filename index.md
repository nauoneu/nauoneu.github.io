---
layout: default
title: Index
---

# Python
- [WindowsでPython開発環境をつくる](./python-devenv-windows)
- [Azure Function App でコードを動かす](./python-azure-functions)

# Github Pages
- [Github PagesでWebサイトを作る](./github-pages-setup)
- [Jekyllのカスタマイズ](./github-pages-jekyll-customize)

# HTML/CSS基本
- [Webサイト制作の流れ](./webdev/webdev-overview)
- [コーディングの流れ](./webdev/webdev-coding-overview)
- [HTML](./webdev/webdev-html)
- [CSS](./webdev/webdev-css)
- [JavaScript](./webdev/webdev-js)

# HTML/CSSパーツサンプル
## [ヘッダー(ハンバーガーメニュー)](./webdev/parts/hamburger1/)
  - カバー写真がブラウザ画面100%表示
  - メニューをスライドイン
  - メニューは .hamburger-menu クラスのスタイル適用
  - .hamburger-menuは画面一杯(width: 100vw; height: calc(100vh - 5rem); //5remはヘッダー高さ)
  - それをブラウザ画面の右に100%移動させて隠す(transform: translateX(100%);)
  - アニメーションの時間は0.6秒(transition: all 0.6s;)、これはhoverかjavascriptで動かすときに有効な値
  - javascriptで .hamburger-menu-active をON/OFFしている(transform: translateX(0); /* 元の位置に戻す */)

## [ヘッダー(ハンバーガーメニュー2)](./webdev/parts/hamburger2/)
- ヘッダー上部固定（スクロールしても常に表示, position: sticky;）
- メニューをフェードイン

## [カルーセル](./webdev/parts/carousel1/)


