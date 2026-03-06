// =============================================================================
// diagramConfigs.ts - Layout positions for agent architecture SVG diagrams.
// Each domain has an orchestrator at center (300, 250) with agents arranged
// in a ring, data inputs on the left, and governance items on the right.
// =============================================================================

export interface DiagramNode {
  id: string;
  x: number;
  y: number;
  type: 'orchestrator' | 'agent' | 'governance' | 'data-input';
}

export interface DiagramConnection {
  from: string;
  to: string;
}

export interface DiagramConfig {
  domainSlug: string;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
}

// =============================================================================
// Helper: Generate evenly-spaced ring positions around a center point.
// =============================================================================

function ringPositions(
  count: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  startAngle = -Math.PI / 2,
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    const angle = startAngle + (2 * Math.PI * i) / count;
    positions.push({
      x: Math.round(cx + rx * Math.cos(angle)),
      y: Math.round(cy + ry * Math.sin(angle)),
    });
  }
  return positions;
}

// =============================================================================
// Helper: Generate vertically stacked positions along a column.
// =============================================================================

function columnPositions(
  count: number,
  x: number,
  startY: number,
  spacing: number,
): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    positions.push({ x, y: startY + i * spacing });
  }
  return positions;
}

// =============================================================================
// 1. Quality - 5 agents + 1 orchestrator, 6 data inputs, 5 governance
// =============================================================================

const qualityAgentIds = [
  'quality-qms-agent',
  'quality-mfg-agent',
  'quality-di-agent',
  'quality-clinical-agent',
  'quality-vendor-agent',
];
const qualityAgentPositions = ringPositions(5, 300, 250, 160, 140);
const qualityDataInputPositions = columnPositions(6, 40, 60, 75);
const qualityGovernancePositions = columnPositions(5, 560, 80, 80);

