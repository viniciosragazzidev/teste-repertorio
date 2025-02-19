import {
  BetweenHorizonalStart,
  GripVertical,
  Heading1,
  Pilcrow,
  Plus,
} from "lucide-react";
import { useRef } from "react";
import { ParagraphType, TextType } from "../libs/types";
import Paragraph from "./Paragraph";

const DraftEditor = ({
  updatedText,
  setUpdatedText,
}: {
  updatedText: TextType;
  setUpdatedText: (text: TextType) => void;
  mode: "new" | "view";
}) => {
  // Criando um objeto de referências para os parágrafos
  const paragraphRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>(
    {}
  );

  const handleContentChange = (id: string, content: string) => {
    const updatedContent = updatedText.content.map((item) =>
      item.id === id ? { ...item, content } : item
    );
    setUpdatedText({
      ...updatedText,
      content: updatedContent,
    });
  };

  const handleNewParagraph = () => {
    const newParagraph: ParagraphType = {
      id: String(Math.floor(Math.random() * (9999999 - 500000 + 1)) + 500000),
      content: "",
      type: "paragraph",
    };
    const newText = {
      ...updatedText, // Mantém os dados anteriores
      content: [...updatedText.content, newParagraph], // Adiciona o novo parágrafo
    };
    setUpdatedText(newText);

    setTimeout(() => {
      if (paragraphRefs.current[newParagraph.id]) {
        paragraphRefs.current[newParagraph.id]?.focus();
      }
    }, 100);
  };

  return (
    <section className="flex w-full justify-center flex-col items-center gap-4">
      <div className="container w-full flex gap-4 min-h-[400px]">
        <aside className="w-full h-full max-w-[250px] relative max-md:hidden">
          <div className="w-full h-full max-w-[250px] fixed bg-background-2 p-4">
            <header className="font-bold flex w-full justify-between pb-2 border-b text-sm border-gray-600/40 mb-4">
              Elementos do texto
              <BetweenHorizonalStart className="w-4" />
            </header>
            <div
              id="aside"
              className="flex flex-col gap-3 overflow-y-scroll h-[400px] scroll-smooth"
            >
              {updatedText.content.map((item: ParagraphType) => (
                <div
                  key={item.id}
                  className="flex bg-background-3 hover:bg-background-3/50 transition-all py-2 px-2 w-full justify-between"
                >
                  <span className="font-semibold flex items-center gap-2 text-sm">
                    {item.type === "heading" ? (
                      <Heading1 className="w-4" />
                    ) : (
                      <Pilcrow className="w-4" />
                    )}
                    {item.type === "heading" ? "Header" : "Paragraph"}
                  </span>
                  <GripVertical className="w-4 cursor-pointer opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex w-full h-full mb-8">
          <div className="content flex flex-col w-full">
            {updatedText.content.map((paragraph) => (
              <Paragraph
                key={paragraph.id}
                paragraph={paragraph}
                onContentChange={handleContentChange}
                paragraphRefs={paragraphRefs} // Passando as referências para os parágrafos
              />
            ))}
            {/* Botão para adicionar um novo parágrafo */}
            <button
              onClick={handleNewParagraph}
              className="mt-4 border border-background-3 text-white px-4 py-2 rounded hover:bg-background-3/50 cursor-pointer transition"
            >
              <Plus className="inline w-5 h-5 mr-2" /> Adicionar Parágrafo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DraftEditor;
