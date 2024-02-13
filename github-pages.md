

# 1. Github Pagesを有効にする
Gitリポジトリを新規作成する。<br>
- リポジトリ名: `account_name.github.io`<br>

次に `Settings > Pages` からPagesを有効にする。
- Source: Deploy from a Branch
- Branch: main

これだけで `https://account.github.io/` で静的Blogサイトが作られる。<br>
ここにHTMLファイルを作りこんでいくこともできるが、Github PagesではJekyllをサポートしていて、Markdownで記事を書いてGithubにあげればきれいに整形して見せてくれるというような便利な使い方ができる。<br>
ということでここからJekyllを使えるように設定していく。

まだindex.htmlもJekyllのコンテンツも何もアップロードしていないので、この時点で上記URLにアクセスしても 404 File not found となる。

公式のクイックスタートガイドは少しあてにならない。<br>
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll<br>
これはHexo(JS)の例だがイメージをつかむのに参考になる<br>
https://www.bedroomcomputing.com/2020/08/2020-0815-engineer-static-site-gen-blog/<br>
https://www.bedroomcomputing.com/2020/11/2020-1123-hexo-github/

# 2. ローカルで編集作業できるようにする
## 2.1 ローカルリポジトリの設定
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
ここらを参照して設定。

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
`bundle exec jekyll serve`

## 2.3 ローカルファイルをpush
```
$ git add .
$ git commit -m "Initial commit"
$ git push origin main
```

## 2.4 References
https://jekyllrb-ja.github.io/<br>
https://pages.github.com/

# 3. カスタマイズ
Themeを変更する。<br>
Github Pagesで利用可能なThemeは下記ページでリストされている。<br>
選択肢が少ないが、比較的ページの構成がよさげだったArchitectにする。<br>
https://pages.github.com/themes/<br>

以下のサイトはTheme以外も含めてJekyllで利用できるプラグインがリストされている。<br>
https://qiita.com/noraworld/items/f0da9ecb608476fe3a02

やり方の流れとしては、<br>
- Architect公式リポジトリからcloneしてローカルに落としてくる
- ローカルでGemfileを編集
- ローカルで動かしてみる
- Githubにpush
- Github Pagesで動くことを確認

## 3.1 Themeを変更
### (1) Architectの公式リポジトリからclone
```
$ git clone https://github.com/pages-themes/architect.git
$ cd architect
```

### (2) Gemfileを編集
Gemfileに以下の行を追加(デフォルトのminimaで生成されたGemfileから抜き出したもの)
```
gem "github-pages", "~> 229", group: :jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end
gem "webrick", "~> 1.8"
```

### (3) ローカルで実行
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
https://account.github.io/ で動作確認


テーマの変更<br>
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll<br>
https://jekyllrb.com/docs/themes/<br>
タイトルの変更<br>
https://docs.github.com/ja/pages/quickstart<br>
https://jekyllrb.com/docs/themes/