"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ComponentChildren } from "@/types/props";

const queryClient = new QueryClient();

const ReactQueryProvider: React.FC<ComponentChildren> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
