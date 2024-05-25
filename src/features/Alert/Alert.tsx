const Alert = () => {
  let alert = true // alertの表示
  const alertNum = 0 // alertの番号
  // alertの情報
  let info = [
    'ただいま建築中。。。' // 0: メッセージ
  ]

  return (
    <>
      {alert && (
        <div className="z-40 rounded border border-blue-500 bg-blue-100 px-4 py-3 text-blue-700" role="alert">
          <p className="font-bold">{info[alertNum]}</p>
        </div>
      )}
    </>
  )
}

export default Alert
