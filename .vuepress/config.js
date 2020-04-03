module.exports = {
  title: 'MyTeleWork',
  description: 'テレワークに際しての懸念などまとめ',
  dest: 'pages',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: '総務省', link: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.soumu.go.jp/main_content/000545372.pdf&ved=2ahUKEwjx_tCtusjoAhWI-2EKHdRFCk8QFjAIegQIAhAB&usg=AOvVaw16Y7vB9qIBgdc_3mgxbyHp' },
          { text: '警視庁サイバーセキュリティ', link: 'https://www.keishicho.metro.tokyo.jp/smph/kurashi/cyber/joho/telework.html' },
          { text: 'サイバーリーズン', link: 'https://www.cybereason.co.jp/blog/security/4527/' }
        ]
      }
    ],

    sidebar: 'auto',
    sidebar: [
      ['/', 'Home'],
      ['docs/', 'Documents']
    ],
    sidebarDepth: 1,
    smoothScroll: true,

    displayAllHeaders: true,
    activeHeaderLinks: true,
    lastUpdated: 'Last Updated',

  }
}
