import { useState, useEffect } from 'react';
import { Video } from './Video'
import { VideoList } from './VideoList'

export const VideoArea = () => {
  const [ file, setFile ] = useState('')
  const [ files, setFiles ] = useState([])
  useEffect(() => {
    const getVideos = async() => {
      const response = await fetch('videos')
      const data = await response.json()
      setFiles(data)
      // データがある場合は最初のファイルをセットする
      data.length ? setFile(data[0].fileName) : setFile('')
    }
    getVideos()
  }, [])
  return(
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
  )
}