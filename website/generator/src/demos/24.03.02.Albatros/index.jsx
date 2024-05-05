import { SandBoxPlay } from './../../components/sandboxPlay/SandBoxPlay.jsx';
import App from '!!raw-loader!./App.js';
import Sub from '!!raw-loader!./Sub.js';
export default function Render() {

    return <SandBoxPlay

        title="Albatros Demo"
        files={{
            "/App.js": App,
            "/Sub.js": Sub
        }}
        setup={{
            height:'h-[60vh]', // altezza box in formato tailwind
            code:'50%',
            preview:'30%',
           // console:'20%',
            portrait:true,
        }}

    />
}