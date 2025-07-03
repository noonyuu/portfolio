import move from '../images/move.webp'
import station from '../images/station.webp'
import cheifoon from '../images/cheifoon.webp'
import sum from '../images/sun.webp'
import diet from '../images/diet-agenda.webp'
import diet2 from '../images/diet-theater.webp'
import profile from '../images/profile.png'
import tuna from '../images/tunagari.webp'
import fountain from '../images/fountain.webp'
import raidclock from '../images/raidclock.webp'
import benkiHard from '../images/benki-hard.webp'
import benkiWeb from '../images/benki-web.webp'
import work from '../images/work.webp'
import coupon from '../images/coupon.webp'
import presentation from '../images/presentation.webp'
import bell from '../images/bell.webp'
import tab from '../images/tab.webp'
import runHub from '../images/runhub.webp'
import crazyLove1 from '../images/crazy-love-1.webp'
import crazyLove2 from '../images/crazy-love-2.webp'
import syoumei from '../images/syoumei.webp'

export interface WorkItem {
  title: string
  image: any[]
  detail: string
  skills: string[]
  member: string
  url?: string
}

export class Wark {
  /**
   * view
   */
  public View(): WorkItem[] {
    const list: WorkItem[] = [
      {
        title: 'RunHub',
        image: [runHub],
        detail: '日々の運動をコミット！',
        skills: ['Swift'],
        member: '個人',
        url: 'https://apps.apple.com/jp/app/runhub/id6747999408'
      },
      {
        title: '狂愛',
        image: [crazyLove1, crazyLove2],
        detail: 'あなたの推しの『鼓動』をリアルタイムに感じ、日々の生活で真の推し愛を体現!',
        skills: ['Swift', 'firebase'],
        member: 'チーム',
        url: 'https://x.com/geek_pjt/status/1936715137425297548'
      },
      {
        title: 'すごいクーポン管理アプリ',
        image: [coupon],
        detail: 'コンビニやファミレスでもらったクーポンを管理するアプリ',
        skills: ['Flutter', 'Swift', 'Hono', 'D1'],
        member: 'チーム',
        url: 'https://x.com/geek_pjt/status/1891056762037453123'
      },
      {
        title: 'すごい証明写真機',
        image: [syoumei],
        detail: 'プレゼンテーションを盛り上げるchrome拡張。\nプレゼンテーション中にもらったコメントをプレゼンターのスクリーンリアルタイムで表示・コメントデータの保存ができる',
        skills: ['React', 'Hono', 'Cloudflare'],
        member: 'チーム',
        url: 'https://chromewebstore.google.com/detail/%E3%81%99%E3%81%94%E3%81%84%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3/ebfkmjmlfclbgbdflgkegbkjjljhjjga?authuser=0&hl=ja'
      },
      {
        title: 'すごい実況雑談版',
        image: [presentation],
        detail: 'プレゼンテーションを盛り上げるchrome拡張。\nプレゼンテーション中にもらったコメントをプレゼンターのスクリーンリアルタイムで表示・コメントデータの保存ができる',
        skills: ['React', 'Go', 'Cloudflare', 'Docker'],
        member: 'チーム',
        url: 'https://chromewebstore.google.com/detail/%E3%81%99%E3%81%94%E3%81%84%E5%AE%9F%E6%B3%81%E9%9B%91%E8%AB%87%E7%89%88/laiclcbminpoiomeoobbbbiajcecelpn?authuser=0&hl=ja'
      },
      {
        title: 'すごいタブ整理',
        image: [tab],
        detail: 'タブの並びを整理するChrome拡張',
        skills: ['HTML', 'CSS', 'JavaScript'],
        member: '個人',
        url: 'https://chromewebstore.google.com/detail/%E3%81%99%E3%81%94%E3%81%84%E3%82%BF%E3%83%96%E6%95%B4%E7%90%86/fldmahcldfbpeghkleaelfhdpphjfooj?hl=ja&utm_source=ext_sidebar'
      },
      {
        title: '約束の大地',
        image: [work],
        detail: '直近の予定を新しいタブで表示するChrome拡張',
        skills: ['HTML', 'CSS', 'JavaScript'],
        member: 'チーム',
        url: 'https://x.com/geek_pjt/status/1880902430428459388'
      },
      {
        title: '108の金',
        image: [bell],
        detail: '年越しの瞬間に鐘を108回鳴らすサイト\nおみくじもあるよ',
        skills: ['React', 'Next.js', 'tailwindcss', 'Three.js'],
        member: 'チーム',
        url: 'https://bell.noonyuu.com/'
      },
      {
        title: '叫流式便器',
        image: [benkiHard, benkiWeb],
        detail: '憎しみの気持ちを叫び心のうんこを流す便器',
        skills: ['React', 'Three.js', 'tailwindcss', 'Go', 'Docker', 'Cloudflare', 'MongoDB'],
        member: 'チーム',
        url: 'https://benki.noonyuu.com/'
      },
      {
        title: '国会劇場',
        image: [diet, diet2],
        detail: 'わかりにくい国会会議の内容を楽しく観れます！',
        skills: ['React', 'TypeScript', 'tailwindcss', 'Docker', 'Python', 'MySQL', 'Cloudflare', 'OpenAI'],
        member: 'チーム',
        url: 'https://diet-theater.noonyuu.com/'
      },

      {
        title: 'RideClock',
        image: [raidclock],
        detail: '時刻表をウィジェットに表示するアプリ',
        skills: ['Swift', 'OpenAI', 'firebase'],
        member: 'チーム'
      },
      // { title: '叫流式便器', image: raidclock, detail: '時刻表をウィジェットに表示するアプリ', skills: ['Swift', 'OpenAI', 'firebase'], member: 'チーム', url: 'https://raid-clock.noony' },
      {
        title: 'ムーブメントアーム',
        image: [move],
        detail: 'モジュールと手の動きが連動していて動きに合わせてスライドを操作できる',
        skills: ['c++'],
        member: 'チーム',
        url: 'https://protopedia.net/prototype/5153'
      },
      { title: '駅ナビ', image: [station], detail: '大型駅内の移動ルートを動画で案内してくれるアプリ', skills: ['Flutter', 'firebase'], member: 'チーム' },
      {
        title: 'Metal Dragon(Cheifoon)',
        image: [cheifoon],
        detail: '調味料を自動で計測する機械とアプリ',
        skills: ['Flutter', 'Go', 'Cloudflare', 'MySQL', 'Docker'],
        member: 'チーム',
        url: 'https://protopedia.net/prototype/5053'
      },
      {
        title: 'SummarizeMe',
        image: [sum],
        detail: 'ランダムに与えられるお題について制限時間内に記事を書き、記事の良さを競う',
        skills: ['Next.js', 'TypeScript', 'tailwindcss', 'Docker', 'Go', 'MySQL'],
        member: 'チーム'
      },
      { title: 'portfolio', image: [profile], detail: '当サイト', skills: ['Next.js', 'TypeScript', 'tailwindcss', 'Docker'], member: '個人' },
      {
        title: 'TunaGari',
        image: [tuna],
        detail: '2つの単語のつながりから生成された画像を元にアイディアを出すアイディア出し支援サイト',
        skills: ['React', 'TypeScript', 'tailwindcss', 'firebase'],
        member: 'チーム'
      },
      {
        title: '言葉の泉',
        image: [fountain],
        detail: 'ハッカソのアイディアソンの中で技術力のある人の会話など聞き逃した時どうしよう...という問題を解決します！',
        skills: ['React', 'TypeScript', 'tailwindcss', 'Go'],
        member: 'チーム',
        url: 'https://fountain-of-words.noonyuu.com/'
      }
    ]
    return list
  }
}
