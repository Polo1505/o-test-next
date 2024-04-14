'use client'
import '@/app/ui/global.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className="bg-mygray-600">
        <header className="flex justify-center items-center"> 
          <div className="flex w-full mx-[14px] bg-mygray-500 rounded-[15px] text-[40px] mt-[14px] lg:text-[96px] lg:text-8xl lg:mt-14 lg:max-w-screen-2xl">
            <h1 className="text-mygray-300 p-5 mx-auto">тестовое задание</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
    </QueryClientProvider>
  );
}
