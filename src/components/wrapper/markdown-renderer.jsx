import { useEffect } from "react";

import { marked } from "marked";
import sanitizeHTML from "sanitize-html";

import { cn } from "@/lib/utils";

const MarkdownRenderer = ({
  markdownRaw,
  markedOptions = {},
  sanitizeHTMLOptions = {},
  className,
  ...props
}) => {
  useEffect(() => {
    marked.use(markedOptions);
  }, [markedOptions]);

  const getMarkdownText = () => {
    const rawMarkdown = marked.parse(markdownRaw);
    const sanitizedMarkdown = sanitizeHTML(rawMarkdown, sanitizeHTMLOptions);

    return { __html: sanitizedMarkdown };
  };

  return (
    <div
      className={cn("prose", className)}
      dangerouslySetInnerHTML={getMarkdownText()}
      {...props}
    />
  );
};

MarkdownRenderer.displayName = "MarkdownRenderer";

export default MarkdownRenderer;
