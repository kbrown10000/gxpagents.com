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

const colorMap: Record<string, { primary: string; light: string; border: string; text: string }> = {
  blue:   { primary: '#2563EB', light: '#DBEAFE', border: 'border-blue-300',   text: 'text-blue-700' },
  indigo: { primary: '#4F46E5', light: '#E0E7FF', border: 'border-indigo-300', text: 'text-indigo-700' },
  violet: { primary: '#7C3AED', light: '#EDE9FE', border: 'border-violet-300', text: 'text-violet-700' },
  amber:  { primary: '#D97706', light: '#FEF3C7', border: 'border-amber-300',  text: 'text-amber-700' },
  rose:   { primary: '#E11D48', light: '#FFE4E6', border: 'border-rose-300',   text: 'text-rose-700' },
  teal:   { primary: '#0D9488', light: '#CCFBF1', border: 'border-teal-300',   text: 'text-teal-700' },
  red:    { primary: '#DC2626', light: '#FEE2E2', border: 'border-red-300',    text: 'text-red-700' },
  slate:  { primary: '#475569', light: '#F1F5F9', border: 'border-slate-300',  text: 'text-slate-700' },
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

/** Split a label into lines of at most `maxLen` characters for SVG tspan. */
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
/*  Inline SVG style (keeps animations co-located with component)             */
/* -------------------------------------------------------------------------- */

const svgStyles = `
  .agent-node { cursor: pointer; }
  .agent-node:hover .node-circle { filter: brightness(1.08); }
  .agent-node:hover .node-ring   { opacity: 0.5; }

  @keyframes flow-line {
    to { stroke-dashoffset: -20; }
  }
  .flow-line {
    stroke-dasharray: 5 15;
    animation: flow-line 1.5s linear infinite;
  }

  @keyframes pulse-ring-svg {
    0%   { r: 48; opacity: 0.6; }
    100% { r: 68; opacity: 0; }
  }
  .pulse-ring {
    animation: pulse-ring-svg 2s ease-out infinite;
  }
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

  /* -- Derived data -------------------------------------------------------- */

  const orchestrator = agents.find((a) => a.type === 'orchestrator') ?? null;
  const subAgents = agents.filter((a) => a.type === 'agent');

  const centerX = 300;
  const centerY = 250;
  const radius = 150;

  const agentPositions = subAgents.map((agent, i) => {
    const angle = (2 * Math.PI * i) / subAgents.length - Math.PI / 2;
    return {
      ...agent,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  /* -- Data input positions (left column, evenly spaced) ------------------- */
  const diYStart = 80;
  const diYStep = dataInputs.length > 1 ? (340 / (dataInputs.length - 1)) : 0;
  const dataInputPositions = dataInputs.map((label, i) => ({
    label,
    x: 70,
    y: dataInputs.length === 1 ? centerY : diYStart + diYStep * i,
  }));

  /* -- Governance positions (right column, evenly spaced) ------------------ */
  const govYStart = 80;
  const govYStep = governance.length > 1 ? (340 / (governance.length - 1)) : 0;
  const governancePositions = governance.map((label, i) => ({
    label,
    x: 540,
    y: governance.length === 1 ? centerY : govYStart + govYStep * i,
  }));

  /* -- Click handler ------------------------------------------------------- */

  function handleNodeClick(agent: AgentNode) {
    setSelectedAgent((prev) => (prev?.id === agent.id ? null : agent));
  }

  /* ======================================================================== */
  /*  Desktop SVG                                                             */
  /* ======================================================================== */

  const desktopSvg = (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Agent architecture diagram"
    >
      <style>{svgStyles}</style>

      {/* ---- Dashed lines: data inputs -> orchestrator -------------------- */}
      {dataInputPositions.map((di, i) => (
        <line
          key={`di-line-${i}`}
          x1={di.x + 10}
          y1={di.y}
          x2={centerX - 45}
          y2={centerY}
          stroke={colors.primary}
          strokeWidth={1.2}
          strokeOpacity={0.35}
          strokeDasharray="4 6"
        />
      ))}

      {/* ---- Dashed lines: governance -> orchestrator --------------------- */}
      {governancePositions.map((g, i) => (
        <line
          key={`gov-line-${i}`}
          x1={g.x - 10}
          y1={g.y}
          x2={centerX + 45}
          y2={centerY}
          stroke={colors.primary}
          strokeWidth={1.2}
          strokeOpacity={0.35}
          strokeDasharray="4 6"
        />
      ))}

      {/* ---- Animated connection lines: orchestrator -> sub-agents -------- */}
      {agentPositions.map((ap) => (
        <line
          key={`conn-${ap.id}`}
          x1={centerX}
          y1={centerY}
          x2={ap.x}
          y2={ap.y}
          stroke={colors.primary}
          strokeWidth={1.8}
          strokeOpacity={0.45}
          className="flow-line"
        />
      ))}

      {/* ---- Orchestrator pulse ring -------------------------------------- */}
      {orchestrator && (
        <circle
          cx={centerX}
          cy={centerY}
          r={48}
          fill="none"
          stroke={colors.primary}
          strokeWidth={2}
          className="pulse-ring"
        />
      )}

      {/* ---- Orchestrator node -------------------------------------------- */}
      {orchestrator && (
        <g
          className="agent-node"
          onClick={() => handleNodeClick(orchestrator)}
          tabIndex={0}
          role="button"
          aria-label={`Orchestrator: ${orchestrator.label}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNodeClick(orchestrator);
            }
          }}
        >
          <circle
            className="node-circle"
            cx={centerX}
            cy={centerY}
            r={45}
            fill={colors.primary}
            stroke="white"
            strokeWidth={3}
          />
          {/* Label text inside orchestrator */}
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

      {/* ---- Sub-agent nodes ---------------------------------------------- */}
      {agentPositions.map((ap) => (
        <g
          key={ap.id}
          className="agent-node"
          onClick={() => handleNodeClick(ap)}
          tabIndex={0}
          role="button"
          aria-label={`Agent: ${ap.label}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNodeClick(ap);
            }
          }}
        >
          {/* Hover ring */}
          <circle
            className="node-ring"
            cx={ap.x}
            cy={ap.y}
            r={40}
            fill="none"
            stroke={colors.primary}
            strokeWidth={2}
            opacity={0}
            style={{ transition: 'opacity 0.2s' }}
          />
          <circle
            className="node-circle"
            cx={ap.x}
            cy={ap.y}
            r={35}
            fill={colors.light}
            stroke={colors.primary}
            strokeWidth={2}
            style={{ transition: 'filter 0.2s' }}
          />
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

      {/* ---- Data input labels (left side) -------------------------------- */}
      {dataInputPositions.map((di, i) => (
        <g key={`di-${i}`}>
          {/* Small square icon */}
          <rect
            x={di.x - 6}
            y={di.y - 6}
            width={12}
            height={12}
            rx={3}
            fill={colors.light}
            stroke={colors.primary}
            strokeWidth={1}
          />
          {/* Arrow-right tiny icon inside rect */}
          <path
            d={`M${di.x - 3} ${di.y} L${di.x + 3} ${di.y} M${di.x + 1} ${di.y - 2.5} L${di.x + 3} ${di.y} L${di.x + 1} ${di.y + 2.5}`}
            stroke={colors.primary}
            strokeWidth={1.2}
            fill="none"
          />
          {wrapText(di.label, 14).map((line, li) => (
            <text
              key={li}
              x={di.x}
              y={di.y + 18 + li * 12}
              textAnchor="middle"
              fill="#475569"
              fontSize={9}
              fontWeight={500}
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* ---- Governance labels (right side) ------------------------------- */}
      {governancePositions.map((g, i) => (
        <g key={`gov-${i}`}>
          {/* Small shield-like icon */}
          <rect
            x={g.x - 6}
            y={g.y - 6}
            width={12}
            height={12}
            rx={3}
            fill={colors.light}
            stroke={colors.primary}
            strokeWidth={1}
          />
          {/* Check-mark tiny icon inside rect */}
          <path
            d={`M${g.x - 3} ${g.y} L${g.x - 1} ${g.y + 2.5} L${g.x + 3} ${g.y - 2.5}`}
            stroke={colors.primary}
            strokeWidth={1.3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {wrapText(g.label, 14).map((line, li) => (
            <text
              key={li}
              x={g.x}
              y={g.y + 18 + li * 12}
              textAnchor="middle"
              fill="#475569"
              fontSize={9}
              fontWeight={500}
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* ---- Section labels ----------------------------------------------- */}
      <text x={70} y={40} textAnchor="middle" fill="#94A3B8" fontSize={10} fontWeight={600} letterSpacing={1}>
        DATA INPUTS
      </text>
      <text x={540} y={40} textAnchor="middle" fill="#94A3B8" fontSize={10} fontWeight={600} letterSpacing={1}>
        GOVERNANCE
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
          {/* Vertical connector line (except before first card) */}
          {idx > 0 && (
            <div
              className="w-px h-6"
              style={{ backgroundColor: colors.primary, opacity: 0.3 }}
            />
          )}

          {/* Agent card */}
          <button
            onClick={() => handleNodeClick(agent)}
            className={`
              w-full max-w-xs rounded-xl border-2 px-4 py-3 text-left transition-all duration-200
              ${
                agent.type === 'orchestrator'
                  ? `${colors.border} shadow-md`
                  : 'border-slate-200 hover:shadow-sm'
              }
              ${
                selectedAgent?.id === agent.id
                  ? 'ring-2 ring-offset-2'
                  : ''
              }
            `}
            style={
              agent.type === 'orchestrator'
                ? { backgroundColor: colors.primary, color: 'white' }
                : { backgroundColor: colors.light }
            }
          >
            <p
              className="text-sm font-semibold"
              style={
                agent.type === 'orchestrator'
                  ? { color: 'white' }
                  : { color: colors.primary }
              }
            >
              {agent.label}
            </p>
            <p
              className="text-xs mt-0.5"
              style={
                agent.type === 'orchestrator'
                  ? { color: 'rgba(255,255,255,0.8)' }
                  : { color: '#64748B' }
              }
            >
              {agent.role}
            </p>
          </button>
        </div>
      ))}

      {/* Data inputs & governance as small tags below the cards */}
      {(dataInputs.length > 0 || governance.length > 0) && (
        <div className="mt-6 w-full max-w-xs grid grid-cols-2 gap-4">
          {dataInputs.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Data Inputs
              </p>
              <ul className="space-y-1">
                {dataInputs.map((di, i) => (
                  <li
                    key={i}
                    className="text-xs text-slate-600 flex items-center gap-1.5"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    />
                    {di}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {governance.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Governance
              </p>
              <ul className="space-y-1">
                {governance.map((g, i) => (
                  <li
                    key={i}
                    className="text-xs text-slate-600 flex items-center gap-1.5"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );

  /* ======================================================================== */
  /*  Detail panel (shared between layouts)                                   */
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
              <h4
                className="text-base font-bold"
                style={{ color: colors.primary }}
              >
                {selectedAgent.label}
              </h4>
              <p className="text-sm text-slate-500 mt-0.5">
                {selectedAgent.role}
              </p>
            </div>
            <button
              onClick={() => setSelectedAgent(null)}
              className="flex-shrink-0 rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close detail panel"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M5 5L13 13M13 5L5 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {selectedAgent.responsibilities.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {selectedAgent.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.primary }}
                  />
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
      {/* Desktop: SVG radial diagram (md and up) */}
      <div className="hidden md:block">{desktopSvg}</div>

      {/* Mobile: vertical card stack (below md) */}
      <div className="block md:hidden">{mobileLayout}</div>

      {/* Detail panel (both layouts) */}
      {detailPanel}
    </div>
  );
}
