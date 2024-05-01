---
layout: default
title: Web Development
---

# Basics
- [Webサイト制作の流れ](./webdev-overview)
- [コーディングの流れ](./webdev-coding-overview)
- [HTML](./webdev-html)
- [CSS](./webdev-css)
- [JavaScript](./webdev-js)

# [Parts](./webdev/parts/)
- [ヘッダー(ハンバーガーメニュー)](./parts/hamburger1/)
  - カバー写真がブラウザ画面100%表示
  - ハンバーガーメニューをスライドイン
    - ハンバーガーメニューは .hamburger-menu クラスのスタイル適用
    - .hamburger-menuはブラウザ横幅一杯(width: 100vw;)、縦幅一杯(height: calc(100vh - 5rem); /* 5remはヘッダー高さ */)
    - それをブラウザ画面の右に100%移動させて隠す(transform: translateX(100%);)
    - アニメーションの時間は0.6秒(transition: all 0.6s;)、これはhoverかjavascriptで動かすときに有効な値
    - javascriptで .hamburger-menu-active をON/OFFしている(transform: translateX(0); /* 元の位置に戻す */)

- [ヘッダー(ハンバーガーメニュー2)](./parts/hamburger2/)
  - ヘッダー上部固定（スクロールしても常に表示, position: sticky;）
  - ハンバーガーメニューフェードイン

- [ヘッダー(ハンバーガーメニュー3)](./parts/hamburger3/)