const qualityConfig: DiagramConfig = {
  domainSlug: 'quality',
  nodes: [
    { id: 'quality-orchestrator', x: 300, y: 250, type: 'orchestrator' },
    ...qualityAgentIds.map((id, i) => ({
      id,
      x: qualityAgentPositions[i].x,
      y: qualityAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...qualityDataInputPositions.map((pos, i) => ({
      id: `quality-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...qualityGovernancePositions.map((pos, i) => ({
      id: `quality-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...qualityAgentIds.map((id) => ({
      from: 'quality-orchestrator',
      to: id,
    })),
    ...qualityDataInputPositions.map((_, i) => ({
      from: `quality-data-${i}`,
      to: 'quality-orchestrator',
    })),
    ...qualityGovernancePositions.map((_, i) => ({
      from: 'quality-orchestrator',
      to: `quality-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 2. Regulatory Affairs - 4 agents + 1 orchestrator, 6 data inputs, 5 governance
// =============================================================================

const regulatoryAgentIds = [
  'regulatory-concept-agent',
  'regulatory-market-agent',
  'regulatory-evidence-agent',
  'regulatory-drafting-agent',
];
const regulatoryAgentPositions = ringPositions(4, 300, 250, 160, 140);
const regulatoryDataInputPositions = columnPositions(6, 40, 60, 75);
const regulatoryGovernancePositions = columnPositions(5, 560, 80, 80);

const regulatoryConfig: DiagramConfig = {
  domainSlug: 'regulatory',
  nodes: [
    { id: 'regulatory-orchestrator', x: 300, y: 250, type: 'orchestrator' },
    ...regulatoryAgentIds.map((id, i) => ({
      id,
      x: regulatoryAgentPositions[i].x,
      y: regulatoryAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...regulatoryDataInputPositions.map((pos, i) => ({
      id: `regulatory-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...regulatoryGovernancePositions.map((pos, i) => ({
      id: `regulatory-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...regulatoryAgentIds.map((id) => ({
      from: 'regulatory-orchestrator',
      to: id,
    })),
    ...regulatoryDataInputPositions.map((_, i) => ({
      from: `regulatory-data-${i}`,
      to: 'regulatory-orchestrator',
    })),
    ...regulatoryGovernancePositions.map((_, i) => ({
      from: 'regulatory-orchestrator',
      to: `regulatory-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 3. Clinical Development & Operations - 4 agents, 6 data inputs, 4 governance
// =============================================================================

const clinicalAgentIds = [
  'clinical-classification-agent',
  'clinical-completeness-agent',
  'clinical-scoring-agent',
  'clinical-inspection-agent',
];
const clinicalAgentPositions = ringPositions(4, 300, 250, 160, 140);
const clinicalDataInputPositions = columnPositions(6, 40, 60, 75);
const clinicalGovernancePositions = columnPositions(4, 560, 100, 90);

const clinicalConfig: DiagramConfig = {
  domainSlug: 'clinical',
  nodes: [
    { id: 'clinical-orchestrator', x: 300, y: 250, type: 'orchestrator' },
    ...clinicalAgentIds.map((id, i) => ({
      id,
      x: clinicalAgentPositions[i].x,
      y: clinicalAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...clinicalDataInputPositions.map((pos, i) => ({
      id: `clinical-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...clinicalGovernancePositions.map((pos, i) => ({
      id: `clinical-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...clinicalAgentIds.map((id) => ({
      from: 'clinical-orchestrator',
      to: id,
    })),
    ...clinicalDataInputPositions.map((_, i) => ({
      from: `clinical-data-${i}`,
      to: 'clinical-orchestrator',
    })),
    ...clinicalGovernancePositions.map((_, i) => ({
      from: 'clinical-orchestrator',
      to: `clinical-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 4. Manufacturing & Supply Chain - 4 agents, 6 data inputs, 5 governance
// =============================================================================

const manufacturingAgentIds = [
  'manufacturing-ingestion-agent',
  'manufacturing-rules-agent',
  'manufacturing-anomaly-agent',
  'manufacturing-summary-agent',
];
const manufacturingAgentPositions = ringPositions(4, 300, 250, 160, 140);
const manufacturingDataInputPositions = columnPositions(6, 40, 60, 75);
const manufacturingGovernancePositions = columnPositions(5, 560, 80, 80);

const manufacturingConfig: DiagramConfig = {
  domainSlug: 'manufacturing',
  nodes: [
    {
      id: 'manufacturing-orchestrator',
      x: 300,
      y: 250,
      type: 'orchestrator',
    },
    ...manufacturingAgentIds.map((id, i) => ({
      id,
      x: manufacturingAgentPositions[i].x,
      y: manufacturingAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...manufacturingDataInputPositions.map((pos, i) => ({
      id: `manufacturing-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...manufacturingGovernancePositions.map((pos, i) => ({
      id: `manufacturing-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...manufacturingAgentIds.map((id) => ({
      from: 'manufacturing-orchestrator',
      to: id,
    })),
    ...manufacturingDataInputPositions.map((_, i) => ({
      from: `manufacturing-data-${i}`,
      to: 'manufacturing-orchestrator',
    })),
    ...manufacturingGovernancePositions.map((_, i) => ({
      from: 'manufacturing-orchestrator',
      to: `manufacturing-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 5. Safety & Pharmacovigilance - 4 agents, 6 data inputs, 6 governance
// =============================================================================

const safetyAgentIds = [
  'safety-ingestion-agent',
  'safety-timeline-agent',
  'safety-narrative-agent',
  'safety-compliance-agent',
];
const safetyAgentPositions = ringPositions(4, 300, 250, 160, 140);
const safetyDataInputPositions = columnPositions(6, 40, 60, 75);
const safetyGovernancePositions = columnPositions(6, 560, 60, 75);

const safetyConfig: DiagramConfig = {
  domainSlug: 'safety',
  nodes: [
    { id: 'safety-orchestrator', x: 300, y: 250, type: 'orchestrator' },
    ...safetyAgentIds.map((id, i) => ({
      id,
      x: safetyAgentPositions[i].x,
      y: safetyAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...safetyDataInputPositions.map((pos, i) => ({
      id: `safety-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...safetyGovernancePositions.map((pos, i) => ({
      id: `safety-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...safetyAgentIds.map((id) => ({
      from: 'safety-orchestrator',
      to: id,
    })),
    ...safetyDataInputPositions.map((_, i) => ({
      from: `safety-data-${i}`,
      to: 'safety-orchestrator',
    })),
    ...safetyGovernancePositions.map((_, i) => ({
      from: 'safety-orchestrator',
      to: `safety-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 6. Medical Affairs - 4 agents, 6 data inputs, 5 governance
// =============================================================================

const medicalAffairsAgentIds = [
  'medical-affairs-claims-agent',
  'medical-affairs-reference-agent',
  'medical-affairs-risk-agent',
  'medical-affairs-drafting-agent',
];
const medicalAffairsAgentPositions = ringPositions(4, 300, 250, 160, 140);
const medicalAffairsDataInputPositions = columnPositions(6, 40, 60, 75);
const medicalAffairsGovernancePositions = columnPositions(5, 560, 80, 80);

const medicalAffairsConfig: DiagramConfig = {
  domainSlug: 'medical-affairs',
  nodes: [
    {
      id: 'medical-affairs-orchestrator',
      x: 300,
      y: 250,
      type: 'orchestrator',
    },
    ...medicalAffairsAgentIds.map((id, i) => ({
      id,
      x: medicalAffairsAgentPositions[i].x,
      y: medicalAffairsAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...medicalAffairsDataInputPositions.map((pos, i) => ({
      id: `medical-affairs-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...medicalAffairsGovernancePositions.map((pos, i) => ({
      id: `medical-affairs-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...medicalAffairsAgentIds.map((id) => ({
      from: 'medical-affairs-orchestrator',
      to: id,
    })),
    ...medicalAffairsDataInputPositions.map((_, i) => ({
      from: `medical-affairs-data-${i}`,
      to: 'medical-affairs-orchestrator',
    })),
    ...medicalAffairsGovernancePositions.map((_, i) => ({
      from: 'medical-affairs-orchestrator',
      to: `medical-affairs-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 7. Cybersecurity & Third-Party Risk Management - 4 agents, 7 data inputs, 4 governance
// =============================================================================

const cybersecurityAgentIds = [
  'cybersecurity-docs-agent',
  'cybersecurity-monitoring-agent',
  'cybersecurity-scoring-agent',
  'cybersecurity-audit-agent',
];
const cybersecurityAgentPositions = ringPositions(4, 300, 250, 160, 140);
const cybersecurityDataInputPositions = columnPositions(7, 40, 40, 65);
const cybersecurityGovernancePositions = columnPositions(4, 560, 100, 90);

const cybersecurityConfig: DiagramConfig = {
  domainSlug: 'cybersecurity',
  nodes: [
    {
      id: 'cybersecurity-orchestrator',
      x: 300,
      y: 250,
      type: 'orchestrator',
    },
    ...cybersecurityAgentIds.map((id, i) => ({
      id,
      x: cybersecurityAgentPositions[i].x,
      y: cybersecurityAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...cybersecurityDataInputPositions.map((pos, i) => ({
      id: `cybersecurity-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...cybersecurityGovernancePositions.map((pos, i) => ({
      id: `cybersecurity-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...cybersecurityAgentIds.map((id) => ({
      from: 'cybersecurity-orchestrator',
      to: id,
    })),
    ...cybersecurityDataInputPositions.map((_, i) => ({
      from: `cybersecurity-data-${i}`,
      to: 'cybersecurity-orchestrator',
    })),
    ...cybersecurityGovernancePositions.map((_, i) => ({
      from: 'cybersecurity-orchestrator',
      to: `cybersecurity-gov-${i}`,
    })),
  ],
};

// =============================================================================
// 8. Corporate & Enabling Functions - 4 agents, 6 data inputs, 5 governance
// =============================================================================

const corporateAgentIds = [
  'corporate-triage-agent',
  'corporate-resolution-agent',
  'corporate-change-agent',
  'corporate-prediction-agent',
];
const corporateAgentPositions = ringPositions(4, 300, 250, 160, 140);
const corporateDataInputPositions = columnPositions(6, 40, 60, 75);
const corporateGovernancePositions = columnPositions(5, 560, 80, 80);

const corporateConfig: DiagramConfig = {
  domainSlug: 'corporate',
  nodes: [
    { id: 'corporate-orchestrator', x: 300, y: 250, type: 'orchestrator' },
    ...corporateAgentIds.map((id, i) => ({
      id,
      x: corporateAgentPositions[i].x,
      y: corporateAgentPositions[i].y,
      type: 'agent' as const,
    })),
    ...corporateDataInputPositions.map((pos, i) => ({
      id: `corporate-data-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'data-input' as const,
    })),
    ...corporateGovernancePositions.map((pos, i) => ({
      id: `corporate-gov-${i}`,
      x: pos.x,
      y: pos.y,
      type: 'governance' as const,
    })),
  ],
  connections: [
    ...corporateAgentIds.map((id) => ({
      from: 'corporate-orchestrator',
      to: id,
    })),
    ...corporateDataInputPositions.map((_, i) => ({
      from: `corporate-data-${i}`,
      to: 'corporate-orchestrator',
    })),
    ...corporateGovernancePositions.map((_, i) => ({
      from: 'corporate-orchestrator',
      to: `corporate-gov-${i}`,
    })),
  ],
};

// =============================================================================
// Exported configuration map keyed by domain slug
// =============================================================================

export const diagramConfigs: Record<string, DiagramConfig> = {
  quality: qualityConfig,
  regulatory: regulatoryConfig,
  clinical: clinicalConfig,
  manufacturing: manufacturingConfig,
  safety: safetyConfig,
  'medical-affairs': medicalAffairsConfig,
  cybersecurity: cybersecurityConfig,
  corporate: corporateConfig,
};
