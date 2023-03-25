export function CheckBoxFilter ({ handle, value, children }) {
  return (
    <div className='flex gap-2'>
      <input type='checkbox' onChange={handle} value={value} />
      <label>{children}</label>
    </div>
  )
}
