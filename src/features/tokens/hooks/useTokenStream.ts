"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectWebSocket } from "@/src/lib/websocket";
import { setTokens } from "../tokenSlice";

export function useTokenStream() {
  const dispatch = useDispatch();

  useEffect(() => {
    const disconnect = connectWebSocket(tokens => {
      dispatch(setTokens(tokens));
    });

    return () => {
      disconnect();
    };
  }, [dispatch]);
}
