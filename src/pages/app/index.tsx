import { Eye, HeartCrack, Paperclip, Plus } from "lucide-react";
import { ParagraphType, TextType } from "../../libs/types";
import { formatarData } from "../../libs/utils";

const AppHome = () => {
  const data = JSON.parse(localStorage.getItem("texts")!);
  console.log(data);

  return (
    <main className="flex flex-col gap-5 w-full h-screen items-center">
      <header className="w-full h-16 flex justify-center py-2">
        <div className="flex container w-full h-full items-center justify-between bg-background-2 rounded px-2">
          <a
            href="/app"
            className="text-md cursor-pointer font-semibold flex items-center "
          >
            <Paperclip className="mr-1 w-4 text-blue-500" /> Edit.
            <span className="text-gray-400">or</span>
          </a>

          <p className="text-gray-400 flex items-center gap-1">
            <Eye className="w-4 text-blue-500" />
            Visão Geral
          </p>

          <div className="flex">
            <button
              onClick={() => {
                document.location.replace("/app/new");
              }}
              className="text-white cursor-pointer bg-blue-500 text-xs px-2   py-1 rounded-sm flex items-center "
            >
              <Plus className="w-4" />
              Novo Texto
            </button>
          </div>
        </div>
      </header>

      {data && data.length > 0 ? (
        <>
          {" "}
          <section className="w-full flex justify-center">
            <div className="flex w-full container">
              <div className="table w-full">
                <table className="w-full">
                  <thead className="w-full">
                    <tr>
                      <th className="">ID</th>
                      <th>Titulo</th>
                      <th>Resumo</th>
                      <th className="5">
                        {" "}
                        <div className="line-clamp-1 overflow-ellipsis">
                          <p className="text-ellipsis">Q. Paragrafos</p>
                        </div>
                      </th>
                      <th className="max-sm:hidden">
                        <div className="line-clamp-1 overflow-ellipsis">
                          <p className="text-ellipsis"> Ult. Atualização</p>
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className="w-full">
                    {data.map((text: TextType) => (
                      <tr key={text.id} className="w-full">
                        <td className="max-w-[100px]">
                          <div className="line-clamp-1 text-gray-400">
                            {text.id}
                          </div>
                        </td>
                        <td className="max-w-[200px]">
                          <div className="line-clamp-1 overflow-ellipsis">
                            <p className="text-ellipsis">{text.title}</p>
                          </div>
                        </td>
                        <td className="max-w-[200px]">
                          <div className="overflow-ellipsis line-clamp-1">
                            <p className="text-ellipsis">
                              {text?.content
                                .filter(
                                  (value: ParagraphType) =>
                                    value.type === "heading"
                                )
                                .map((item) => item.content) // Acessando o texto do item
                                .join(", ")}{" "}
                              {/* Se houver mais de um, separa por vírgula */}
                            </p>
                          </div>
                        </td>
                        <td>{text.content.length}</td>
                        <td className="max-sm:hidden">
                          {formatarData(text.modifiedAt)}
                        </td>
                        <td>
                          <a href={`/app/${text.id}`}>
                            <Eye className="w-4 cursor-pointer hover:scale-95 active:scale-90 transition-all" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="w-44">
                <HeartCrack className="mr-1 w-44 block text-blue-500" />
              </p>{" "}
              <h1 className="text-lg font-semibold">Nada criado ainda</h1>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default AppHome;
