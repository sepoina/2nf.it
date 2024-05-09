import React from 'react'
import {
    SandpackCodeEditor,
    SandpackConsole,
    SandpackPreview
} from '@codesandbox/sandpack-react'

import { Allotment } from "allotment";

export default function ContentShow({ setup, viewCode, viewPreview, viewConsole, viewPortrait }) {
    return (
        <Allotment vertical={viewPortrait} >
            { /* ----------------------code ---------------------- */}
            <Allotment.Pane key={0} visible={viewCode} preferredSize={setup.code || ''} >
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-yellow-900 '>
                    <div className="rounded-b-lg bg-zinc-900 relative h-full">
                        <SandpackCodeEditor showTabs />
                    </div>
                </div>
            </Allotment.Pane>
            { /* ----------------------code ---------------------- */}
            <Allotment.Pane key={1} visible={viewPreview} preferredSize={setup.preview || ''}>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-yellow-900 overflow-auto'>
                    <div className="rounded-b-lg bg-zinc-900 p-4 h-full">
                        <div className='overflow-hidden rounded bg-white p-1 h-full'>
                            <SandpackPreview
                                showOpenInCodeSandbox={false}
                                showRefreshButton={false}
                                viewportOrientation='landscape'
                            />
                        </div>
                    </div>
                </div>
            </Allotment.Pane>
            { /* ----------------------Console ---------------------- */}
            <Allotment.Pane key={2} visible={viewConsole} preferredSize={setup.console || ''}>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-yellow-900 overflow-auto'>
                    <div className="rounded-b-lg bg-zinc-800 p-4 h-full">
                        <div className='overflow-auto rounded h-full bg-zinc-800 p-1' >
                            <SandpackConsole
                                resetOnPreviewRestart
                                showHeader={true}
                            />
                        </div>
                    </div>
                </div>
            </Allotment.Pane>
        </Allotment>
    );
}

