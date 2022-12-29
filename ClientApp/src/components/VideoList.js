export const VideoList = ({videos, setFile}) => {
  const listItem = videos.map((video) => {
    return (
      <li
        className="list-group-item text-truncate"
        key={video.fileName}
        role="button"
        onClick={(e) => {
          setFile(e.target.innerText)
        }}
      >{video.fileName}</li>
    )
  })
  return (
    <>
      <ul className='list-group'>
        {listItem}
      </ul>
    </>
  )
}