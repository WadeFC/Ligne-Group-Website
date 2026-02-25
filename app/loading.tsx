import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Circular spinner */}
        <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

        {/* Logo */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
          <Image
            src="/logo.jpg"
            alt="Ligne Group"
            width={48}
            height={48}
            priority
          />
        </div>
      </div>
    </div>
  );
}
