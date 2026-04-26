export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero Skeleton */}
      <section className="h-[60vh] bg-gray-300 flex items-center justify-center">
        <div className="text-center space-y-4 w-full px-4">
          <div className="h-10 w-1/3 mx-auto bg-gray-400 rounded"></div>
          <div className="h-4 w-2/3 mx-auto bg-gray-400 rounded"></div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>

          <div className="h-12 w-1/3 bg-gray-300 rounded"></div>
        </div>
      </section>

      {/* Visit Us Skeleton */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <div className="h-8 w-1/4 bg-gray-300 rounded mx-auto"></div>

          <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded mx-auto"></div>

          <div className="h-10 w-40 bg-gray-300 rounded mx-auto"></div>
        </div>
      </section>
    </div>
  );
}
