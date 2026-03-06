'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface AgentNode {
  id: string;
  label: string;
  role: string;
  responsibilities: string[];
  type: 'orchestrator' | 'agent' | 'governance' | 'data-input';
}

export interface AgentDiagramProps {
  agents: AgentNode[];
  dataInputs: string[];
  governance: string[];
  color?: string;
}

/* -------------------------------------------------------------------------- */
/*  Color palette                                                             */
/* -------------------------------------------------------------------------- */

const colorMap: Record<string, { primary: string; light: string; border: string; text: string; bg: string; lightBg: string }> = {
  blue:   { primary: '#2563EB', light: '#DBEAFE', border: 'border-blue-300',   text: 'text-blue-700', bg: 'bg-blue-600',   lightBg: 'bg-blue-50' },
  indigo: { primary: '#4F46E5', light: '#E0E7FF', border: 'border-indigo-300', text: 'text-indigo-700', bg: 'bg-indigo-600', lightBg: 'bg-indigo-50' },
  violet: { primary: '#7C3AED', light: '#EDE9FE', border: 'border-violet-300', text: 'text-violet-700', bg: 'bg-violet-600', lightBg: 'bg-violet-50' },
  amber:  { primary: '#D97706', light: '#FEF3C7', border: 'border-amber-300',  text: 'text-amber-700', bg: 'bg-amber-600',  lightBg: 'bg-amber-50' },
  rose:   { primary: '#E11D48', light: '#FFE4E6', border: 'border-rose-300',   text: 'text-rose-700', bg: 'bg-rose-600',   lightBg: 'bg-rose-50' },
  teal:   { primary: '#0D9488', light: '#CCFBF1', border: 'border-teal-300',   text: 'text-teal-700', bg: 'bg-teal-600',   lightBg: 'bg-teal-50' },
  red:    { primary: '#DC2626', light: '#FEE2E2', border: 'border-red-300',    text: 'text-red-700', bg: 'bg-red-600',    lightBg: 'bg-red-50' },
  slate:  { primary: '#475569', light: '#F1F5F9', border: 'border-slate-300',  text: 'text-slate-700', bg: 'bg-slate-600',  lightBg: 'bg-slate-50' },
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function wrapText(text: string, maxLen: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    if (current.length + word.length + 1 > maxLen && current.length > 0) {
      lines.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/* -------------------------------------------------------------------------- */
/*  Inline SVG styles                                                         */
/* -------------------------------------------------------------------------- */

const svgStyles = `
  .agent-node { cursor: pointer; }
  .agent-node:hover .node-circle { filter: brightness(1.08); }
  .agent-node:hover .node-ring   { opacity: 0.5; }
  @keyframes flow-line { to { stroke-dashoffset: -20; } }
  .flow-line { stroke-dasharray: 5 15; animation: flow-line 1.5s linear infinite; }
  @keyframes pulse-ring-svg { 0% { r: 48; opacity: 0.6; } 100% { r: 68; opacity: 0; } }
  .pulse-ring { animation: pulse-ring-svg 2s ease-out infinite; }
`;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function AgentDiagram({
  agents,
  dataInputs,
  governance,
  color = 'blue',
}: AgentDiagramProps) {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode | null>(null);
  const colors = colorMap[color] || colorMap.blue;

  const orchestrator = agents.find((a) => a.type === 'orchestrator') ?? null;
  const subAgents = agents.filter((a) => a.type === 'agent');

  const centerX = 300;
  const centerY = 220;
  const radius = 140;

  const agentPositions = subAgents.map((agent, i) => {
    const angle = (2 * Math.PI * i) / subAgents.length - Math.PI / 2;
    return {
      ...agent,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  function handleNodeClick(agent: AgentNode) {
    setSelectedAgent((prev) => (prev?.id === agent.id ? null : agent));
  }

  /* ======================================================================== */
  /*  Desktop SVG — agents only, no side labels                               */
  /* ======================================================================== */

  const desktopSvg = (
    <svg
      viewBox="0 0 600 440"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto h-auto"
      role="img"
      aria-label="Agent architecture diagram"
    >
      <style>{svgStyles}</style>

      {/* Animated connection lines: orchestrator -> sub-agents */}
      {agentPositions.map((ap) => (
        <line
          key={`conn-${ap.id}`}
          x1={centerX}
          y1={centerY}
          x2={ap.x}
          y2={ap.y}
          stroke={colors.primary}
          strokeWidth={1.8}
          strokeOpacity={0.4}
          className="flow-line"
        />
      ))}

      {/* Orchestrator pulse ring */}
      {orchestrator && (
        <circle cx={centerX} cy={centerY} r={48} fill="none" stroke={colors.primary} strokeWidth={2} className="pulse-ring" />
      )}

      {/* Orchestrator node */}
      {orchestrator && (
        <g
          className="agent-node"
          onClick={() => handleNodeClick(orchestrator)}
          tabIndex={0}
          role="button"
          aria-label={`Orchestrator: ${orchestrator.label}`}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNodeClick(orchestrator); } }}
        >
          <circle className="node-circle" cx={centerX} cy={centerY} r={45} fill={colors.primary} stroke="white" strokeWidth={3} />
          {wrapText(orchestrator.label, 12).map((line, li, arr) => (
            <text
              key={li}
              x={centerX}
              y={centerY + (li - (arr.length - 1) / 2) * 14}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize={11}
              fontWeight={600}
              style={{ pointerEvents: 'none' }}
            >
              {line}
            </text>
          ))}
        </g>
      )}

      {/* Sub-agent nodes */}
      {agentPositions.map((ap) => (
        <g
          key={ap.id}
          className="agent-node"
          onClick={() => handleNodeClick(ap)}
          tabIndex={0}
          role="button"
          aria-label={`Agent: ${ap.label}`}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNodeClick(ap); } }}
        >
          <circle className="node-ring" cx={ap.x} cy={ap.y} r={40} fill="none" stroke={colors.primary} strokeWidth={2} opacity={0} style={{ transition: 'opacity 0.2s' }} />
          <circle className="node-circle" cx={ap.x} cy={ap.y} r={35} fill={colors.light} stroke={colors.primary} strokeWidth={2} style={{ transition: 'filter 0.2s' }} />
          {wrapText(ap.label, 10).map((line, li, arr) => (
            <text
              key={li}
              x={ap.x}
              y={ap.y + (li - (arr.length - 1) / 2) * 13}
              textAnchor="middle"
              dominantBaseline="central"
              fill={colors.primary}
              fontSize={10}
              fontWeight={600}
              style={{ pointerEvents: 'none' }}
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* Click hint text */}
      <text x={centerX} y={425} textAnchor="middle" fill="#94A3B8" fontSize={10}>
        Click any node to view details
      </text>
    </svg>
  );

  /* ======================================================================== */
  /*  Mobile card layout                                                      */
  /* ======================================================================== */

  const allAgentsOrdered = [
    ...(orchestrator ? [orchestrator] : []),
    ...subAgents,
  ];

  const mobileLayout = (
    <div className="flex flex-col items-center gap-0">
      {allAgentsOrdered.map((agent, idx) => (
        <div key={agent.id} className="flex flex-col items-center w-full">
          {idx > 0 && (
            <div className="w-px h-6" style={{ backgroundColor: colors.primary, opacity: 0.3 }} />
          )}
          <button
            onClick={() => handleNodeClick(agent)}
            className={`w-full max-w-xs rounded-xl border-2 px-4 py-3 text-left transition-all duration-200
              ${agent.type === 'orchestrator' ? `${colors.border} shadow-md` : 'border-slate-200 hover:shadow-sm'}
              ${selectedAgent?.id === agent.id ? 'ring-2 ring-offset-2' : ''}
            `}
            style={agent.type === 'orchestrator' ? { backgroundColor: colors.primary, color: 'white' } : { backgroundColor: colors.light }}
          >
            <p className="text-sm font-semibold" style={agent.type === 'orchestrator' ? { color: 'white' } : { color: colors.primary }}>
              {agent.label}
            </p>
            <p className="text-xs mt-0.5" style={agent.type === 'orchestrator' ? { color: 'rgba(255,255,255,0.8)' } : { color: '#64748B' }}>
              {agent.role}
            </p>
          </button>
        </div>
      ))}
    </div>
  );

  /* ======================================================================== */
  /*  Data Inputs & Governance — rendered as HTML below the diagram           */
  /* ======================================================================== */

  const sideInfo = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {dataInputs.length > 0 && (
        <div className={`rounded-xl border ${colors.border} bg-white p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
            </svg>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Data Inputs</h4>
          </div>
          <ul className="space-y-2">
            {dataInputs.map((di, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primary }} />
                {di}
              </li>
            ))}
          </ul>
        </div>
      )}

      {governance.length > 0 && (
        <div className={`rounded-xl border ${colors.border} bg-white p-5`}>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Governance</h4>
          </div>
          <ul className="space-y-2">
            {governance.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {g}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  /* ======================================================================== */
  /*  Detail panel                                                            */
  /* ======================================================================== */

  const detailPanel = (
    <AnimatePresence mode="wait">
      {selectedAgent && (
        <motion.div
          key={selectedAgent.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className={`mt-4 rounded-xl border-2 ${colors.border} bg-white p-5 shadow-sm`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="text-base font-bold" style={{ color: colors.primary }}>{selectedAgent.label}</h4>
              <p className="text-sm text-slate-500 mt-0.5">{selectedAgent.role}</p>
            </div>
            <button
              onClick={() => setSelectedAgent(null)}
              className="flex-shrink-0 rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close detail panel"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 5L13 13M13 5L5 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {selectedAgent.responsibilities.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {selectedAgent.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors.primary }} />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* ======================================================================== */
  /*  Render                                                                  */
  /* ======================================================================== */

  return (
    <div>
      {/* Desktop: SVG radial diagram */}
      <div className="hidden md:block">{desktopSvg}</div>

      {/* Mobile: vertical card stack */}
      <div className="block md:hidden">{mobileLayout}</div>

      {/* Detail panel */}
      {detailPanel}

      {/* Data inputs & governance as clean HTML cards */}
      {sideInfo}
    </div>
  );
}
