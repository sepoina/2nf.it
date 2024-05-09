import React, { useState, useEffect } from 'react'
import {
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react'
import clsx from 'clsx'

import { MultiIcon } from './Icons/Icons.jsx'



export default function ReloadButton() {
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
    <button
      onClick={() => {
        setReloading(true)
        refresh()
      }}
      disabled={sandpack?.status === 'idle'}
    >
      <MultiIcon kind="refresh"
        className={clsx(
          'h-5 w-5 mr-4 text-zinc-300',
          reloading && 'animate-spin',
          sandpack?.status === 'idle' && 'text-zinc-600'
        )}
      />
    </button>
  )
}