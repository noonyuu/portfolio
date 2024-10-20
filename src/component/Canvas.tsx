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

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')

      if (context) {
        // Canvas のサイズを設定
        canvas.width = props.cw * 0.92
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
  }, [props.x, props.y, props.ct, props.cl]) // 依存関係リストにprops.ct, props.clも追加

  return <canvas ref={canvasRef} style={{ position: 'absolute', left: `${props.cl}px`, zIndex: 1 }} className="canvas hidden md:block" />
}

export default Canvas
