export function DetailProduct ({ id }) {
  const [detail, setDetail] = useState({})
  return (
    <article>
      <h2>{detail.title}</h2>
    </article>
  )
}
