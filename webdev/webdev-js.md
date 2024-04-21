---
layout: default
title: Web Development
---

<!-- omit in toc -->
# JavaScript

- [全般](#全般)
  - [ツール](#ツール)
    - [Coding](#coding)
    - [Diff](#diff)
    - [JavaScript](#javascript-1)
    - [jQueryリファレンス](#jqueryリファレンス)
  - [参考情報](#参考情報)
    - [脱jQuery](#脱jquery)
  - [ベースHTML](#ベースhtml)
- [JavaScriptの書き方](#javascriptの書き方)
  - [HTML要素](#html要素)
  - [Elementの取得](#elementの取得)
    - [Finding HTML elements by id](#finding-html-elements-by-id)
    - [Finding HTML elements by tag name](#finding-html-elements-by-tag-name)
    - [Finding HTML elements by class name](#finding-html-elements-by-class-name)
    - [Finding HTML elements by CSS selectors](#finding-html-elements-by-css-selectors)
  - [jQueryのライブラリ](#jqueryのライブラリ)
    - [jQuery](#jquery)
    - [Slick](#slick)
    - [Smarttab](#smarttab)
    - [Waypoints](#waypoints)
    - [Animate.css](#animatecss)
  - [jQueryの基本](#jqueryの基本)
    - [書式](#書式)
    - [メソッド](#メソッド)
      - [CSSをセット](#cssをセット)
    - [function](#function)


## 全般
### ツール
#### Coding
[JS Bin](<https://jsbin.com>)<br>
[HTML文法チェック](<https://validator.w3.org/#validate_by_input>)
[CodePen](https://codepen.io/trending)<br>

#### Diff
[CODE DIFF](https://www.w3docs.com/tools/code-diff/)<br>
[Diff Checker](https://appdevtools.com/diff-checker)<br>
[Mergely](https://editor.mergely.com/)<br>
[difff](https://difff.jp/)

#### JavaScript
[JavaScript Tutorial](https://www.w3schools.com/js/default.asp)<br>
[JavaScript Exercise](https://www.w3schools.com/js/exercise_js.asp)<br>
[MDN-Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)<br>
[jQuery リファレンス：セレクタ目次](http://www.jquerystudy.info/reference/selectors/index.html)<br>
[Selectors | jQuery API Documentation](https://api.jquery.com/category/selectors/)<br>

#### jQueryリファレンス
- [jQuery - js STUDIO](http://js.studio-kingdom.com/jquery/)
- [jQuery日本語リファレンス](http://semooh.jp/jquery/)
- [jQuery公式リファレンス（英語）](https://api.jquery.com/)

### 参考情報
#### 脱jQuery
- [JavaScriptを使ったハンバーガーメニューを作ろう！](https://zero-plus.io/media/nav-hamburger/)
- [【アコーディオン】jQueryのslideToggleを生jsで再現してみた。](https://qiita.com/monji586/items/bf0fe008e813b8f3fd7a)
- [toggleClassと同じような動作のjavascript](https://qiita.com/ketabawo/items/6428f484d857303e6c20)
- [Qiita - 脱JQuery](https://qiita.com/tags/%e8%84%b1jquery)
- [classList.toggle()でクラスの有無を切り替える【JavaScript】](https://web-tsuku.life/classlist-toggle/)



### ベースHTML

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>タイトル</title>
    <meta name="description" content="ページの説明">

    <!-- リセットCSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ress@4.0.0/dist/ress.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <!-- CSS-->
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
  <!-- ここにHTMLを書いていく -->

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- js -->
  <script src="main.js"></script>
  </body>
</html>
```

## JavaScriptの書き方

### HTML要素
`<p id="main" class="text">こんにちは</p>`

タグで囲われたひとかたまりが `HTML要素(Element)`。<br>
JavaScriptはElementを取得して、それに対して操作を行う。<br>
`document.getElementBy...()` といった関数でElementを取得する。

取得したElementはJavaScriptオブジェクトで、そのオブジェクトに対していろいろな操作(メソッド)が実行できる。

複数のElementが取得される場合は、それらは配列にセットされる。<br>
`document.getElementsByClassName("test")[0]`

### Elementの取得
参考: [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)

#### Finding HTML elements by id
`const element = document.getElementById("main");`

#### Finding HTML elements by tag name
`const element = document.getElementsByTagName("p");`

This example finds the element with `id="main"`, and then finds all `<p>` elements inside `"main"`:
```
const x = document.getElementById("text");
const y = x.getElementsByTagName("p");
```

#### Finding HTML elements by class name
`const x = document.getElementsByClassName("text");`

#### Finding HTML elements by CSS selectors
This example returns a list of all <p> elements with class="text".<br>
`const x = document.querySelectorAll("p.text");`

### jQueryのライブラリ
#### jQuery
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

#### [Slick](http://kenwheeler.github.io/slick/)
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
```

#### [Smarttab](https://github.com/techlab/jquery-smarttab)
```
<link href="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/css/smart_tab_all.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/js/jquery.smartTab.min.js"></script>
```

#### [Waypoints](http://imakewebthings.com/waypoints/)
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" integrity="sha512-CEiA+78TpP9KAIPzqBvxUv8hy41jyI3f2uHi7DGp/Y/Ka973qgSdybNegWFciqh6GrN2UePx2KkflnQUbUhNIA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

#### [Animate.css](https://animate.style/)
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
```

### jQueryの基本
#### 書式
基本形：<br>
`$('セレクタ').メソッド名(引数);`

`$('セレクタ')` でElementを取得して、`.メソッド名(引数);` で指定した操作を行う。<br>
JavaScript標準の関数では `document.getElementBy...()` でElementを取得する。<br>
利用できるメソッドもjQueryオブジェクト独自のものがある。<br>
テキストはjQueryだがなるべくJavaScript標準の書き方も同時に確認しておく。

Hello World：<br>
`$('#box').text('Hello jQuery!');`<br>
`.text()` メソッドで文字列をセットしている。

複数操作を順番に実行：<br>
`$('セレクタ').操作1().操作2().操作3();`


子要素セレクタ(親の直下のみ)：<br>
`$('#parent > div').操作();`<br>
`id=parent`がセットされた要素の直下の`<div>`要素

子孫要素セレクタ(親の下全体)：<br>
`$('#parent div').操作();`<br>
`id=parent`がセットされた要素以下のすべての`<div>`要素

#### メソッド
##### CSSをセット

`$('セレクタ').css('プロパティ','値');`

例：<br>
`$('p').css('color','red');`<br>
以下をセットするのと同じ
```
p {
  color: red;
}
```

複数プロパティを設定する場合は連想配列を使う
```
$('p').css({
  'color': '#ffffff',
  'background-color': '#000000',
});
```

JavaScriptで設定する場合

#### function

対象のElementにおけるイベントに対して実行する機能を定義する。<br>
`id=myButton` がセットされたElementに対して `click` が発生したときに `function(e){...}` を実行。

jQueryの例：
```
$('#myButton').on('click', function(e) {
  console.log("クリックされた要素のIDは: " + e.target.id);
})
```
JavaScriptの例：
```
document.getElementById("myButton").addEventListener("click", function(e) {
  console.log("クリックされた要素のIDは: " + e.target.id);
});
```
