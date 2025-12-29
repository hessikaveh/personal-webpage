import React from 'react';

/**
 * AgenticMLOpsArchitecture Component
 * * A responsive SVG component representing the MLOps agent orchestration.
 * Attributes have been converted to camelCase for React compatibility.
 */
const AgenticMLOpsArchitecture = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden rounded-xl shadow-2xl ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 900 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Background Gradient */}
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
          </linearGradient>

          {/* Node Gradient (Blue) */}
          <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 0.4 }} />
          </linearGradient>

          {/* Orchestrator Gradient (Cyan/Teal) */}
          <linearGradient id="orch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.4 }} />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Arrowhead Marker */}
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>

          {/* Dotted Grid Pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#334155" opacity="0.5" />
          </pattern>
        </defs>

        {/* Background & Grid */}
        <rect width="900" height="500" fill="url(#bg-grad)" rx="10" ry="10" />
        <rect width="900" height="500" fill="url(#grid)" />

        {/* Zone Labels */}
        <text x="450" y="40" textAnchor="middle" fill="#64748b" fontSize="14" letterSpacing="2" fontFamily="'Segoe UI', Roboto, sans-serif">
          AGENTIC MLOPS LAYER
        </text>

        {/* Agent Layer Container */}
        <rect x="210" y="50" width="480" height="400" rx="15" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />

        {/* UI Node */}
        <g transform="translate(50, 200)">
          <rect x="0" y="0" width="140" height="80" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold" fontFamily="sans-serif">User Interface</text>
          <text x="70" y="55" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Experiment UI &amp;</text>
          <text x="70" y="70" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">User Stories</text>
        </g>

        {/* Orchestrator Node */}
        <g transform="translate(340, 190)">
          <path d="M40 0 L110 0 L145 60 L110 120 L40 120 L5 60 Z" fill="url(#orch-grad)" stroke="#22d3ee" strokeWidth="2" filter="url(#glow)" />
          <text x="75" y="50" textAnchor="middle" fill="#cffafe" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Orchestrator</text>
          <text x="75" y="70" textAnchor="middle" fill="#67e8f9" fontSize="12" fontFamily="sans-serif">A2A Patterns</text>

          {/* Memory Component */}
          <g transform="translate(15, 80)">
            <rect x="0" y="0" width="120" height="30" rx="4" fill="#083344" stroke="#22d3ee" strokeWidth="1" />
            <text x="60" y="20" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Memory &amp; Session History</text>
          </g>
        </g>

        {/* Specialized Agents */}
        <g transform="translate(530, 80)">
          <rect x="0" y="0" width="130" height="70" rx="8" fill="url(#node-grad)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="65" y="30" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Config Agent</text>
          <text x="65" y="50" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="sans-serif">MCP Integration</text>
        </g>

        <g transform="translate(530, 215)">
          <rect x="0" y="0" width="130" height="70" rx="8" fill="url(#node-grad)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="65" y="30" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Context Agent</text>
          <text x="65" y="50" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="sans-serif">RAG Pipeline</text>
        </g>

        <g transform="translate(530, 350)">
          <rect x="0" y="0" width="130" height="70" rx="8" fill="url(#node-grad)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="65" y="30" textAnchor="middle" fill="#dbeafe" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Execution</text>
          <text x="65" y="50" textAnchor="middle" fill="#93c5fd" fontSize="11" fontFamily="sans-serif">Deterministic Run</text>
        </g>

        {/* Outcomes Node */}
        <g transform="translate(730, 170)">
          <rect x="0" y="0" width="140" height="160" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="2" strokeDasharray="2,2" />
          <text x="70" y="30" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Outcomes</text>

          <circle cx="20" cy="60" r="4" fill="#10b981" />
          <text x="35" y="64" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">Faster Onboarding</text>

          <circle cx="20" cy="90" r="4" fill="#10b981" />
          <text x="35" y="94" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">Reduced Errors</text>

          <circle cx="20" cy="120" r="4" fill="#10b981" />
          <text x="35" y="124" fill="#e2e8f0" fontSize="11" fontFamily="sans-serif">Reproducibility</text>
        </g>

        {/* Connections */}
        <path d="M190 240 L335 250" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M415 190 L415 115 L520 115" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M485 250 L520 250" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M415 310 L415 385 L520 385" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        <path d="M660 385 L700 385 L700 250 L720 250" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" fill="none" markerEnd="url(#arrowhead)" />
      </svg>
    </div>
  );
};

export default AgenticMLOpsArchitecture;
