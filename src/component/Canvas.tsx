import { useRef, useEffect, FC } from 'react'

interface Props {
  x: number
  y: number
  cw: number
  ct: number
  cl: number
}

const Canvas: FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const resizeTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        // Canvas のサイズを設定
        const canvasWidth = Math.max(props.cw)
        canvas.width = canvasWidth
        canvas.height = props.ct

        // Canvas をクリア
        context.clearRect(0, 0, canvas.width, canvas.height)

        // 線のスタイルを設定
        context.strokeStyle = 'gray'
        context.lineWidth = 1

        // 線を描画
        context.beginPath()
        context.moveTo(0, props.ct) // 始点
        context.lineTo(props.x - props.cl, props.y) // 終点
        context.stroke()
      }
    }
  }, [props.x, props.y, props.ct, props.cl, props.cw])

  // リサイズイベントリスナー
  useEffect(() => {
    const handleResize = () => {
      // 既存のタイマーをクリア
      // リサイズが続いている間はリロードしないようにしてる
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current)
      }

      // 500msの間リサイズが行われなければページをリロード
      resizeTimerRef.current = window.setTimeout(() => {
        window.location.reload()
      }, 500)
    }

    // ウィンドウのサイズ変更時にリサイズイベントを発火
    window.addEventListener('resize', handleResize)

    // resizeイベントのリスナーを削除する
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', left: `${props.cl}px`, zIndex: 1 }} className="canvas hidden md:block" />
}

export default Canvas
