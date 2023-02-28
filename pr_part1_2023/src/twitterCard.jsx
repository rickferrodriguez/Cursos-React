import {useState} from 'react'

export default function TwitterCard ({children, userName, initialIsFollowing}) {
  const imgUrl = `https://unavatar.io/${userName}`

  const [follow, setFollow] = useState(initialIsFollowing)

  const text = follow ? 'Siguiendo' : 'Seguir'
  const buttonClassName = follow 
    ? 'btn-follow is-following' 
    : 'btn-follow'

  const handleClick = () => {
    setFollow(!follow)
  }


  return (
    <article className="tw-card">
      <div className="tw-profile">
        <picture>
          <img className="tw-avatar" src={imgUrl} alt=""></img>
        </picture>
        <div className="tw-group-name">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
        <button 
          onClick={handleClick}
          className={buttonClassName} 
          type="button"
        >
          <span className="tw-follow-text">{text}</span>
          <span className="stopFollowing">Dejar de Seguir</span>
        </button>
      </div>
    </article>
  )
}
