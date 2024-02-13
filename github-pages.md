

# 1. Github Pagesを有効にする
Gitリポジトリを新規作成して `Settings > Pages` からPagesを有効にする(既存のリポジトリでもOK)
- Source: Deploy from a Branch
- Branch: main

これだけで `https://account.github.io/repository/` で静的サイトが作られる。

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
$ git remote add origin git@github.com:account/repository.git
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
テーマの変更<br>
https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll<br>
https://jekyllrb.com/docs/themes/<br>
タイトルの変更<br>
https://docs.github.com/ja/pages/quickstart<br>
https://jekyllrb.com/docs/themes/