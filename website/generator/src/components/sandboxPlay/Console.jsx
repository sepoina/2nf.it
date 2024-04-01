import React, { useState, useEffect } from 'react'
import {
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react'
import clsx from 'clsx'

import {RefreshIcon } from './Icons.jsx'



export default function Console({ isPreview, setMode }) {
  const [reloading, setReloading] = useState(false)
  const { sandpack, listen } = useSandpack()
  const { refresh } = useSandpackNavigation()
  const activeClass = 'border-b border-amber-500'

  useEffect(() => {
    // listens for any message dispatched between sandpack and the bundler
    const stopListening = listen((msg) => {
      if (msg?.status === 'idle') {
        setReloading(false)
      }
    })

    return () => {
      // unsubscribe
      stopListening()
    }
  }, [listen])

  return (
    <div className="flex items-center justify-between border border-zinc-700 bg-zinc-900 px-3">
      <div>
        <button
          className={clsx('mr-6 py-3', isPreview ? activeClass : null)}
          onClick={() => setMode('result')}
        >
          Preview
        </button>
        <button
          className={clsx('py-3', !isPreview ? activeClass : null)}
          onClick={() => setMode('console')}
        >
          Console
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setReloading(true)
            refresh()
          }}
          disabled={sandpack?.status === 'idle'}
        >
          <RefreshIcon
            className={clsx(
              'h-5 w-5 text-zinc-400',
              reloading && 'animate-spin',
              sandpack?.status === 'idle' && 'text-zinc-600'
            )}
          />
        </button>
      </div>
    </div>
  )
}