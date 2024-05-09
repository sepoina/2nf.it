import React from 'react'
import {
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { MultiIcon } from './Icons/Icons.jsx'
import Checkbox from './Checkbox.jsx';
import ReloadButton from './ReloadButton.jsx';

export default function TitleBar({ title = 'Code Playground', viewCode, setViewCode, viewPreview, setViewPreview, viewConsole, setViewConsole, viewPortrait, setViewPortrait, viewFull, setViewFull }) {
  const { sandpack } = useSandpack()
  const { resetAllFiles } = sandpack


  return (
    <div className="mb-0  flex items-center justify-between bg-zinc-700 px-3 py-2 sm:rounded-t-lg">
      <span className="align-center flex">
        <Checkbox
          state={viewCode}
          setState={setViewCode}
          SelectedIcon={<MultiIcon kind="code" selected={true} />}
          NoSelectedIcon={<MultiIcon kind="code" />}
        />
        <Checkbox
          state={viewPreview}
          setState={setViewPreview}
          SelectedIcon={<MultiIcon kind="cube" selected={true} />}
          NoSelectedIcon={<MultiIcon kind="cube" />}
        />
        <Checkbox
          state={viewConsole}
          setState={setViewConsole}
          SelectedIcon={<MultiIcon kind="bug" selected={true} />}
          NoSelectedIcon={<MultiIcon kind="bug" />}
        />
        {/*<Checkbox state={viewPreview} setState={setViewPreview} SelectedIcon={PreviewIcon} NoSelectedIcon={PreviewIcon} />
        <Checkbox state={viewConsole} setState={setViewConsole} SelectedIcon={DebugIcon} NoSelectedIcon={DebugIcon} />*/}
      </span>
      <span className="text-sm font-bold text-white">{title}</span>
      <span>

        <button className="" onClick={() => setViewPortrait(p => !p)}>
          {
            viewPortrait
              ? <MultiIcon kind="toLandscape" className="mr-4 h-5 w-5 text-zinc-300" />
              : <MultiIcon kind="toPortrait" className="mr-4 h-5 w-5 text-zinc-300" />
          }
        </button>
        <button className="" onClick={() => setViewFull(p => !p)}>
          {
            viewFull
              ? <MultiIcon kind="minimize" className="mr-4 h-5 w-5 text-zinc-300" />
              : <MultiIcon kind="maximize" className="mr-4 h-5 w-5 text-zinc-300" />
          }
        </button>
        <ReloadButton />
        <button className="" onClick={() => resetAllFiles()}>
          <MultiIcon kind="restart" className="mr-4 h-5 w-5 text-zinc-300" />
        </button>
        <span className="inline-block overflow-hidden w-5 h-5 text-ellipsis">
          <UnstyledOpenInCodeSandboxButton className="relative">
            <MultiIcon kind="external" className="h-5 w-5 text-zinc-300" />
          </UnstyledOpenInCodeSandboxButton>
        </span>
      </span>
    </div>
  )
}



// <Checkbox state={state} setState={setState} SelectedIcon={ResetIcon} NoSelectedIcon={ArrowTopRightIcon} />

