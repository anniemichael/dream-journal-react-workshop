import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-neutralLight min-h-screen">
      <h1  className="text-3xl font-bold text-accent mb-6">My Dream Journal</h1>
      <div>Dream form</div>
      <div>Dreams list</div>
    </div>
  )
}

export default App

