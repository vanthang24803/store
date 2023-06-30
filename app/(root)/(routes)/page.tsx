"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const opOpen = useStoreModal((state) => state.onOpen);
  const opClose = useStoreModal((state) => state.onClose);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      opOpen();
    }
  }, [isOpen, opOpen]);

  return null;
};

export default SetupPage;
