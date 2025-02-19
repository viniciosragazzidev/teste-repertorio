import { FileType, Paperclip, Send, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DraftEditor from "../../../components/DraftEditor";
import { TextType } from "../../../libs/types";

const CurrentText = () => {
  const [title, setTitle] = useState("");

  const params = useParams();
  const texts: TextType[] = JSON.parse(localStorage.getItem("texts")!);
  const text: TextType = texts.filter(
    (item: TextType) => item.id === params.id
  )[0];
  const [updatedText, setUpdatedText] = useState<TextType>(text);

  const editItemAndAddInLocalStorage = () => {
    // Atualizando o texto existente
    const updatedTexts = texts.map((text: TextType) =>
      text.id === updatedText.id
        ? { ...updatedText, modifiedAt: String(new Date()), title: title }
        : text
    );

    // Salvando a nova lista no localStorage
    localStorage.setItem("texts", JSON.stringify(updatedTexts));

    // Redirecionando para a página principal
    document.location.replace("/app");
  };

  const deleteText = (id: string) => {
    const getTexts: TextType[] = JSON.parse(localStorage.getItem("texts")!);

    if (getTexts) {
      const filteredTexts = getTexts.filter((item: TextType) => item.id !== id);
      localStorage.setItem("texts", JSON.stringify(filteredTexts));
    }

    document.location.replace("/app");
  };
  useEffect(() => {
    setTitle(updatedText.content[0].content);
  }, [updatedText]);
  return (
    <main className="flex flex-col gap-5">
      <header className="w-full h-16 flex justify-center py-2 relative  top-0 left-0">
        <div className="flex container w-full h-12  items-center fixed justify-between bg-background-2  backdrop-blur-3xl backdrop-opacity-80 z-50 rounded px-2">
          <a
            href="/app"
            className="text-md cursor-pointer font-semibold flex items-center "
          >
            <Paperclip className="mr-1 w-4 text-blue-500" /> Edit.
            <span className="text-gray-400">or</span>
          </a>

          <p className="text-gray-400 flex items-center gap-1">
            <FileType className="w-4 text-blue-500" />
            <span className="text-sm font-semibold">{title}</span>
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                deleteText(updatedText.id);
              }}
              className="text-white border border-gray-500/30 cursor-pointer font-semibold text-xs px-2   py-1 rounded-sm flex items-center "
            >
              <Trash className="w-3 mr-1" />
              Excluir{" "}
            </button>
            {updatedText.status === "draft" ? (
              <button className="text-white bg-blue-500 text-xs px-2 cursor-pointer  py-1 rounded-sm flex items-center ">
                <Send className="w-3 mr-1" />
                Publicar{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  editItemAndAddInLocalStorage();
                }}
                className="text-white bg-blue-500 text-xs px-2 cursor-pointer  py-1 rounded-sm flex items-center "
              >
                <Send className="w-3 mr-1" />
                Editar{" "}
              </button>
            )}
          </div>
        </div>
      </header>

      <DraftEditor
        mode="view"
        setUpdatedText={setUpdatedText}
        updatedText={updatedText}
      />
    </main>
  );
};

export default CurrentText;
