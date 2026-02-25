"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ~2 second

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Spinner */}
        <div className="absolute h-28 w-28 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

        {/* Logo */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          <Image
            src="/logo.jpg"
            alt="Ligne Group"
            width={56}
            height={56}
            priority
          />
        </div>
      </div>
    </div>
  );
}
