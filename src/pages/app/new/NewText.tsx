import {
  DraftingCompass,
  FileType,
  Paperclip,
  Send,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
import DraftEditor from "../../../components/DraftEditor";
import { TextType } from "../../../libs/types";

const NewText = () => {
  const [title, setTitle] = useState("");

  const inDraft = JSON.parse(localStorage.getItem("draft")!);
  const text: TextType = {
    id: "",
    content: [
      {
        content: "",
        id: String(Math.floor(Math.random() * (9999999 - 500000 + 1)) + 500000),
        type: "heading",
      },
    ],
    status: "draft",
    title: title,
    createdAt: String(new Date()),
    modifiedAt: String(new Date()),
  };
  const [updatedText, setUpdatedText] = useState<TextType>(inDraft || text);

  const publicarText = () => {
    const getTexts: TextType[] = JSON.parse(localStorage.getItem("texts")!);
    const copyText: TextType = {
      ...updatedText,
      status: "publish",
      id: String(Math.floor(Math.random() * (9999999 - 500000 + 1)) + 500000),
      title: title,
    };

    if (getTexts) {
      getTexts.push(copyText);
      localStorage.setItem("texts", JSON.stringify(getTexts));
      console.log(getTexts);
    } else {
      localStorage.setItem("texts", JSON.stringify([copyText]));
    }
    localStorage.removeItem("draft");

    document.location.replace("/app");
  };

  useEffect(() => {
    setTitle(updatedText.content[0].content);
    localStorage.setItem("draft", JSON.stringify(updatedText));
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
            <span className="text-sm font-semibold">{text.title}</span>
          </p>

          <div className="flex gap-2">
            <button className="text-white border border-gray-500/30 cursor-pointer font-semibold text-xs px-2   py-1 rounded-sm flex items-center ">
              <Trash className="w-3 mr-1" />
              Excluir{" "}
            </button>
            {text.status === "draft" ? (
              <button
                onClick={() => {
                  publicarText();
                }}
                className="text-white bg-blue-500 text-xs px-2 cursor-pointer  py-1 rounded-sm flex items-center "
              >
                <Send className="w-3 mr-1" />
                Publicar{" "}
              </button>
            ) : (
              <button className="text-white bg-background-3 text-xs px-2 cursor-pointer  py-1 rounded-sm flex items-center ">
                <DraftingCompass className="w-3 mr-1" />
                Rascunho{" "}
              </button>
            )}
          </div>
        </div>
      </header>

      <DraftEditor
        mode={"new"}
        updatedText={updatedText}
        setUpdatedText={setUpdatedText}
      />
    </main>
  );
};

export default NewText;
