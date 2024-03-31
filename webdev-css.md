---
layout: default
title: Web Development
---

<!-- omit in toc -->
# CSS

- [全般](#全般)
- [CSSの書き方](#cssの書き方)
  - [HTMLの各タグ内にstyle属性として適用](#htmlの各タグ内にstyle属性として適用)
  - [head内にstyleとして適用](#head内にstyleとして適用)
  - [（推奨）外部ファイルとして読み込む](#推奨外部ファイルとして読み込む)
- [セレクタ](#セレクタ)
  - [要素全体のセレクタ](#要素全体のセレクタ)
  - [class属性で指定するセレクタ](#class属性で指定するセレクタ)
  - [id属性で指定するセレクタ](#id属性で指定するセレクタ)
  - [子孫セレクタ](#子孫セレクタ)
  - [隣接セレクタ](#隣接セレクタ)
  - [特定の属性値をもつ要素のみを指定するセレクタ](#特定の属性値をもつ要素のみを指定するセレクタ)
- [疑似クラス](#疑似クラス)
  - [リンクの状態に関するもの](#リンクの状態に関するもの)
  - [条件に基づいた兄弟グループの要素を指定する疑似クラス](#条件に基づいた兄弟グループの要素を指定する疑似クラス)
  - [否定擬似クラス](#否定擬似クラス)
- [擬似要素](#擬似要素)
- [プロパティ](#プロパティ)
  - [テキストの色、大きさ、揃え方](#テキストの色大きさ揃え方)
  - [背景色、背景画像](#背景色背景画像)
  - [線を表示](#線を表示)
  - [リストのスタイル](#リストのスタイル)
  - [ボックスに影を付ける](#ボックスに影を付ける)
  - [サイズ指定](#サイズ指定)
  - [余白](#余白)
    - [margin - 要素の外側の余白を指定](#margin---要素の外側の余白を指定)
    - [padding - 要素の内側の余白を指定](#padding---要素の内側の余白を指定)
  - [display](#display)
  - [配置](#配置)
- [サイズの記法](#サイズの記法)
  - [パーセント表記](#パーセント表記)
  - [em表記](#em表記)
  - [rem表記](#rem表記)
  - [vw（Viewport Width）表記](#vwviewport-width表記)
  - [備考](#備考)
- [色の記法](#色の記法)
- [CSSファイル内でのセレクタの優先順位](#cssファイル内でのセレクタの優先順位)


### 全般
[CSSリファレンス](https://www.htmq.com/style/)<br>
[セレクタ](https://www.htmq.com/css3/#selector)<br>
[PX to Percent Converter](https://codebeautify.org/px-to-percent-converter)<br>
[WEB GENERATOR](https://web-generates.com/)<br>
[カラーコード変換ツール](https://tech-unlimited.com/color.html)
(16進数、RGB、RGBA)<br>
[カラーコード変換](https://www.color-site.com/converts#google_vignette)
(RGB、HSV、HSL、CMK、CMYK)

### CSSの書き方

- HTMLの各タグの中にstyle属性を追加し、属性値としてCSSを記述する
- head要素の中に`<style>`というタグ（要素）を追加し、`<style>` の内容としてCSSを記述する
- CSSファイルを用意し、ファイルの中にCSSを記述する

#### HTMLの各タグ内にstyle属性として適用
style属性を使うことで、HTMLタグの中に直接CSSを書き込むことができます。
```
<h1 style="color: red;">ここが赤文字</h1>
```
この方法は、制作作業中に一時的にスタイルの確認をしたいときなどに有用です。この方法はhead要素内で読み込まれたスタイルよりも確実に後から読み込まれるので、 HTMLタグ内に記述したCSSは常に優先的に適用される と覚えてください。

#### head内にstyleとして適用
`<head>`要素内で使用可能な`<style>`タグの中にCSSを記述できます。下記のようにhead要素のstyle要素としてCSSを書くと、記述したHTMLファイル内のbody要素だけに適用されます。
```
<head>
    <style>
        h1.red {
            color: #ff0000;
        }
    </style>
</head>
```

#### （推奨）外部ファイルとして読み込む
こちらが 推奨される方法 です。CSSを適用したいHTMLのhead要素内にlink要素を書き込むことで、外部のCSSファイルを読み込むことができます。下記のソースコードでは、style.cssというファイルを読み込み、style.css内のCSSを適用します。
```
<head>
    <!-- 中略 -->
    <link rel="stylesheet" href="style.css">
</head>
```
CSSファイルはHTMLと同じく、テキストファイルです。テキストエディタを使用して作成・編集します。保存したファイルの拡張子を「.css」にすることで、WebブラウザにCSSファイルとして認識されます。

外部ファイルとして読み込む理由としては、外部ファイルにして共有化したほうがサイト全体としてのメンテナンス性が高く保てること、また各々のHTML文書が簡素化され、視認性がよくなることなどが挙げられます。

HTMLとCSSの考え方の基本として、文書であるHTMLと、デザイン指定であるCSSは別ファイルで管理すべきという考えがあります。

文書とデザインではその役割がまったく異なるので、それぞれの役割に沿ってファイルを分けようという考え方です。そのことからも、上記の3つの方法のうち、CSSを外部ファイルとして読み込んで適用するのが推奨される方法 です。


### セレクタ
- デザインを適用する範囲を指定するもの
- HTML要素全体に対してデザインを指定するのがもっとも単純な方法
- class属性、id属性を組み合わせるのが一般的

#### 要素全体のセレクタ
```
セレクタ {
    プロパティ: 値;
}
```
下記の例では、p要素やh1要素を指定しています。

```
/* h1要素のの文字色(color)を赤(red)にする */
h1 {
  color: red;
}

/* p要素のマージン(margin)を40pxにする */
p {
  margin: 40px;
}
```

#### class属性で指定するセレクタ
importantというclass属性を持ったp要素にデザインを適用
```
p.highlight {
  color: red;
}
```

同じclass属性を持った全ての要素に対してデザインを適用する場合
```
.highlight {
  color: red;
}
```

#### id属性で指定するセレクタ
id属性で指定する場合は、# を使用します。id属性は、1つのHTMLファイル内で一意（ダブらない）が推奨されていますので、1つのWebページの中で、ただ1つの要素を識別したいときに指定します。
```
#important {
  color: blue;
}
```

#### 子孫セレクタ
特定の階層構造になっている要素にデザインを適用する場合

以下は`<article></article>`内の`<p>`要素に対してデザインを適用する例

```
<p>テキストです</p>
<article>
  <p>article > pの文章</p>
</article>
```

```
article p {
  color: orange;
}
```

#### 隣接セレクタ
h2の直後のp、など特定の要素に隣接した要素にデザインを適用する場合
```
<p>テキストです（この要素にはcolor: pink;は指定されません）</p>
<h2>h2タイトルです</h2>
<p>テキストです</p>
<p>テキストです（この要素にはcolor: pink;は指定されません）</p>
```

```
h2 + p {
  color: pink;
}
```

#### 特定の属性値をもつ要素のみを指定するセレクタ
ある属性が「指定した値」になっている要素を指定する場合、要素名[属性名=○○] のような書き方をします。
```
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>HTML/CSS</title>
    </head>
    <body>
        <a href="https://www.yahoo.co.jp">Yahoo! JAPAN</a><br>
        <a href="https://www.google.co.jp">Google</a><br>
        <a href="https://www.bing.com">Bing</a><br>
        <a href="https://example.com">Example</a><br>
    </body>
</html>
```

```
a[href="https://example.com"] {
  color: green;
}
```

### 疑似クラス
疑似クラスを使うことで、特定の状態になっている要素にのみデザインを適用できます。

#### リンクの状態に関するもの
```
a:link {
    color: #0000ff;
}
a:hover {
    color: #ff0000;
}
a:visited {
    color: #999999;
}
```

a:linkは未訪問のリンクです。未訪問リンクの文字色を青に指定します。
a:hoverは要素にカーソルが乗っている状態です。a要素にカーソルを合わせると文字色が赤になるように指定しています。
a:visitedは訪問済みのリンクです。訪問済みリンクの文字色はグレーになるように指定しています。

#### 条件に基づいた兄弟グループの要素を指定する疑似クラス
liの並び位置でデザインを指定
```
/* 一番最初の要素 */
.first-last li:first-child{
  color: red;
}

/* 一番最後の要素 */
.first-last li:last-child{
  color: orange;
}

/* 2番目の要素 */
.nth-child li:nth-child(2){
  color:blue;
}

/* 3倍の整数に該当する順番の要素 */
.nth-child li:nth-child(3n){
  color: gray;
}

/* 奇数の要素、oddの代わりに2n+1と入れても同じ */
.odd-even li:nth-child(odd){
  background: yellow;
}

/* 偶数の要素、evenの代わりに2nと入れても同じ */
.odd-even li:nth-child(even){
  background: skyblue;
}
```

#### 否定擬似クラス
特定のセレクタだけ指定したくない場合は、:not()を使います。:not()の()の中には、除外したいセレクタを記述します。
```
<ul>
  <li>リスト1</li>
  <li>リスト2</li>
  <li>リスト3</li>
  <li>リスト4</li>
</ul>
```

```
li:not(:last-child) {
  border-bottom: 1px solid #000;
}
```

### 擬似要素
:before を使うと「要素の内容の 先頭」、:after を使うと「指定の要素の 末尾」にスタイルを適用します。

2つとも、おもに content という特殊なプロパティとともに使います。content は、:before や :after で追加したい内容を指定するためのプロパティです。

HTML
```
<p class="pseudo">ヴァン</p>
```

CSS
```
.pseudo:before {
    content: "ルートヴィヒ・";
}

.pseudo:after {
    content: "・ベートーヴェン";
}
```

OUTPUT
```
ルートヴィヒ・ヴァン・ベートーヴェン
```

### プロパティ
#### テキストの色、大きさ、揃え方
- color
- font-family
- font-size
- font-weight
など

Example
```
div {
  text-align: center; /* 横方向の整列 */
}

p {
  color: red; /* 文字色 */
  font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif; /* フォント */
  font-size: 24px; /* 文字サイズ */
  font-weight: 700; /* 文字の太さ */
  line-height: 2; /* 行間 */
  letter-spacing: 10px; /* 字間 */
}

img {
  vertical-align: bottom; /* 縦方向の整列 */
}
```

#### 背景色、背景画像
- background-color
- background-image
- background-repeat
- background-size
- background-position
など

Example
```
.background-color {
  width: 200px;
  height: 200px;
  background-color: gray; /* 背景色 */
}

.background-triangle {
  width: 300px;
  height: 100px;
  background-image: url("https://techacademy.s3-ap-northeast-1.amazonaws.com/bootcamp/webdesign/3/html-css/triangle.png"); /* 背景画像 */
  background-repeat: no-repeat; /* 背景画像繰り返し無し */
}

.background-image {
  width: 300px;
  height: 200px;
  background-image: url("https://techacademy.s3-ap-northeast-1.amazonaws.com/bootcamp/webdesign/3/html-css/bg.jpg"); /* 背景画像 */
  background-size: cover; /* 画像の縦横比を保ちながら表示領域いっぱいに表示 */
  background-position: 50% 50%; /* 背景画像の位置 */
}
```

#### 線を表示
div要素に使用<br>
border<br>
border-top 、border-right 、border-bottom 、border-left

table要素に使用<br>
border-collapse: {separate | collapse}

collapse
隣接するセルのボーダーを重ねて表示します。

separate
隣接するセルのボーダーを間隔をあけて表示します。

#### リストのスタイル
リストのスタイルを変更するプロパティ<br>
list-style

#### ボックスに影を付ける
box-shadow

#### サイズ指定
width、height<br>
max-width<br>
calc()関数

#### 余白
##### margin - 要素の外側の余白を指定
margin ... 上下左右まとめて指定<br>
margin-top、margin-right、margin-bottom、margin-left ... 上下左右それぞれ指定<br>

margin: (上) (右) (下) (左);<br>
margin: (上) (左右) (下);<br>
margin: (上下) (左右);<br>
margin: (上下左右);<br>

##### padding - 要素の内側の余白を指定
padding ... 上下左右まとめて指定<br>
padding-top、padding-right、padding-bottom、padding-left ... 上下左右それぞれ指定<br>

padding: (上) (右) (下) (左);<br>
padding: (上) (左右) (下);<br>
padding: (上下) (左右);<br>
padding: (上下左右);<br>

#### display
ブロックレベル要素
display: block
要素は横いっぱいに広がり、次に続く要素は改行します。幅・高さ・余白などの調節が可能です。

インライン要素
display: inline
要素が横に並んでいきます。幅や高さは調節できません。

インラインブロック要素
display: inline-block
余白や幅、text-alignなどが設定できるブロックレベル要素を、インラインレベル要素のように横へ並べられます。
リスト`<li>`を横並びにすることもできる。
```
<ul class="inline-block">
  <li><a href="#">TOP</a></li>
  <li><a href="#">ABOUT</a></li>
  <li><a href="#">MAP</a></li>
  <li><a href="#">BLOG</a></li>
  <li><a href="#">CONTACT</a></li>
</ul>
```
```
.inline-block li {
  display: inline-block;
}
```

非表示にする
display: none

Flexboxにする
display: flex

box-sizing
box-sizing プロパティは、要素の幅と高さを計算するボックスモデルのルールを変更するために使います。ボックスモデルについては以降のチャプターで解説します。

content-box はボックスの幅にpadding（余白）とborder（ボーダー）の幅は含みません。 box-sizing を指定しない場合はこちらが初期値として適用されています。
border-box はボックスの幅にpadding（余白）とborder（ボーダー）の幅を含みます。

#### 配置
position<br>
positionは、要素がどのように置かれるかを決めるプロパティです。<br>
positionプロパティの値には初期値の static に加えて relative、absolute、fixed の4つがあります。<br>

static<br>
position プロパティのデフォルト値<br>
前後のオブジェクトの位置関係を踏まえた配置になる<br>
top、left など位置指定プロパティが使えず左上から要素を並べていくレイアウト<br>
自身の下端が次のオブジェクトの基点になる<br>

relative<br>
相対配置<br>
staticと同様に前後のオブジェクトの位置関係を踏まえた配置<br>
自身の上端が次のオブジェクトの基点になる<br>

absolute<br>
絶対位置<br>
top、bottom、left、right などの位置指定を何も指定しない場合、ページ全体の左上が基準になる<br>

divブロックのpositionがrelativeの場合、その子要素(div)のabsolute,fixedの基点になる。<br>
relative はこの値を指定した要素が子要素 absolute や fixed の基準位置となる。
そのため、`position: relative;` と `position: absolute;` はセットで使われる。<br>

absoluteかfixedにすると、次のオブジェクトの基点としてdivブロックが考慮されない。<br>
divブロック自身も他のオブジェクトと関係なく絶対ポジションとして設定した場所に置かれる。<br>

### サイズの記法

絶対指定 px<br>
相対指定 %、em、rem、vw<br>

#### パーセント表記
親要素に対して相対的なパーセンテージを指定<br>
htmlタグのスタイルでfont-sizeをパーセント指定した場合は、ブラウザのデフォルトフォントサイズに対するパーセント指定となる。<br>
ブラウザのデフォルトフォントサイズは標準で16px。
```
html {
    font-size: 62.5%; // 16 x 62.5% = 10px
}
```

#### em表記
親要素の文字サイズに対しての大きさを指定します。後述するremとの違いは、直近の親要素をもとにした単位という点になります。基本的にはremを使用することが多く、直近の親要素をもとに値を指定したいときにemを使用します。

#### rem表記
remは、すべての要素の親（root）であるhtmlセレクタを基準として計算されます。以下のサンプルでは、rem単位を使用してh1要素のフォントサイズを24pxにしています。

#### vw（Viewport Width）表記
ブラウザの幅に応じて、要素の大きさを変えたい場合に利用します。

たとえば、ブラウザの幅が1920pxのとき、100vwは1920pxと同じ大きさになります。10vwは192pxとなります。ブラウザの幅が変わると、1vwあたりのpx数も変わります。

これを使うと、画面の幅に応じてフォントサイズや画像の大きさを変えたりできるので、後ほど学ぶレスポンシブデザインで利用されます。

#### 備考
em, remで相対指定しておくと、root font-sizeを変更したらそれに合わせて全体のフォントサイズが調整されるので、おそらく実環境ではem/rem相対指定が多いのではないか。

### 色の記法
英語：red, green, blue, …<br>
RGB（16進数）：#000000 から #ffffff まで
RGBA関数：（例）rgba(0,0,0,0)

### CSSファイル内でのセレクタの優先順位
- 下に書かれたものほど優先
- 詳細なセレクタほど優先

[詳細度の計算方法(MDM)](https://developer.mozilla.org/ja/docs/Web/CSS/Specificity)


