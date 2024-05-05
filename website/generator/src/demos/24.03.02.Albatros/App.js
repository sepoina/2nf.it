import Sub from './Sub';

export default function App() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            <div className="bg-blue-100 h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Hello Ginetto Sandpack</h1>
                <div className="space-x-4">
                    <button onClick={() => console.log("Button 1 - click!")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Pulsante 1
                    </button>
                    <button onClick={() => console.log("Button 2 - click!")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Pulsante 2
                    </button>
                </div>
                <Sub />
            </div>
        </>
    );
}