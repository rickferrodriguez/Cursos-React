export function Note ({content, date}) {
  return (
    <li>
      <p>{content}</p>
      <small><time>{date}</time></small>
    </li>
  )
}

