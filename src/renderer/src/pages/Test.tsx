const TestPage = () => {
  const handleClick = () => {
    window.electron.ipcRenderer.send('scheduler', '123')
  }

  return (
    <div>
      <button onClick={handleClick}>테스트 버튼</button>
    </div>
  )
}

export default TestPage
