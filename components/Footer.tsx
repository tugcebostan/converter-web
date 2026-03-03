export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} ToolBox — Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}