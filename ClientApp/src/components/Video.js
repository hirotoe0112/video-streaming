import ReactPlayer from 'react-player'

export const Video = ({title}) => {
  const domain = process.env.REACT_APP_DOMAIN
  const url = `${domain}/${title}.m3u8`
  return(
    <>
      <div>
        <h3>{title}</h3>
        <ReactPlayer
          url={url}
          controls
        />
      </div>
    </>
  )
}