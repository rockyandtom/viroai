import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            ViroAI.art
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
          >
            首页
          </Link>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
