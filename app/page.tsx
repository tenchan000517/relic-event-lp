export default function Home() {
  // TODO: 画像のパスとリンクは後で差し替え
  const ticketUrl = "#"; // チケット購入リンク（販売開始後に有効化）
  // const ticketUrl = "https://ticket.red-brand.jp/my-page/tickets/purchase/select-date/?ticket_id=574"; // 本番URL
  const officialUrl = "https://linktr.ee/relic758"; // 公式リンク
  const lineUrl = "https://line.me/R/ti/p/@511vjcrn"; // 公式LINE
  const villainUrl = "https://0xmavillain.com/"; // $villain
  const web3moneyUrl = "https://m.youtube.com/@web3money_relic"; // WEB3MONEY

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: 'url(/img/top.jpg)' }}
      >
        <div className="absolute inset-0">
        </div>
        {/* スクロールインジケーター */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 animate-bounce text-center">
          <p className="text-white text-sm font-light tracking-wider mb-2">SCROLL</p>
          <svg
            className="w-6 h-6 text-white mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* チケット購入ボタン - TOP直下 */}
      <section
        className="relative bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: 'url(/img/top.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 md:px-16 md:py-8 text-xl md:text-2xl font-bold text-white bg-[#2372B2] hover:bg-[#1d5a8f] rounded-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                チケットを購入
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* RELiC THE TOWERとは？セクション */}
      <section
        className="relative bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: 'url(/img/top.jpg)' }}
      >
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-black text-[#0D4F84] mb-8 text-center">
              RELiC THE TOWERとは？
            </h2>

            {/* 画像なしバージョン */}
            <div className="text-lg md:text-xl text-[#0D4F84] leading-relaxed space-y-4 px-8 md:px-16">
              <p>RELiC初のWeb3の祭典が東京タワーで開幕！国内の注目プロジェクトが集結し、誰でも参加できる新時代を感じる特別な体験があなたを待っています。</p>
            </div>

            {/* 画像ありバージョン（必要時にコメント解除）
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="w-full md:flex-1 text-base md:text-lg text-[#0D4F84] leading-relaxed space-y-4">
                <p>文章のちほど</p>
              </div>
              <div className="w-full md:flex-1">
                <img
                  src="/img/about.jpg"
                  alt="RELiC THE TOWERとは？"
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* 参加プロジェクト */}
      <section
        className="relative bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: 'url(/img/top.jpg)' }}
      >
        <div className="absolute inset-0 -top-1 bg-white/90"></div>
        <div className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-black text-[#0D4F84] mb-12 text-center">
              参加プロジェクト
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 text-lg md:text-xl text-[#0D4F84] place-items-center">
              <a
                href={officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 w-full"
              >
                <img
                  src="/img/logo/a3.jpg"
                  alt="RELiC"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </a>
              <div className="w-full aspect-square flex items-center justify-center bg-white border-2 border-[#0D4F84] rounded-lg shadow-md">
                <p className="font-bold text-[#0D4F84] text-sm md:text-base">AEB</p>
              </div>
              <div className="w-full aspect-square flex items-center justify-center bg-white border-2 border-[#0D4F84] rounded-lg shadow-md">
                <p className="font-bold text-[#0D4F84] text-xs md:text-base text-center px-2">BOSAI NFT CLUB</p>
              </div>
              <a
                href={villainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 w-full"
              >
                <img
                  src="/img/logo/villain.jpg"
                  alt="$villain"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </a>
              <a
                href={web3moneyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 w-full"
              >
                <img
                  src="/img/logo/web3money.jpg"
                  alt="WEB3MONEY"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </a>
              <div className="w-full aspect-square flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md">
                <p className="font-bold text-gray-400 text-sm md:text-base">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせボタン */}
      <section
        className="relative bg-contain md:bg-cover bg-top md:bg-center bg-no-repeat bg-fixed bg-white"
        style={{ backgroundImage: 'url(/img/top.jpg)' }}
      >
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white bg-[#06C755] hover:bg-[#05b34c] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                お問い合わせ
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main>
      </main>

      {/* フッター */}
      <footer className="bg-[#2372B2] py-12 text-center">
        <div className="container mx-auto px-4">
          {/* SNSボタン */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <a href="https://discord.com/invite/BcRKBythTE" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#91C2E9] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://x.com/relic758" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#91C2E9] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/relic758" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#91C2E9] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@0xmavillain_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#91C2E9] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@web3money_relic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#91C2E9] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <p className="text-[#91C2E9] text-sm mt-4">&copy; 2025 RELiC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
