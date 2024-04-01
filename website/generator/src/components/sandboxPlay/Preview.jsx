import React from 'react'
import {
  SandpackPreview,
  SandpackConsole,
} from '@codesandbox/sandpack-react'
import clsx from 'clsx'




export default function Preview({ isPreview }) {
  return (
    <>
      <div className="rounded-b-lg bg-zinc-900 p-4">
        <div
          className={clsx(
            !isPreview ? 'hidden' : 'block',
            'overflow-hidden rounded bg-white p-1'
          )}
        >
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </div>

        <div
          className={clsx(
            isPreview ? 'hidden' : 'block',
            'min-h-[160px] overflow-hidden rounded'
          )}
        >
          <SandpackConsole
            standalone
            resetOnPreviewRestart
            showHeader={false}
          />
        </div>
      </div>
    </>
  )
}