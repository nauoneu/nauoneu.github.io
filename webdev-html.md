---
layout: default
title: Web Development
---

<!-- omit in toc -->
# HTML

- [全般](#全般)
  - [ツール](#ツール)
    - [Coding](#coding)
    - [Diff](#diff)
    - [HTML](#html-1)
    - [VSCodeでインデントを自動で整えるショートカット](#vscodeでインデントを自動で整えるショートカット)
  - [HTMLタグ要素と属性](#htmlタグ要素と属性)
  - [id属性とclass属性](#id属性とclass属性)
  - [最小のHTML文書](#最小のhtml文書)
- [headパート](#headパート)
  - [titleとdescription](#titleとdescription)
  - [OGPの設定例](#ogpの設定例)
  - [link要素](#link要素)
- [bodyパート](#bodyパート)
  - [Webページの構造化](#webページの構造化)
  - [見出し(h1からh6)の注意点](#見出しh1からh6の注意点)
  - [テーブル](#テーブル)
  - [フォーム](#フォーム)

### 全般
#### ツール
##### Coding
[JS Bin](<https://jsbin.com>)<br>
[HTML文法チェック](<https://validator.w3.org/#validate_by_input>)
[CodePen](https://codepen.io/trending)<br>

##### Diff
[CODE DIFF](https://www.w3docs.com/tools/code-diff/)<br>
[Diff Checker](https://appdevtools.com/diff-checker)<br>
[Mergely](https://editor.mergely.com/)<br>
[difff](https://difff.jp/)

##### HTML
[favicon generator](https://ao-system.net/favicon/)<br>

##### VSCodeでインデントを自動で整えるショートカット
Shift + Alt + F (Windows)

#### HTMLタグ要素と属性

`meta` が要素で `charset` が属性
```
<meta charset="UTF-8">
```

#### id属性とclass属性

HTMLのタグの中に名前をつける役割。<br>
CSSでid,classを指定してデザインを定義する。<br>
id属性はHTMLの中（<html> から </html> の間）で`ただ1つの要素`を識別したいときに指定する。<br>
同じid属性を持つタグを設定することも可能だが、指定の要素が識別できなくなるので非推奨。<br>
class属性は`所属グループ`を指定するので、同じclass属性を複数のタグに設定してもかまわない。<br>
idとclassを同時に指定することも可能。
```
<p id="aaa" class="bbb">
```

#### 最小のHTML文書

```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>タイトル</title>
    <meta name="description" content="ページの説明">
  </head>
  <body>
    <h1>h1タイトルです</h1>
  </body>
</html>
```

`<!DOCTYPE html>`<br>
冒頭に書くおまじない。この文書がHTMLであることを宣言。

`<html>...</html>`<br>
DOCTYPE宣言の下に続ける。HTML文書全体を囲う。

`<head>...</head>`<br>
文書に関するメタ情報。

`<body>...</body>`<br>
コンテンツ。

### headパート

#### titleとdescription
サーチエンジンの検索結果に表示されるのできちんと設定する。

#### OGPの設定例
SNSでURLをコピーしたときに画像変換されて貼り付けられる情報<br>
<https://ogp.me/>
```
<meta property="og:site_name" content="サイト名">
<meta property="og:title" content="タイトル">
<meta property="og:description" content="説明">
<meta property="og:type" content="website">
<meta property="og:url" content="url">
<meta property="og:image" content="画像url">
<meta property="og:locale" content="ja_JP">
```

#### link要素
スタイルシート、フォントなど外部ファイルを参照する際に使用
```
<head>
  <meta charset="UTF-8">
  <title>文書のタイトル</title>
  <meta name="description" content="文書の説明">
  <link rel="stylesheet" href="./style.css">
</head>
```

### bodyパート
表示するwebページコンテンツを記述する。

#### Webページの構造化
```
ヘッダー
メインパート
  コンテンツ（記事）
  サイドバー
フッター
```

```
<!-- 省略 -->
<body>

  <header>
    <!-- ここにヘッダーが入ります -->
  </header>

  <main>
    <article>
      <h1>最初のWebサイト</h1>

      <section>
        <h2>HTMLとは</h2>
      </section>

      <section>
        <h2>Webサイトで使用する言語</h2>
      </section>

      <section>
        <h2>テーブルとフォーム</h2>
        <div>
          <h3>テーブル</h3>
        </div>

        <div>
          <h3>フォーム</h3>
        </div>
      </section>
    </article>
    <aside>
      <nav>
        <!-- ここにナビゲーションが入ります -->
      </nav>
    </aside>
  </main>

  <footer>
    <!-- ここにフッターが入ります -->
  </footer>
</body>
<!-- 省略 -->
```

`header`<br>
デザイン上のヘッダー部分を記述

`main`<br>
メインコンテンツ部分を記述

`article`<br>
単一の記事を記述(ここでは本文部分で使用)

`aside`<br>
本文ではない補足情報を記述(ここではサイドバー)

`nav`<br>
メニューや目次など、ページ内のナビゲーションリンクや他ページへのナビゲーションリンクを記述

`footer`<br>
フッター部分を記述

`section/div`<br>
文章のまとまりをわける(id属性とclass属性を使ってスタイルを定義するために使用する)

#### 見出し(h1からh6)の注意点
- h1の後にh3やh4を設定するなどはNG(※現場では禁止されているケースが多い)
- h1は各ページ毎に1つのみ使用することが推奨
- sectionを使う場合は見出しを設定する(見出しがない場合はdivを使用)

#### テーブル
```
table
├ thead
│  └ tr
│     └ th
└ tbody
   └ tr
      ├ th
      └ td
```

```
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Suzuki Ichiro</td>
      <td>ichiro.suzuki@example.com</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Sato Hanako</td>
      <td>hanako.sato@example.com</td>
    </tr>
  </tbody>
</table>
```

#### フォーム

```
<form>
<form>
  <label for="name">名前</label>
  <input type="text" id="name" name="name" placeholder="例：鈴木　一郎">
  <br>
  <label for="email">メールアドレス</label>
  <input type="email" id="email" name="email" placeholder="info@example.com">
  <br>
  <label for="male">男性</label>
  <input type="radio" id="male" name="gender" value="male">
  <br>
  <label for="female">女性</label>
  <input type="radio" id="female" name="gender" value="female">
  <br>
  <label for="none">未回答</label>
  <input type="radio" id="none" name="gender" value="none">

  <h2>好きなスポーツ</h2>
  <label for="baseball">野球</label>
  <input type="checkbox" id="baseball" name="sports" value="baseball">
  <br>
  <label for="soccer">サッカー</label>
  <input type="checkbox" id="soccer" name="sports" value="soccer">
  <br>
  <label for="basketball">バスケットボール</label>
  <input type="checkbox" id="basketball" name="sports" value="basketball">
  <br>
  <label for="golf">ゴルフ</label>
  <input type="checkbox" id="golf" name="sports" value="golf">
  <br>
  <h2>都道府県</h2>
  <select name="prefecture">
    <option value="tokyo">東京都</option>
    <option value="kanagawa">神奈川県</option>
    <option value="saitama">埼玉県</option>
    <option value="chiba">千葉県</option>
    <option value="etc">その他</option>
  </select>

  <h2>問い合わせ内容</h2>
  <textarea name="content"></textarea>
</form>
```
