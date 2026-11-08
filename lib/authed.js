"use client";
import { authClient } from "./auth-client";
import { api } from "./api";

// calls the express server with a fresh jwt
export async function authedApi(path, options = {}) {
  const { data } = await authClient.token();
  if (!data?.token) throw new Error("Please login first");
  return api(path, { ...options, token: data.token });
}