export type TextType = {
  id: string;
  title: string;
  content: ParagraphType[];
  status: "publish" | "draft";
  createdAt: string;
  modifiedAt: string;
};

export type ParagraphType = {
  id: string;
  type: "heading" | "paragraph";
  content: string;
};
