export default function LoadingIndicator() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div className="h-full bg-indigo-600 transition-all duration-500 ease-in-out loading-bar"></div>
    </div>
  );
} 