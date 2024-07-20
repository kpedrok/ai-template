'use client'

import { useChat } from 'ai/react'

export default function AiChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div className='flex flex-col w-full h-full justify-between'>
      <div>
        {messages.map((m) => (
          <div key={m.id} className='whitespace-pre-wrap'>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className='p-4'>
        <input
          className='w-full p-2 border border-gray-300 rounded shadow-xl'
          value={input}
          placeholder='Say something...'
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
