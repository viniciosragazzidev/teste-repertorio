import { GripVertical } from "lucide-react";
import { useEffect, useRef } from "react";
import { ParagraphType } from "../libs/types";

interface ParagraphProps {
  paragraph: ParagraphType;
  onContentChange: (id: string, content: string) => void;
  paragraphRefs: React.MutableRefObject<{
    [key: string]: HTMLTextAreaElement | null;
  }>;
}

const Paragraph = ({
  paragraph,
  onContentChange,
  paragraphRefs,
}: ParagraphProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Registra a referência do parágrafo no objeto paragraphRefs
  useEffect(() => {
    if (textareaRef.current) {
      paragraphRefs.current[paragraph.id] = textareaRef.current;
    }
  }, [paragraph.id, paragraphRefs]);

  const handleResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(paragraph.id, e.target.value);
    handleResize();
  };

  useEffect(() => {
    handleResize();
  }, [paragraph.content]);

  return (
    <div className="flex w-full cursor-pointer h-min group hover:bg-background-2/20 relative">
      <textarea
        ref={textareaRef}
        className={`w-full resize-none focus:outline-1 focus:outline-background-3 rounded-sm items-center px-2 pr-5 ${
          paragraph.type === "heading" ? "text-2xl font-bold pt-4" : "py-4"
        }`}
        value={paragraph.content}
        onChange={handleContentChange}
        onInput={handleResize}
      />
      <span className="absolute right-0 top-0 translate-y-[50%] opacity-15 hidden group-hover:block">
        <GripVertical className="w-4" />
      </span>
    </div>
  );
};

export default Paragraph;
