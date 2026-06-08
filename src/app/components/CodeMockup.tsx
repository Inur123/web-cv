"use client";

import React, { useState } from "react";

export default function CodeMockup() {
  const [activeTab, setActiveTab] = useState("profile.php");

  const tabs = [
    { name: "profile.php", lang: "php" },
    { name: "main.go", lang: "go" },
  ];

  return (
    <div className="w-full max-w-xl rounded-xl border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs md:text-sm">
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 select-none">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-slate-400 text-xs font-semibold">zainur-roziqin - code-editor</div>
        <div className="w-10" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-900/40 select-none">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-xs border-r border-slate-800 transition-colors duration-150 ${
              activeTab === tab.name
                ? "bg-slate-950/40 text-teal-400 border-t-2 border-t-teal-400"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="p-5 overflow-x-auto text-left leading-relaxed max-h-[350px] bg-slate-950/50">
        <pre className="text-slate-300">
          <code>
            {activeTab === "profile.php" ? (
              <div>
                <span className="text-purple-400">&lt;?php</span><br /><br />
                <span className="text-purple-400">namespace</span> App\Http;<br /><br />
                <span className="text-purple-400">class</span> <span className="text-amber-400">ZainurRoziqin</span> &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">public</span> <span className="text-amber-400">$role</span> = <span className="text-emerald-400">{"\"Laravel Fullstack Developer\""}</span>;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">public</span> <span className="text-amber-400">$primaryStack</span> = [<span className="text-emerald-400">{"\"Laravel\""}</span>, <span className="text-emerald-400">{"\"PHP\""}</span>, <span className="text-emerald-400">{"\"Livewire\""}</span>, <span className="text-emerald-400">{"\"MySQL\""}</span>];<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">public</span> <span className="text-amber-400">$learningStack</span> = [<span className="text-emerald-400">{"\"Golang\""}</span>, <span className="text-emerald-400">{"\"Next.js\""}</span>, <span className="text-emerald-400">{"\"Flutter\""}</span>];<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">public function</span> <span className="text-blue-400">getProfile</span>() &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">{"'name'"}</span> =&gt; <span className="text-emerald-400">{"'Muhammad Zainur Roziqin'"}</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">{"'status'"}</span> =&gt; <span className="text-emerald-400">{"'Ready to Build Code'"}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;];<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                &#125;
              </div>
            ) : (
              <div>
                <span className="text-purple-400">package</span> main<br /><br />
                <span className="text-purple-400">import</span> <span className="text-emerald-400">{"\"fmt\""}</span><br /><br />
                <span className="text-purple-400">func</span> <span className="text-blue-400">main</span>() &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;currentProject := <span className="text-emerald-400">{"\"Learning Golang & Next.js\""}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;fmt.<span className="text-blue-400">Printf</span>(<span className="text-emerald-400">{"\"Now focusing on: %s\\n\""}</span>, currentProject)<br />
                &#125;
              </div>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
