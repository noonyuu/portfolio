import move from '../images/move.jpg'
import station from '../images/station.png'
import cheifoon from '../images/cheifoon.jpg'
import sum from '../images/sum.png'
import diet from '../images/diet.png'
import profile from '../images/profile.png'
import tuna from '../images/tunagari.webp'
import fountain from '../images/fountain.png'

export interface WorkItem {
  title: string
  image: any
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
       title: '国会劇場',
       image: diet,
       detail: 'わかりにくい国会会議の内容を楽しく観れます！',
       skills: ['React', 'TypeScript', 'tailwindcss', 'Docker', 'Python', 'MySQL', 'Cloudflare', 'OpenAI'],
       member: 'チーム',
       url: 'https://diet-theater.noonyuu.com/'
     },
     {
       title: 'ムーブメントアーム',
       image: move,
       detail: 'モジュールと手の動きが連動していて動きに合わせてスライドを操作できる',
       skills: ['BLE通信', 'c++'],
       member: 'チーム',
       url: 'https://protopedia.net/prototype/5153'
     },
     { title: '駅ナビ', image: station, detail: '大型駅内の移動ルートを動画で案内してくれるアプリ', skills: ['Flutter', 'firebase'], member: 'チーム' },
     {
       title: 'Metal Dragon(Cheifoon)',
       image: cheifoon,
       detail: '調味料を自動で計測する機械とアプリ',
       skills: ['flutter', 'Go', 'Cloudflare', 'proxmox', 'MySQL', 'Docker'],
       member: 'チーム',
       url: 'https://protopedia.net/prototype/5053'
     },
     {
       title: 'SummarizeMe',
       image: sum,
       detail: 'ランダムに与えられるお題について制限時間内に記事を書き、記事の良さを競う',
       skills: ['Next.js', 'TypeScript', 'tailwindcss', 'Docker', 'Go', 'MySQL'],
       member: 'チーム'
     },
     { title: 'portfolio', image: profile, detail: '当サイト', skills: ['Next.js', 'TypeScript', 'tailwind css', 'Docker'], member: '個人' },
     {
       title: 'TunaGari',
       image: tuna,
       detail: '2つの単語のつながりから生成された画像を元にアイディアを出すアイディア出し支援サイト',
       skills: ['React', 'TypeScript', 'tailwind css', 'Firebase'],
       member: 'チーム'
     },
     {
       title: 'TunaGari',
       image: fountain,
       detail: 'ハッカソのアイディアソンの中で技術力のある人の会話など聞き逃した時どうしよう...という問題を解決します！',
       skills: ['React', 'TypeScript', 'tailwind css', 'Go'],
       member: 'チーム',
       url: 'https://fountain-of-words.noonyuu.com/'
     }
   ]
    return list
  }
}
