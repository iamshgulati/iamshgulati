"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { env } from "~/env.mjs";

let AutoRefresh = ({ children }: React.PropsWithChildren) => {
  return children;
};

if (env.NODE_ENV === "development") {
  AutoRefresh = function AutoRefresh({ children }: React.PropsWithChildren) {
    const router = useRouter();
    React.useEffect(() => {
      const ws = new WebSocket("ws://localhost:3001");
      ws.onmessage = (event) => {
        if (event.data === "refresh") {
          router.refresh();
        }
      };
      return () => {
        ws.close();
      };
    }, [router]);
    return children;
  };
}

export default AutoRefresh;
