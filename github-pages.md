<!-- omit in toc -->
# Github PagesでBlogサイトを作る

GithubにはPagesという静的Webサイトを公開する機能がある。<br>
静的サイトなので検索プラグインなどはつけられないが、Jekyllが使えるのでMarkdownで書いたドキュメントを置くだけできれいに整形して表示してくれる。<br>
つまり、ローカルでMarkdownでブログ記事を書いて、それをGitでアップロードするだけで公開できてしまうということで、ブログの執筆が効率化できる素晴らしいサービスである。<br>

ここではGithub Pagesを使えるようにするための簡単な手順をまとめる。<br>

- [1. Github Pagesを有効にする](#1-github-pagesを有効にする)
- [2. ローカル環境をつくる](#2-ローカル環境をつくる)
  - [2.1 ローカルリポジトリの作成](#21-ローカルリポジトリの作成)
  - [2.2 Jekyllをローカルで動かす](#22-jekyllをローカルで動かす)
    - [(0) GEMの保存先を設定](#0-gemの保存先を設定)
    - [(1) Install prerequisites](#1-install-prerequisites)
    - [(2) Install the jekyll and bundler gems](#2-install-the-jekyll-and-bundler-gems)
    - [(3) Install webrick](#3-install-webrick)
    - [(4) Create a new Jekyll site at ./myblog](#4-create-a-new-jekyll-site-at-myblog)
    - [(5) Change into your new directory](#5-change-into-your-new-directory)
    - [(6) Edit Gemfile](#6-edit-gemfile)
    - [(7) Build the site and make it available on a local server](#7-build-the-site-and-make-it-available-on-a-local-server)
  - [2.3 ローカルファイルをpush](#23-ローカルファイルをpush)
- [3. カスタマイズ](#3-カスタマイズ)
  - [3.1 Themeを変更](#31-themeを変更)
    - [(1) Architect公式リポジトリからclone](#1-architect公式リポジトリからclone)
    - [(2) ローカルでGemfileを編集](#2-ローカルでgemfileを編集)
    - [(3) ローカルで動かしてみる](#3-ローカルで動かしてみる)
    - [(4) Github Pagesで動かす](#4-github-pagesで動かす)
  - [3.2 カスタムドメイン設定](#32-カスタムドメイン設定)
    - [(1) まずDNSレコードを設定する](#1-まずdnsレコードを設定する)
    - [(2) Pagesの設定画面でカスタムドメインを登録](#2-pagesの設定画面でカスタムドメインを登録)
    - [参考リンク](#参考リンク)

# 1. Github Pagesを有効にする
Gitリポジトリを新規作成する。<br>
PagesでJekyllを使う場合は以下のようなネーミングルールで作成しないとダメ。<br>
- リポジトリ名: `account-name.github.io`<br>

次にリポジトリの `Settings > Pages` からPagesを有効にする。
- Source: Deploy from a Branch
- Branch: main

これだけで `https://account-name.github.io/` で静的Blogサイトが作られる。<br>
ここにHTMLファイルを作りこんでいくこともできるが、Jekyllを使ってMarkdownで記事を書いていくのが楽でいい。<br>
ということでここからJekyllを使えるように設定していく。

まだindex.htmlもJekyllのコンテンツも何もアップロードしていないので、この時点で上記URLにアクセスしても 404 File not found となる。

公式のクイックスタートガイド。基本的にこれに沿って作業していく。<br>
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll<br>

これはHexo(Js)で設定した例だがイメージをつかむのに参考になる。<br>
Hexoの場合は上記のリポジトリ名ルールでなくても動くみたい。<br>
https://www.bedroomcomputing.com/2020/08/2020-0815-engineer-static-site-gen-blog/<br>
https://www.bedroomcomputing.com/2020/11/2020-1123-hexo-github/

# 2. ローカル環境をつくる
設定の流れは以下のようになる。
- まずローカルでGitリポジトリを作って、そこにJekyll環境を作る
- Jekyllの設定ファイルやTheme、ブログ記事がリポジトリ内に保存される
- Jekyllの設定変更や、執筆したブログ記事はGitコマンドでリモートリポジトリにPushする

## 2.1 ローカルリポジトリの作成
```
$ mkdir path/to/local/repo
$ cd pas/to/local/repo
$ git init
$ git remote add origin git@github.com:account/account.github.io.git
$ git pull origin main
```

## 2.2 Jekyllをローカルで動かす
https://jekyllrb.com/docs/<br>
https://jekyllrb.com/docs/installation/<br>
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll<br>
ここらを参照して設定。<br>
一連の作業が無事終わると、Jekyllにデフォルトで入っているminimaというThemeでサイトが起動する。

### (0) GEMの保存先を設定
以下を.bashrcに書く。<br>
```
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"
```
環境変数の読み込み。<br>
`source .bashrc`

### (1) Install prerequisites
`sudo apt-get install ruby-full build-essential`

### (2) Install the jekyll and bundler gems
`gem install jekyll bundler`

### (3) Install webrick
`gem install webrick`<br>
`bundle add webrick`

### (4) Create a new Jekyll site at ./myblog
`jekyll new myblog`

### (5) Change into your new directory<br>
`cd myblog`

### (6) Edit Gemfile
gem "jekyll" で始まる行をコメントアウト。<br>
gem "github-pages" で始まる行にバージョン `"~> 229"` を追記してアンコメント。<br>
`#gem "jekyll", "~> 4.3.3"`<br>
`gem "github-pages", "~> 229", group: :jekyll_plugins`

github-pagesのバージョンはここから確認。<br>
https://pages.github.com/versions/

次のコマンドを実行。<br>
上記の編集によって、正しいバージョンの Jekyll が github-pages gem の依存関係としてインストールされる。<br>
`bundle install`

### (7) Build the site and make it available on a local server
`bundle exec jekyll serve`<br>
成功すると、http://127.0.0.1:4000 でサイトが起動する。

## 2.3 ローカルファイルをpush
ローカルで動いたJekyll環境を、リモートリポジトリにPushする。<br>
うまくいったら https://account-name.github.io/ でアクセスできる。
```
$ git add .
$ git commit -m "Initial commit"
$ git push origin main
```

# 3. カスタマイズ
サイトの見栄えをよくするためThemeを変更して、カスタムドメインでアクセスできるようにする。<br>

## 3.1 Themeを変更
Github Pagesで利用可能なThemeは下記ページでリストされている。<br>
https://pages.github.com/themes/<br>
選択肢が少ないが、比較的ページの構成がよさげだった `Architect` を入れてみる。<br>
https://github.com/pages-themes/architect<br>
以下のサイトはTheme以外にもJekyllで利用できるプラグインがリストされている。<br>
https://qiita.com/noraworld/items/f0da9ecb608476fe3a02

Theme変更の流れ:<br>
(1) Architect公式リポジトリからclone<br>
(2) ローカルでGemfileを編集<br>
(3) ローカルで動かしてみる<br>
(4) Github Pagesで動かす<br>

### (1) Architect公式リポジトリからclone
```
$ git clone https://github.com/pages-themes/architect.git
$ cd architect
```

### (2) ローカルでGemfileを編集
Gemfileに以下の行を追加(デフォルトのminimaで生成されたGemfileから抜き出したもの)
```
gem "github-pages", "~> 229", group: :jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end
gem "webrick", "~> 1.8"
```

### (3) ローカルで動かしてみる
エラーが出たら適宜修正。
```
$ bundle install
$ bundle exec jekyll serve
```
http://127.0.0.1:4000/ で動作確認

### (4) Github Pagesで動かす
Githubへpush
```
cp -r /path/to/original/.git ./git
git add .
git commit -m "Theme updated"
git push origin main
```
https://account-name.github.io/ で動作確認

## 3.2 カスタムドメイン設定
`yourdomain.com` のようなカスタムドメインでアクセスできるようにする。<br>
https://yourdomain.com<br>
https://www.yourdomain.com<br>
どちらでもアクセスできるようになる。

### (1) まずDNSレコードを設定する
ドメインレジストラのDNSサービスなどでDNSレコードを設定する。
- yourdomain.com の Aレコード<br>
- www.yourdomain.com の CNAMEレコード<br>

設定する内容は以下リンク先を参照<br>
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain

### (2) Pagesの設定画面でカスタムドメインを登録
Custom domain のところに www.yourdomain.com を設定<br>
これで yourdomain.com と www.yourdomain.com の両方アクセスできるようになる。<br>
Enforce HTTPS にチェックを入れると、Let's Encryptで証明書を発行してHTTPSアクセスができるようになる。<br>

### 参考リンク
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll<br>
https://jekyllrb.com/docs/themes/<br>
