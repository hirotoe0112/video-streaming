import { useState, useEffect } from 'react';
import { Video } from './Video'
import { VideoList } from './VideoList'

export const VideoArea = () => {
  const [ file, setFile ] = useState('')
  const [ files, setFiles ] = useState([])
  const [ loaded, setLoaded ] = useState(false)
  useEffect(() => {
    const getVideos = async() => {
      const response = await fetch('videos')
      const data = await response.json()
      setFiles(data)
      // データがある場合は最初のファイルをセットする
      data.length ? setFile(data[0].fileName) : setFile('')
      // ローディング表示をわかりやすくするためにあえて0.5秒待つ
      // 実データが多くなり時間がかかるようになったら不要
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }
    getVideos()
  }, [])
  return(
    loaded ?
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <VideoList videos={files} setFile={setFile}/>
          </div>
          <div className="col-9">
            <Video
              title={file}
            />
          </div>
        </div>
      </div>
    </>
    :
    <>
      <div className="container">
        Loading...
      </div>
    </>
  )
}