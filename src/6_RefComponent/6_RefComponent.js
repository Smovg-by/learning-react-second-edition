export function RefComponent () {
  let newTitle, newColor

  const submit = e => {
    e.preventDefault()
    console.log(newTitle.value)
    console.log(newColor.value)
  }

  return (
    <div>
      <hr/>
      <h3>Use REF to achieve data</h3>
    <form onSubmit={submit}>
      <input
        ref={title => (newTitle = title)}
        type='text'
        placeholder='title'
      ></input>
      <input
        ref={color => (newColor = color)}
        type='text'
        placeholder='color'
      ></input>
      <button>ADD</button>
    </form>
    <hr/>
    </div>
  )
}
