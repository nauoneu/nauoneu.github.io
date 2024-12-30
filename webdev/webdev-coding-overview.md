---
title: Web Development
---

<!-- omit in toc -->
# コーディングの流れ

- [HTMLのベース](#htmlのベース)
  - [最小HTMLの生成](#最小htmlの生成)
  - [外部リソース(Font,CSS)の参照](#外部リソースfontcssの参照)
  - [JSファイルの参照](#jsファイルの参照)
  - [HTMLの大枠](#htmlの大枠)
- [CSSのベース](#cssのベース)
  - [スタイルシートの大枠を作る](#スタイルシートの大枠を作る)
  - [ページ全体のスタイル](#ページ全体のスタイル)
- [ヘッダー](#ヘッダー)
  - [例 - ハンバーガーメニュー](#例---ハンバーガーメニュー)
    - [HTML](#html)
    - [CSS](#css)
- [カバー](#カバー)
- [フッター](#フッター)

# HTMLのベース
## 最小HTMLの生成
VS Codeで `!<tab>` とすれば生成される。(Emmet)<br>
以下のようなベースを作る。
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Google検索一覧に表示されるタイトル</title>
  <meta name="description" content="Google検索一覧に表示される文章">

</head>

<body>

</body>
</html>
```

## 外部リソース(Font,CSS)の参照
```
<head>

<!--- snip --->

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">

  <!-- リセットCSS -->
  <link rel="stylesheet" href="https://unpkg.com/ress@4.0.0/dist/ress.min.css">

  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

  <!-- Style -->
  <link rel="stylesheet" href="./css/style.css">

<!--- snip --->

</head>
```

## JSファイルの参照
bodyの最後に書く
```
<body>

<!--- snip --->

  <script src="./js/main.js"></script>
</body>
</html>
```

## HTMLの大枠
作成するサイトのセクションごとにブロックを作って全体像をつくる。
```
<body>
  <!-- ヘッダー -->
  <header class="header">
  </header>

  <!-- メイン -->
  <main class="main">

    <!-- カバー -->
    <div class="cover">
    </div>

    <!-- セクション1 -->
    <section class="section-1">
    </section>

    <!-- セクション2 -->
    <section class="section-2">
    </section>

  </main>

  <!-- フッター -->
  <footer class="footer">
  </footer>

</body>
```

# CSSのベース
## スタイルシートの大枠を作る
HTMLの構造に合わせてスタイルシートの大枠を作る。
```
@charset "UTF-8";

/* ページ全体のスタイル
------------------------------------------ */

/* 部品（使いまわず共通パーツ）
------------------------------------------ */

/* ヘッダー
------------------------------------------ */

/* カバー
------------------------------------------ */

/* セクション1
------------------------------------------ */

/* セクション2
------------------------------------------ */

/* フッター
------------------------------------------ */

```

## ページ全体のスタイル

- body共通のフォントはデザインカンプで基準になっているものを確認（一番よくつかわれていそうなもの）
- その他全体に共通するスタイル（画像は横幅一杯、リスト先頭に丸は付けない、など）
  
```
/* ページ全体のスタイル
------------------------------------------ */
body {
  font-family: "Noto Sans JP", sans-serif;
  line-height: 1.75;
  color: #333;
}

a {
  color: #333;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}

li {
  list-style: none;
}

```

# ヘッダー
## 例 - ハンバーガーメニュー
### HTML
- ロゴ画像（ヘッダー左端に配置）
- ハンバーガーボタン（ヘッダー右端に配置）
- ハンバーガーメニュー
  - リスト。表示領域の外に配置してボタンを押したら出てくるようにする
  - ハンバーガーメニュー内のレイアウトをするためのclassもつけている

```
    <header class="header">
      <h1 class="header-logo">
        <a href="..."><img src="..." alt="..."></a>
      </h1>

      <!-- ハンバーガーボタン -->
      <button type="button" class="hamburger-button">
        ...
      </button>

      <!-- ハンバーガーメニュー -->
      <div class="hamburger-menu header-nav-container">
        <nav class="hamburger-nav">
          <ul class="hamburger-nav-list-group">
            <li><a href="#">リスト１</a></li>
            <li><a href="#">リスト２</a></li>
            <li><a href="#">リスト３</a></li>
          </ul>
        </nav>
      </div>

    </header>
```

### CSS
```
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.75rem;
  padding: 0.812rem 1.25rem 1.187rem;
  background-color: rgb(238 156 112 / 80%);
}

/* ロゴ */
.header-logo {
  line-height: 1;
}

.header-logo img {
  max-width: 16.8125rem;
  vertical-align: baseline;
}


/* ハンバーガーボタン */
.hamburger-button {
  position: fixed;
  top: 1rem;
  right: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* ハンバーガーメニュー */
@media (max-width: 767.9px) {
  .hamburger-menu {
    position: fixed;
    top: 3.75rem;
    left: 100%;
    width: 100%;
    height: calc(100vh - 3.75rem);
    padding: 2.45rem;
    background-color: rgb(255 241 234 / 95%);
    transition: all 0.6s;
    visibility: hidden;
  }
}

/* ハンバーガーメニュー 開いている状態 */
.hamburger-menu-active {
  left: 0;
  visibility: visible;
}

/* ナビゲーション */
.hamburger-nav-list-group {
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 1;
}

# カバー
# フッター
