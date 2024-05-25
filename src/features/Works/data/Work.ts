import move from '../images/move.jpg'
import station from '../images/station.png'
import cheifoon from '../images/cheifoon.jpg'
import sum from '../images/sum.png'
import diet from '../images/diet.png'
import profile from '../images/profile.png'

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
      { title: 'ムーブメントアーム', image: move, detail: 'モジュールと手の動きが連動していて動きに合わせてスライドを操作できる', skills: ['BLE通信', 'c++'], member: 'チーム' },
      { title: '駅ナビ', image: station, detail: '大型駅内の移動ルートを動画で案内してくれるアプリ', skills: ['Flutter', 'firebase'], member: 'チーム' },
      { title: 'Metal Dragon(Cheifoon)', image: cheifoon, detail: '調味料を自動で計測する機械とアプリ', skills: ['flutter', 'Go', 'Cloudflare', 'proxmox', 'MySQL', 'Docker'], member: 'チーム' },
      {
        title: 'SummarizeMe',
        image: sum,
        detail: 'ランダムに与えられるお題について制限時間内に記事を書き、記事の良さを競う',
        skills: ['Next.js', 'TypeScript', 'tailwind css', 'Docker', 'Go', 'MySQL'],
        member: 'チーム'
      },
      {
        title: '国会劇場',
        image: diet,
        detail: 'わかりにくい国会中継をチャット形式で要約しわかりやすく',
        skills: ['React', 'TypeScript', 'tailwind css', 'Docker', 'Python', 'MySQL', 'Cloudflare', 'proxmox', 'OpenAI'],
        member: 'チーム',
        url: 'https://diet-theater.noonyuu.com/'
      },
      { title: 'portfolio', image: profile, detail: '当サイト', skills: ['Next.js', 'TypeScript', 'tailwind css', 'Docker'], member: '個人' }
    ]
    return list
  }
}
