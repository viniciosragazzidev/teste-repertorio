import { Plus } from "lucide-react";

function App() {
  return (
    <>
      <main className="flex justify-center flex-col gap-2- w-full h-screen items-center gap-8">
        <h1 className="text-5xl font-bold">
          Edit.<span className="text-gray-500">io</span>
        </h1>{" "}
        <button
          onClick={() => {
            document.location.replace("/app");
          }}
          className="text-white cursor-pointer  border border-background-2 text-xs px-2   py-1 rounded-sm flex items-center "
        >
          <Plus className="w-4" />
          Começar
        </button>
      </main>
    </>
  );
}

export default App;
