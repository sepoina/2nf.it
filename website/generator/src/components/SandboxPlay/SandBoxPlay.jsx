/*

     https://www.tybarho.com/articles/importing-testing-nextjs-code-playground

*/


import React from 'react'
import {
    SandpackProvider,
    SandpackLayout,
} from '@codesandbox/sandpack-react'

import { theme } from './Theme/theme.jsx'
import TitleBar from './navBar/TitleBar.jsx'
import "allotment/dist/style.css";
import "./Theme/SandBoxPlay.css";
import clsx from 'clsx';
import ContentShow from './Content/ContentShow.jsx';

export function SandBoxPlay({
    files,
    customSetup = {
        dependencies: {
            //  "tailwindcss": "^3.4.3"
        }
    },
    title,
    setup = {}
}) {


    /* .............. SETUP ............... 
        setup={{
            height:'50vh',
            code:'70%',
            preview:'30%',
        }}
    */
    // tipo di visualizzazione
    const [viewCode, setViewCode] = React.useState(setup.code ? true : false);
    const [viewPreview, setViewPreview] = React.useState(setup.preview ? true : false);
    const [viewConsole, setViewConsole] = React.useState(setup.console ? true : false);
    const [viewPortrait, setViewPortrait] = React.useState(setup.portrait ? true : false);
    const [viewFull, setViewFull] = React.useState(false);


    return (
        <div className={viewFull ? 'spfullscreen' : ''}>
            <div >
                <SandpackProvider
                    template="react"
                    theme={theme}
                    files={files}
                    customSetup={customSetup}
                    options={{
                        //   externalResources: [ "https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css"]
                    }}
                >
                    <SandpackLayout
                        className={clsx(
                            "!-mx-4 flex flex-col flex-nowrap justify-start !rounded-none sm:!mx-0 sm:!rounded-lg ",
                            setup.height ? setup.height : 'h-[50vh]'
                        )}>
                        <TitleBar
                            title={title}
                            viewCode={viewCode}
                            setViewCode={setViewCode}
                            viewPreview={viewPreview}
                            setViewPreview={setViewPreview}
                            viewConsole={viewConsole}
                            setViewConsole={setViewConsole}
                            viewPortrait={viewPortrait}
                            setViewPortrait={setViewPortrait}
                            viewFull={viewFull}
                            setViewFull={setViewFull}
                        />
                        { /* Content -------- */}
                        <div className="w-full flex grow">
                            <div className='relative h-full w-full'>
                                <div className='duenfvertical absolute top-0 left-0 right-0 bottom-0 bg-red-900'>
                                    { /* trik necessario perchè allotment ha un difetto di ricalcolo */
                                        viewPortrait
                                            ? <ContentShow key={0} setup={setup} viewCode={viewCode} viewPreview={viewPreview} viewConsole={viewConsole} viewPortrait={true} />
                                            : <ContentShow key={1} setup={setup} viewCode={viewCode} viewPreview={viewPreview} viewConsole={viewConsole} viewPortrait={false} />
                                    }
                                </div>
                            </div>
                        </div>
                    </SandpackLayout>
                </SandpackProvider>
            </div>
        </div>
    )
}

