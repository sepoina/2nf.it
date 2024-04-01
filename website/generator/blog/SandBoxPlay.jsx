import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackCodeEditor
  } from "@codesandbox/sandpack-react";
  import { monokaiPro } from "@codesandbox/sandpack-themes";
  export const Testami = () => {
  const files = {}
  
  return (
  <SandpackProvider template="react" theme={monokaiPro} files={{
  "/App.js": `import Sub from './Sub';
  export default function App() {
  return (<div>
  
   <h1>Hello Sandpack</h1>
   <Sub />
  </div>);
          }`,
          "/Sub.js": `export default function Sub() { return <h1>Hello Sandpack sub</h1>}`,
        }}>
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs
          showLineNumbers={false}
          showInlineErrors
          wrapContent
          closableTabs
        />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
    )  
  }