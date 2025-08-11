'use client'
import { useEffect, useState } from 'react'

type Message = { id: number; text: string }

export default function Home() {
  const [msgs, setMsgs] = useState<Message[]>([])
  useEffect(() => {
    fetch('/api/messages').then(r => r.json()).then(setMsgs)
  }, [])
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Next.js + Postgres</h1>
      <ul className="list-disc pl-5">
        {msgs.map(m => <li key={m.id}>{m.text}</li>)}
      </ul>
    </main>
  )
}
