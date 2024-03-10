---
title: Prova di orchestra
description: Prova di orchestra.
slug: prova-di-orchestra
authors: gghigi
date: 2024-03-02
tags: [eightshift, boilerplate, blocks, plugins, colors, images, classes]
hide_table_of_contents: false
---

Tespiego prima del truncate questo testo

<!--truncate-->

## Dopo el truncate
import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackPreview, 
  SandpackFileExplorer,
  SandpackCodeEditor 
} from "@codesandbox/sandpack-react";
import { freeCodeCampDark } from "@codesandbox/sandpack-themes";

export const Testami = () => {
  const files = {}
  
  return (
    <SandpackProvider
      files={{
        "/App.js": `import Sub from './Sub';
export default function App() {
return (<div>
 <h1>Hello Sandpack</h1>
 <Sub />
</div>);
        }`,
        "/Sub.js": `export default function Sub() { return <h1>Hello Sandpack sub</h1>}`,
      }}
      theme={freeCodeCampDark} 
      template="react"
    >
        <SandpackCodeEditor   
            showTabs
            showLineNumbers={true}
            showInlineErrors
            wrapContent
            closableTabs 
        />
        <SandpackPreview/>
    </SandpackProvider>
  )  
}

<Testami />
