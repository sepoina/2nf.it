import React, { useState } from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
} from '@codesandbox/sandpack-react'

import {theme} from './theme.jsx'
import TitleBar from './TitleBar.jsx'
import Console from './Console.jsx'
import Preview from './Preview.jsx'


export function CodePlayground() {
  const [mode, setMode] = useState('result')
  const isPreview = mode === 'result'

  const previewProps = {
    mode,
    setMode,
    isPreview,
  }

  return (
    <SandpackProvider template="react" theme={theme}>
      <SandpackLayout className="!-mx-4 !block !rounded-none sm:!mx-0 sm:!rounded-lg">
        <TitleBar />
        <SandpackCodeEditor showTabs />
        <Console {...previewProps} />
        <Preview {...previewProps} />
      </SandpackLayout>
    </SandpackProvider>
  )
}