import { SandBoxPlay } from './../../components/SandboxPlay/SandBoxPlay.jsx';
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
            code:'50%', // dimensione del codice (css) o false
            preview:'30%', // dimensione preview (css) o false
            console:false, // dimensione console o false
            portrait:true,// orientamento
        }}

    />
}