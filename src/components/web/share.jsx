import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const Share = ({ className, children, ...props }) => {
  const [isWebShareAvailable, setIsWebShareAvailable] = useState(false);
  const [shareData, setShareData] = useState({
    title: "",
    text: "",
    url: "",
  });

  useEffect(() => {
    if (navigator.share) {
      setIsWebShareAvailable(true);

      const metaTitle =
        document.querySelector("title")?.textContent ||
        document.querySelector('meta[name="title"]')?.content;
      const metaDescription =
        document.querySelector('meta[name="description"]')?.content || "";

      setShareData({
        title: metaTitle || document.title,
        text: metaDescription,
        url: window.location.href,
      });
    }
  }, []);

  const handleShare = async () => {
    await navigator.share(shareData);
  };

  return (
    <>
      {isWebShareAvailable && (
        <Button className={cn(className)} onClick={handleShare} {...props}>
          {children || "Share"}
        </Button>
      )}
    </>
  );
};

Share.displayName = "Share";

export default Share;
