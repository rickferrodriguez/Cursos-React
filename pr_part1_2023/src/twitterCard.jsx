import {useState} from 'react'

export default function TwitterCard ({userName, name, isFollowing}) {
  const follow = isFollowing ? 'Siguiendo' : 'Seguir'
  const imgUrl = `https://unavatar.io/${userName}`

  return (
    <article className="tw-card">
      <div className="tw-profile">
        <picture>
          <img className="tw-avatar" src={imgUrl} alt=""></img>
        </picture>
        <div className="tw-group-name">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
        <button className="btn-follow" type="button">{follow}</button>
      </div>
    </article>
  )
}
