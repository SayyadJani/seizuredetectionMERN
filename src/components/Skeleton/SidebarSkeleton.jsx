function SidebarSkeleton() {
  return (
    <>
      {/* 🖥 Desktop Sidebar Skeleton */}
      <div className="hidden sm:block w-64 min-h-screen fixed bg-gradient-to-b from-blue-900 to-indigo-900 p-4">
        <div className="mt-20 space-y-4 animate-pulse">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="h-10 rounded-full bg-blue-800/60"
            />
          ))}
        </div>
      </div>

      {/* 📱 Mobile Floating Bottom Bar Skeleton */}
      <div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-blue-900/95 backdrop-blur-md px-4 py-3 rounded-full shadow-2xl flex gap-3 animate-pulse">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="h-8 w-16 rounded-full bg-blue-800/60"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SidebarSkeleton;
