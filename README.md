# RELiC イベント告知LP

RELiC主催のWeb3イベント告知用ランディングページです。

## 開発環境のセットアップ

```bash
npm install
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## カスタマイズ方法

### 1. チケット購入リンクの設定

`app/page.tsx` の 5行目にあるチケット購入リンクを更新してください：

```typescript
const ticketUrl = "#"; // ← ここにチケット購入ページのURLを設定
```

### 2. 公式サイトリンクの設定

`app/page.tsx` の 6行目にある公式サイトリンクを更新してください：

```typescript
const officialUrl = "https://relic-official.com"; // ← ここに公式サイトのURLを設定
```

### 3. ヘッダー画像の追加

#### 方法1: 背景画像として設定する場合

1. 画像を `public/` フォルダに配置（例: `public/hero-image.jpg`）
2. `app/page.tsx` の 11行目のセクションを以下のように更新：

```tsx
<section className="relative w-full h-[60vh] md:h-[70vh] bg-gradient-to-b from-black/50 to-transparent"
  style={{
    backgroundImage: 'url(/hero-image.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

#### 方法2: Next.js Image コンポーネントを使用する場合

1. 画像を `public/` フォルダに配置（例: `public/hero-image.jpg`）
2. `app/page.tsx` の 11-25行目を以下に置き換え：

```tsx
<section className="relative w-full h-[60vh] md:h-[70vh]">
  <Image
    src="/hero-image.jpg"
    alt="RELiC Event"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
    <div className="text-center px-4 z-10">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
        RELiC
      </h1>
      <p className="text-xl md:text-2xl text-purple-200 drop-shadow-lg">
        Web3 Innovation Event
      </p>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
</section>
```

### 4. イベント概要テキストの編集

`app/page.tsx` の 30-43行目にあるテキストを編集してください：

```tsx
<h2 className="...">
  東京タワーで繋がる、Web3の未来  {/* ← 見出しを編集 */}
</h2>
<div className="...">
  <p className="...">
    RELiC主催による、東京タワーでの特別なWeb3イベントを開催します。  {/* ← 説明文を編集 */}
  </p>
  <p className="...">
    多くのWeb3プロジェクトが集結し...  {/* ← 詳細説明を編集 */}
  </p>
</div>
```

## デプロイ

### Vercelでのデプロイ（推奨）

1. [Vercel](https://vercel.com)にアカウントを作成
2. GitHubリポジトリを連携
3. プロジェクトをインポート
4. 自動的にデプロイされます

### その他のプラットフォーム

```bash
npm run build
npm start
```

ビルドされたファイルは `.next` フォルダに生成されます。

## 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **App Router** - Next.js の新しいルーティングシステム

## ディレクトリ構造

```
relic-event-lp/
├── app/
│   ├── layout.tsx      # レイアウトコンポーネント
│   ├── page.tsx        # メインページ（LP）
│   └── globals.css     # グローバルスタイル
├── public/             # 静的ファイル（画像など）
├── README.md
└── package.json
```

## カスタマイズのヒント

- 色を変更したい場合は、`app/page.tsx` のTailwindクラス（`purple-500`, `pink-500`など）を編集
- フォントを変更したい場合は、`app/layout.tsx` を編集
- アニメーションを調整したい場合は、`transition-all duration-300`などのクラスを編集

## サポート

質問や問題がある場合は、開発者にお問い合わせください。
