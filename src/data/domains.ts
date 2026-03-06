// =============================================================================
// domains.ts - Complete data layer for gxpagents.com
// All content derived from the USDM white paper on AI agents in life sciences.
// =============================================================================

export interface AgentNode {
  id: string;
  label: string;
  role: string;
  responsibilities: string[];
  type: 'orchestrator' | 'agent' | 'governance' | 'data-input';
}

export interface Outcome {
  metric: string;
  description: string;
}

export interface UseCase {
  name: string;
  description: string;
  value: string;
  maturityLevels: {
    assistive: string;
    generative: string;
    predictive: string;
  };
}

export interface DeepDive {
  title: string;
  overview: string;
  agents: AgentNode[];
  dataInputs: string[];
  governance: string[];
}

export interface Domain {
  slug: string;
  title: string;
  icon: string;
  color: string;
  overview: string;
  shifts: string[];
  regulatoryContext: string[];
  useCases: UseCase[];
  deepDive: DeepDive;
  outcomes: Outcome[];
}

// =============================================================================
// Domain Definitions
// =============================================================================

export const domains: Domain[] = [
  // ---------------------------------------------------------------------------
  // 1. Quality
  // ---------------------------------------------------------------------------
  {
    slug: 'quality',
    title: 'Quality',
    icon: '\u{1F6E1}\uFE0F',
    color: 'blue',
    overview:
      'Quality functions are increasingly expected to operate as the backbone of regulatory confidence, operational continuity, and enterprise risk management. However, most Quality organizations still rely on manual coordination, document-heavy processes, and institutional knowledge to manage deviations, CAPAs, supplier quality, and inspection readiness.',
    shifts: [
      'Reactive compliance \u2192 Continuous readiness',
      'Manual interpretation \u2192 AI-supported consistency',
      'Episodic inspection preparation \u2192 Always-on inspection posture',
    ],
    regulatoryContext: [
      '21 CFR Parts 210/211 (cGMP for finished pharmaceuticals) and 21 CFR Part 11 (electronic records and signatures)',
      'ICH Q10 (Pharmaceutical Quality System), ICH Q9 (Quality Risk Management), ICH Q8 (Pharmaceutical Development)',
      'EU GMP expectations including Annexes for computerized systems and validation',
      'Risk-based approach to validation consistent with CSA-aligned thinking',
    ],
    useCases: [
      {
        name: 'Deviation Management',
        description:
          'AI assists with deviation classification, severity assessment, and routing.',
        value: 'Faster triage and reduced backlog, improved consistency.',
        maturityLevels: {
          assistive: 'Auto-tagging, classification suggestions',
          generative: 'Draft root cause summaries & narratives',
          predictive: 'Predict recurrence & systemic deviation risk',
        },
      },
      {
        name: 'CAPA Management',
        description:
          'Automation supports CAPA creation, tracking, and effectiveness monitoring.',
        value:
          'Shorter CAPA cycle times, improved effectiveness verification.',
        maturityLevels: {
          assistive: 'Status tracking & reminders',
          generative: 'Draft CAPA plans & effectiveness justifications',
          predictive: 'Predict CAPA ineffectiveness',
        },
      },
      {
        name: 'SOP & Controlled Document Management',
        description:
          'AI identifies impacted documents, supports drafting updates.',
        value: 'Faster document updates, reduced inconsistency.',
        maturityLevels: {
          assistive: 'Intelligent search & impact highlighting',
          generative: 'AI-assisted SOP drafting & harmonization',
          predictive: 'Predict documentation gaps',
        },
      },
      {
        name: 'Supplier Quality Management',
        description:
          'AI reviews supplier documentation, quality agreements, audits.',
        value:
          'Faster supplier onboarding, reduced third-party quality risk.',
        maturityLevels: {
          assistive: 'Checklist automation & document validation',
          generative: 'Supplier risk summaries & assessments',
          predictive: 'Predict supplier quality failures',
        },
      },
      {
        name: 'Change Control Impact Assessment',
        description:
          'AI maps dependencies across systems, processes, products, sites.',
        value: 'Faster, more accurate impact assessments.',
        maturityLevels: {
          assistive: 'Dependency identification assistance',
          generative: 'Automated impact narratives',
          predictive: 'Predict downstream quality & compliance risk',
        },
      },
      {
        name: 'Inspection Readiness',
        description:
          'Purpose-built AI capability that continuously evaluates inspection readiness.',
        value: 'Reduced inspection disruption, faster responses.',
        maturityLevels: {
          assistive: 'Evidence retrieval & request tracking',
          generative: 'Draft inspection responses & narratives',
          predictive: 'Continuous inspection risk prediction',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven Inspection Readiness',
      overview:
        'Inspection readiness is no longer a periodic activity\u2014it is an operational state. The target end state is a continuously operating, orchestrated system that embeds inspection readiness into day-to-day Quality operations.',
      agents: [
        {
          id: 'quality-orchestrator',
          label: 'Supervisory Inspection AI Agent',
          role: 'Understands inspection context, orchestrates workflows, prioritizes tasks, coordinates domain-specific agents.',
          responsibilities: [
            'Understand inspection context and requirements',
            'Orchestrate workflows across domain agents',
            'Prioritize tasks and coordinate responses',
            'Maintain single work queue and audit log',
          ],
          type: 'orchestrator',
        },
        {
          id: 'quality-qms-agent',
          label: 'Quality Systems & QMS Agent',
          role: 'Specialized agent for quality systems.',
          responsibilities: [
            'Monitor quality system metrics',
            'Track deviation and CAPA status',
            'Assess QMS health indicators',
          ],
          type: 'agent',
        },
        {
          id: 'quality-mfg-agent',
          label: 'Manufacturing & CMC Agent',
          role: 'Specialized for manufacturing compliance.',
          responsibilities: [
            'Monitor manufacturing compliance data',
            'Track batch record status',
            'Assess CMC readiness',
          ],
          type: 'agent',
        },
        {
          id: 'quality-di-agent',
          label: 'Data Integrity / CSV Agent',
          role: 'Specialized for data integrity.',
          responsibilities: [
            'Monitor data integrity controls',
            'Validate computerized system compliance',
            'Track audit trail integrity',
          ],
          type: 'agent',
        },
        {
          id: 'quality-clinical-agent',
          label: 'Clinical & TMF Agent',
          role: 'Specialized for clinical trial files.',
          responsibilities: [
            'Monitor TMF completeness',
            'Track clinical document quality',
            'Assess inspection readiness for clinical data',
          ],
          type: 'agent',
        },
        {
          id: 'quality-vendor-agent',
          label: 'Vendor & Third-Party Oversight Agent',
          role: 'Specialized for vendor oversight.',
          responsibilities: [
            'Monitor vendor quality metrics',
            'Track supplier compliance status',
            'Assess third-party risk levels',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'QMS system data (deviations, CAPAs, changes)',
        'Batch records and manufacturing data',
        'TMF and clinical documentation',
        'Supplier quality data and audit reports',
        'Training records and qualification data',
        'Historical inspection findings',
      ],
      governance: [
        'RA labeling lead approval gate before proposed wording is finalized',
        'Safety + Medical review for safety-driven updates',
        'Quality and governance controls gate all responses',
        'Complete audit trail: trigger \u2192 evidence \u2192 changes \u2192 approvals',
        'AI proposes and drafts; humans decide and sign',
      ],
    },
    outcomes: [
      {
        metric: '30-50%',
        description:
          'reduction in deviation triage and investigation cycle time',
      },
      {
        metric: '25-40%',
        description: 'reduction in CAPA backlog',
      },
      {
        metric: '40-60%',
        description: 'faster inspection response times',
      },
      {
        metric: '90%+',
        description: 'improved consistency in severity classification',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Regulatory Affairs
  // ---------------------------------------------------------------------------
  {
    slug: 'regulatory',
    title: 'Regulatory Affairs',
    icon: '\u{1F4CB}',
    color: 'indigo',
    overview:
      'Regulatory organizations face increasing complexity: more markets, faster product change cycles, higher post-approval obligations, and rising expectations for traceability and data integrity.',
    shifts: [
      'Manual readiness checks \u2192 Continuous submission readiness',
      'Point-in-time labeling \u2192 Living labeling intelligence',
      'Spreadsheet-driven tracking \u2192 Governed, auditable orchestration',
      'Isolated document review \u2192 Structured content intelligence',
      'Reactive variation planning \u2192 Predictive variation strategy',
      'Static guidance review \u2192 AI-curated regulatory intelligence',
    ],
    regulatoryContext: [
      'ICH CTD structure (Modules 1-5) and eCTD electronic submission standards',
      '21 CFR Part 11 for electronic records, approvals, and audit trails',
      'ICH Q12 (Lifecycle Management) for post-approval change strategy',
      'Structured data expectations reinforcing governed master data',
    ],
    useCases: [
      {
        name: 'Submission Readiness & QC',
        description:
          'AI checks completeness, formatting, cross-module consistency.',
        value: 'Faster readiness cycles, fewer HA questions.',
        maturityLevels: {
          assistive: 'Automated QC checks & gap flags',
          generative: 'Readiness narratives & HA Q/A drafts',
          predictive: 'Predict deficiency risk & question likelihood',
        },
      },
      {
        name: 'Labeling Management',
        description:
          'AI maps labeling concepts across CCDS, local labels, artwork.',
        value: 'Faster impact assessment, better global consistency.',
        maturityLevels: {
          assistive: 'Change highlighting & concept tagging',
          generative: 'Impact narratives + proposed language',
          predictive: 'Predict HA scrutiny areas & divergence risk',
        },
      },
      {
        name: 'Regulatory Intelligence & Guidance',
        description: 'AI ingests guidance, Q&As, enforcement actions.',
        value: 'Better foresight, reduced reactive remediation.',
        maturityLevels: {
          assistive: 'Auto-ingest new guidance; ontology linking',
          generative: 'Synthesized "what changed" briefs',
          predictive: 'Predict emerging enforcement patterns',
        },
      },
      {
        name: 'Regulatory Commitments Management',
        description: 'Automated tracking of post-approval commitments.',
        value: 'Reduced missed commitments, improved accountability.',
        maturityLevels: {
          assistive: 'Tracking & reminders',
          generative: 'Commitment summaries + draft responses',
          predictive: 'Predict overdue/high-risk commitments',
        },
      },
      {
        name: 'RIM & Structured Data Integrity',
        description:
          'Reconciles structured regulatory records with document truth.',
        value: 'Improved data integrity, reduced reconciliation effort.',
        maturityLevels: {
          assistive: 'Field consistency checks; schema verification',
          generative: 'Auto-create/update structured records',
          predictive:
            'Predict integrity anomalies & reconciliation hotspots',
        },
      },
      {
        name: 'Structured Content Authoring',
        description:
          'AI identifies reusable content blocks, suggests templates.',
        value: 'Accelerates submission document creation.',
        maturityLevels: {
          assistive: 'Template tagging; modular block suggestions',
          generative: 'Auto-generate summaries and cover letters',
          predictive:
            'Recommend reusable fragments based on prior submissions',
        },
      },
      {
        name: 'Variation Strategy Optimization',
        description: 'AI enhances planning of post-approval changes.',
        value:
          'Reduces approval delays, enables proactive change planning.',
        maturityLevels: {
          assistive:
            'Change calendar reminders and bundle history lookups',
          generative:
            'Bundling rationales, country grouping suggestions',
          predictive: 'Forecast HA cycle time; predict rejection risks',
        },
      },
      {
        name: 'Regulatory Inspection Readiness',
        description:
          'Evidence retrieval, response drafting, readiness monitoring.',
        value: 'Faster response, reduced disruption.',
        maturityLevels: {
          assistive: 'Evidence retrieval',
          generative:
            'Draft response packets using approved language models',
          predictive: 'Predict focus areas & vulnerability themes',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven Labeling Impact Intelligence',
      overview:
        'A multi-agent, orchestrated labeling intelligence system that continuously detects labeling-impacting events, maps downstream impacts across markets and artifacts, and produces governed, regulator-ready outputs.',
      agents: [
        {
          id: 'regulatory-orchestrator',
          label: 'Supervisory Labeling Orchestrator Agent',
          role: 'Receives triggers, assigns tasks to domain agents, maintains work queue and audit log.',
          responsibilities: [
            'Receive and classify labeling triggers',
            'Assign tasks to specialized domain agents',
            'Maintain single work queue, status, and audit log',
            'Coordinate cross-functional workflows',
          ],
          type: 'orchestrator',
        },
        {
          id: 'regulatory-concept-agent',
          label: 'Concept Mapping & Delta Agent',
          role: 'Compares versions, extracts deltas, maps changes to taxonomies.',
          responsibilities: [
            'Compare CCDS, local labels, SPL/SmPC/PIL versions',
            'Extract deltas and map to labeling concepts',
            'Produce change fingerprints for downstream use',
          ],
          type: 'agent',
        },
        {
          id: 'regulatory-market-agent',
          label: 'Market Impact Agent',
          role: 'Identifies impacted markets, languages, packs/artwork.',
          responsibilities: [
            'Identify impacted markets and languages',
            'Flag divergence and required local variations',
            'Assess implementation constraints',
          ],
          type: 'agent',
        },
        {
          id: 'regulatory-evidence-agent',
          label: 'Evidence & Justification Agent',
          role: 'Retrieves supporting evidence and prepares rationale packets.',
          responsibilities: [
            'Retrieve safety data and HA correspondence',
            'Prepare traceable rationale packets',
            'Link evidence to prior justifications',
          ],
          type: 'agent',
        },
        {
          id: 'regulatory-drafting-agent',
          label: 'Response Drafting Agent',
          role: 'Drafts labeling language using approved patterns.',
          responsibilities: [
            'Draft labeling language and impact narratives',
            'Use approved patterns and controlled vocabularies',
            'Generate implementation plans',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'Labeling corpus: CCDS, SmPC, PIL, SPL, historical versions',
        'Regulatory systems: RIM metadata, submission history, HA correspondence',
        'Safety inputs: signal decisions, safety narratives, risk documents',
        'Artwork/packaging: labeling artwork files + market/pack mappings',
        'Commitments & change history: prior commitments, variation calendars',
        'Controlled vocab/taxonomies: MedDRA/WHO-DD mappings',
      ],
      governance: [
        'RA labeling lead approval gate before finalization',
        'Safety + Medical review for safety-driven updates',
        'Localization/regional review for market-specific constraints',
        'Complete audit trail: trigger \u2192 evidence \u2192 changes \u2192 approvals',
        'AI proposes and drafts; humans decide and sign',
      ],
    },
    outcomes: [
      {
        metric: '20-35%',
        description: 'reduction in submission readiness timelines',
      },
      {
        metric: '30-50%',
        description: 'improvement in commitment tracking accuracy',
      },
      {
        metric: '80%+',
        description: 'faster labeling impact assessments',
      },
      {
        metric: '50%+',
        description: 'fewer late-cycle submission issues',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Clinical Development & Operations
  // ---------------------------------------------------------------------------
  {
    slug: 'clinical',
    title: 'Clinical Development & Operations',
    icon: '\u{1F52C}',
    color: 'violet',
    overview:
      'Clinical operations are under constant pressure to accelerate timelines while improving oversight quality across studies, sites, and vendors.',
    shifts: [
      'Retrospective QC \u2192 Near real-time quality intelligence',
      'Manual coordination \u2192 Workflow orchestration',
      'Fragmented oversight \u2192 Predictive risk management',
    ],
    regulatoryContext: [
      '21 CFR Part 11 for electronic records and signatures',
      'ICH-GCP requirements for clinical trial conduct',
      'TMF reference model for trial master file management',
      'Risk-based monitoring frameworks',
    ],
    useCases: [
      {
        name: 'Study Startup Automation',
        description:
          'AI coordinates activation artifacts, owner routing, readiness visibility.',
        value: 'Faster activation, reduced administrative burden.',
        maturityLevels: {
          assistive: 'Checklist automation',
          generative: 'Startup plans & artifact drafts',
          predictive: 'Predict activation delays and bottlenecks',
        },
      },
      {
        name: 'Protocol Interpretation & SOA Generation',
        description:
          'AI extracts protocol requirements into structured plans.',
        value: 'Reduced downstream rework, better alignment.',
        maturityLevels: {
          assistive: 'Search/extraction',
          generative: 'SOA + narratives + operational briefs',
          predictive: 'Predict feasibility and burden risks',
        },
      },
      {
        name: 'TMF Quality Oversight',
        description:
          'AI continuously assesses completeness, timeliness, quality.',
        value: 'Reduced QC labor, earlier risk detection.',
        maturityLevels: {
          assistive: 'Auto-classification',
          generative: 'QC summaries & gap narratives',
          predictive:
            'Predict inspection exposure & missing artifacts',
        },
      },
      {
        name: 'Risk-Based Monitoring',
        description:
          'AI synthesizes data streams to prioritize monitoring actions.',
        value: 'Better targeting, reduced monitoring cost.',
        maturityLevels: {
          assistive: 'Dashboards/alerts',
          generative: 'Site risk narratives',
          predictive: 'Predict site risk & intervention timing',
        },
      },
      {
        name: 'Vendor & CRO Oversight',
        description:
          'AI monitors KPIs and deliverables with escalation intelligence.',
        value: 'Improved accountability, reduced vendor risk.',
        maturityLevels: {
          assistive: 'KPI aggregation',
          generative: 'Performance summaries & escalation drafts',
          predictive: 'Predict CRO underperformance',
        },
      },
      {
        name: 'Clinical Inspection Readiness',
        description: 'AI supports inspection response and readiness.',
        value: 'Faster responses, less disruption.',
        maturityLevels: {
          assistive: 'Evidence retrieval',
          generative: 'Draft inspection responses',
          predictive: 'Predict vulnerabilities & focus areas',
        },
      },
      {
        name: 'RWD Feasibility & Diversity Planning',
        description: 'AI uses real-world data to model eligibility.',
        value:
          'Improves feasibility planning, accelerates site activation.',
        maturityLevels: {
          assistive: 'RWD cohort signals; diversity metric flags',
          generative:
            'RWD models of eligibility & site projections',
          predictive: 'Predict enrollment delays & diversity gaps',
        },
      },
      {
        name: 'Patient Recruitment & Engagement',
        description: 'AI assists with prescreening, patient matching.',
        value: 'Enhances recruitment efficiency, reduces attrition.',
        maturityLevels: {
          assistive: 'Prescreening match alerts',
          generative:
            'Outreach message drafts; conversational assistants',
          predictive: 'Predict dropout risk & attrition trends',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven TMF Quality Intelligence',
      overview:
        'A continuous, orchestrated TMF intelligence system embedded into clinical operations that monitors TMF completeness and quality in near real time.',
      agents: [
        {
          id: 'clinical-orchestrator',
          label: 'TMF Orchestrator Agent',
          role: 'Maintains TMF health status, assigns work, tracks status.',
          responsibilities: [
            'Maintain TMF health status across studies',
            'Assign work to specialized agents',
            'Track status, owners, due dates, and audit logs',
          ],
          type: 'orchestrator',
        },
        {
          id: 'clinical-classification-agent',
          label: 'Document Classification & Metadata Agent',
          role: 'Classifies artifacts, validates metadata quality.',
          responsibilities: [
            'Classify artifacts (ICFs, IBs, monitoring reports)',
            'Validate metadata quality and filing location',
            'Ensure version consistency',
          ],
          type: 'agent',
        },
        {
          id: 'clinical-completeness-agent',
          label: 'Completeness & Expectedness Agent',
          role: 'Determines expected artifacts by study phase.',
          responsibilities: [
            'Determine expected artifacts by study phase and country',
            'Flag missing or overdue items',
            'Identify patterns indicating likely gaps',
          ],
          type: 'agent',
        },
        {
          id: 'clinical-scoring-agent',
          label: 'Quality Scoring & Findings Agent',
          role: 'Evaluates quality signals and generates summaries.',
          responsibilities: [
            'Evaluate quality signals (signatures, dates, completeness)',
            'Generate QC summaries and issue statements',
            'Track quality trends over time',
          ],
          type: 'agent',
        },
        {
          id: 'clinical-inspection-agent',
          label: 'Inspection Response Agent',
          role: 'Retrieves artifacts, drafts narratives for inspections.',
          responsibilities: [
            'Retrieve artifacts for inspection requests',
            'Draft narratives and assemble evidence packets',
            'Link evidence to readiness posture and audit trail',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'eTMF system of record (metadata, versions, audit trails)',
        'Study plans and expectedness rules',
        'CTMS for study/site status and timelines',
        'CRO portals or shared repositories',
        'Quality signals: TMF plan, QC findings logs',
        'Training/roles information',
      ],
      governance: [
        'TMF lead / Clinical Ops review gate on gap closures',
        'Quality/Inspection readiness review for narratives',
        'Role-based access and audit logging',
        'AI detects, drafts, recommends; humans approve and attest',
      ],
    },
    outcomes: [
      {
        metric: '30-50%',
        description: 'reduction in manual TMF QC effort',
      },
      {
        metric: '20-30%',
        description: 'faster study startup timelines',
      },
      {
        metric: '60%+',
        description: 'faster inspection response cycles',
      },
      {
        metric: '40%+',
        description: 'improved vendor performance visibility',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Manufacturing & Supply Chain
  // ---------------------------------------------------------------------------
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Supply Chain',
    icon: '\u{1F3ED}',
    color: 'amber',
    overview:
      'Manufacturing and supply chain functions sit at the point where compliance, product availability, and revenue converge. Despite advances in MES, LIMS, and ERP systems, many processes remain manual, rule-heavy, and reactive.',
    shifts: [
      'Full-record review \u2192 Exception-based oversight',
      'Reactive issue management \u2192 Predictive risk mitigation',
      'Siloed execution \u2192 End-to-end orchestration across systems and sites',
    ],
    regulatoryContext: [
      '21 CFR Parts 210/211 (cGMP) and 21 CFR Part 11 for electronic records',
      'ICH Q7 (API GMP), ICH Q10 (PQS), ICH Q9 (quality risk management)',
      'Process validation and continued process verification expectations',
      'EU and global expectations for computerized system governance',
    ],
    useCases: [
      {
        name: 'Batch Record Review by Exception',
        description:
          'AI evaluates batch execution data, flagging only deviations.',
        value: 'Reduced QA review effort, faster release timelines.',
        maturityLevels: {
          assistive: 'Data extraction & checks',
          generative: 'Exception narratives & justifications',
          predictive: 'Predict batch release risk',
        },
      },
      {
        name: 'Material Release Automation',
        description:
          'Automation tracks readiness across quality testing, documentation.',
        value: 'Shorter release cycles, improved coordination.',
        maturityLevels: {
          assistive: 'Status visibility',
          generative: 'Release summaries & evidence packets',
          predictive: 'Predict release delays',
        },
      },
      {
        name: 'Predictive Equipment Maintenance',
        description:
          'AI analyzes equipment performance, calibration history.',
        value: 'Reduced unplanned downtime, fewer deviations.',
        maturityLevels: {
          assistive: 'Alert consolidation',
          generative: 'Maintenance & investigation summaries',
          predictive: 'Predict equipment failure',
        },
      },
      {
        name: 'Environmental Monitoring Intelligence',
        description: 'AI trends EM data across facilities.',
        value: 'Earlier risk detection, reduced investigation effort.',
        maturityLevels: {
          assistive: 'Threshold alerts',
          generative: 'Excursion investigation drafts',
          predictive: 'Predict contamination risk',
        },
      },
      {
        name: 'Supply Chain Risk Intelligence',
        description:
          'AI synthesizes supplier performance, inventory, logistics data.',
        value: 'Faster response to disruptions, reduced shortages.',
        maturityLevels: {
          assistive: 'Signal aggregation',
          generative: 'Scenario narratives',
          predictive: 'Predict supply disruption',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven Batch Record Review by Exception',
      overview:
        'The target end state is an AI-driven, exception-based review capability that focuses Quality and Manufacturing attention only where risk exists.',
      agents: [
        {
          id: 'manufacturing-orchestrator',
          label: 'Batch Review Orchestrator Agent',
          role: 'Initiates review upon batch completion, coordinates agents.',
          responsibilities: [
            'Initiate review upon batch completion',
            'Coordinate downstream agents',
            'Maintain single audit log of actions and decisions',
          ],
          type: 'orchestrator',
        },
        {
          id: 'manufacturing-ingestion-agent',
          label: 'Data Ingestion & Normalization Agent',
          role: 'Ingests batch data from MES, LIMS.',
          responsibilities: [
            'Ingest batch data from MES, LIMS, and ancillary systems',
            'Normalize structured values',
            'Extract relevant unstructured content',
          ],
          type: 'agent',
        },
        {
          id: 'manufacturing-rules-agent',
          label: 'Rules & Specification Evaluation Agent',
          role: 'Applies approved business rules.',
          responsibilities: [
            'Apply approved business rules and specifications',
            'Flag hard-limit breaches and procedural deviations',
            'Validate acceptance criteria compliance',
          ],
          type: 'agent',
        },
        {
          id: 'manufacturing-anomaly-agent',
          label: 'Anomaly Detection & Pattern Analysis Agent',
          role: 'Uses historical data to identify outliers.',
          responsibilities: [
            'Identify statistical outliers and drift',
            'Detect unusual combinations of acceptable values',
            'Correlate patterns with prior deviations',
          ],
          type: 'agent',
        },
        {
          id: 'manufacturing-summary-agent',
          label: 'Exception Summarization Agent',
          role: 'Generates structured summaries of flagged exceptions.',
          responsibilities: [
            'Generate concise structured summaries',
            'Link exceptions to historical context',
            'Prepare QA-ready review packages',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'MES data: batch execution steps, parameters, timestamps',
        'LIMS data: analytical results, specifications, trends',
        'Specifications & control limits',
        'Equipment and calibration data',
        'Deviation history linked to similar products',
        'Historical QA release decisions',
      ],
      governance: [
        'QA reviewers retain final authority for release decisions',
        'AI-generated exceptions are recommendations, not decisions',
        'Reviewers can accept, override, or escalate findings',
        'All AI outputs and reviewer actions are logged and auditable',
        'Clear intended-use documentation defines automation boundaries',
      ],
    },
    outcomes: [
      {
        metric: '50-80%',
        description: 'reduction in batch record review effort',
      },
      {
        metric: '20-40%',
        description: 'reduction in unplanned equipment downtime',
      },
      {
        metric: '35%+',
        description: 'faster supply disruption response',
      },
      {
        metric: '95%+',
        description: 'improved inspection defensibility',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Safety & Pharmacovigilance
  // ---------------------------------------------------------------------------
  {
    slug: 'safety',
    title: 'Safety & Pharmacovigilance',
    icon: '\u2695\uFE0F',
    color: 'rose',
    overview:
      'Safety organizations face a structural challenge: case volumes are growing 8-12% annually, regulatory timelines are compressing, and qualified PV professionals remain scarce.',
    shifts: [
      'Manual, repetitive processing \u2192 AI-assisted throughput',
      'Point-in-time signal review \u2192 Continuous safety intelligence',
      'Reactive compliance \u2192 Predictive workload and risk management',
    ],
    regulatoryContext: [
      'ICH E2B(R3) for ICSR data standards and exchange',
      'FDA FAERS / EMA EudraVigilance reporting obligations',
      'EU AI Act classifies certain PV applications as high-risk',
      'FDA AI/ML guidance for algorithm transparency and change control',
    ],
    useCases: [
      {
        name: 'Automated Case Intake',
        description:
          'AI extracts AE data from structured and unstructured sources.',
        value: 'Faster case intake, reduced manual data entry.',
        maturityLevels: {
          assistive: 'Extraction & coding suggestions',
          generative: 'Structured summaries',
          predictive: 'Volume forecasting',
        },
      },
      {
        name: 'AI-Assisted Narrative Generation',
        description:
          'AI supports triage, routing, and narrative preparation.',
        value: 'Reduced processing time, improved throughput.',
        maturityLevels: {
          assistive: 'Routing & triage',
          generative: 'Narrative drafting',
          predictive: 'Complexity prediction',
        },
      },
      {
        name: 'Signal Detection Enhancement',
        description:
          'AI augments traditional methods with pattern recognition.',
        value: 'Earlier detection of safety signals.',
        maturityLevels: {
          assistive: 'Rule-based alerts',
          generative: 'Signal summaries',
          predictive: 'Emerging signal prediction',
        },
      },
      {
        name: 'Expedited Reporting Intelligence',
        description: 'AI tracks timelines, readiness, documentation.',
        value: 'Fewer late submissions, improved compliance.',
        maturityLevels: {
          assistive: 'Deadline tracking',
          generative: 'Submission drafts',
          predictive: 'Compliance risk scoring',
        },
      },
      {
        name: 'Third-Party & Partner PV Oversight',
        description:
          'AI monitors partner compliance, case reconciliation.',
        value: 'Reduced oversight effort, improved accountability.',
        maturityLevels: {
          assistive: 'Reconciliation checks',
          generative: 'Performance summaries',
          predictive: 'Non-compliance prediction',
        },
      },
    ],
    deepDive: {
      title: 'AI-Assisted Case Processing & Narrative Generation',
      overview:
        'The target end state is an AI-assisted, medically governed case processing capability that increases throughput while preserving human judgment.',
      agents: [
        {
          id: 'safety-orchestrator',
          label: 'Case Orchestrator Agent',
          role: 'Manages case lifecycle and task routing.',
          responsibilities: [
            'Manage case lifecycle and task routing',
            'Assign work based on case type and complexity',
            'Maintain complete audit trail',
          ],
          type: 'orchestrator',
        },
        {
          id: 'safety-ingestion-agent',
          label: 'Data Ingestion & Entity Extraction Agent',
          role: 'Ingests source documents, extracts key entities.',
          responsibilities: [
            'Ingest source documents (forms, PDFs, emails)',
            'Extract key entities: patient, drug, event, reporter',
            'Propose MedDRA and WHO-DD coding',
          ],
          type: 'agent',
        },
        {
          id: 'safety-timeline-agent',
          label: 'Timeline & Context Reconstruction Agent',
          role: 'Constructs chronological narratives.',
          responsibilities: [
            'Construct chronological narratives from disparate data',
            'Identify inconsistencies or missing information',
            'Build temporal context for case assessment',
          ],
          type: 'agent',
        },
        {
          id: 'safety-narrative-agent',
          label: 'Narrative Drafting Agent',
          role: 'Generates structured case narratives.',
          responsibilities: [
            'Generate structured case narratives using templates',
            'Incorporate extracted data and timelines',
            'Flag uncertainty or incomplete information',
          ],
          type: 'agent',
        },
        {
          id: 'safety-compliance-agent',
          label: 'Compliance & Readiness Agent',
          role: 'Checks completeness for reporting requirements.',
          responsibilities: [
            'Check completeness for reporting requirements',
            'Track expedited reporting timelines',
            'Flag cases at risk of late submission',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'Safety database (ICSR records, metadata, status)',
        'Source documents: CIOMS forms, literature, emails, transcripts',
        'Controlled vocabularies: MedDRA, WHO-DD',
        'Reporting rules: country-specific timelines and criteria',
        'Historical cases: prior narratives, decisions, outcomes',
        'Partner data: inbound cases from CROs or affiliates',
      ],
      governance: [
        'Case processors review and refine AI-generated content',
        'Medical reviewers approve seriousness, causality, narratives',
        'AI suggestions are transparent and editable',
        'All edits, approvals, decisions logged for inspection',
        'Hallucination mitigation: source-grounded generation',
        'Prompt governance: controlled templates, prohibited content',
      ],
    },
    outcomes: [
      {
        metric: '50-70%',
        description: 'reduction in narrative drafting time',
      },
      {
        metric: '40%+',
        description:
          'improved case throughput without added headcount',
      },
      {
        metric: '60%+',
        description: 'enhanced consistency across case narratives',
      },
      {
        metric: '30%+',
        description: 'reduction in late expedited submissions',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Medical Affairs
  // ---------------------------------------------------------------------------
  {
    slug: 'medical-affairs',
    title: 'Medical Affairs',
    icon: '\u{1F50D}',
    color: 'teal',
    overview:
      'Medical Affairs faces compounding pressure: promotional review volumes have grown 15-25% annually, MLR cycle times average 4-6 weeks, and content rework rates often exceed 30%.',
    shifts: [
      'Manual review \u2192 AI-assisted consistency and speed',
      'Fragmented content \u2192 Structured scientific knowledge',
      'Reactive compliance \u2192 Predictive risk and workload management',
    ],
    regulatoryContext: [
      'FDA OPDP/APLB guidance on promotional and medical communications',
      'PhRMA Code / EFPIA Code self-regulatory standards',
      '21 CFR Part 11 for electronic records and signatures',
      'EU AI Act implications for content generation',
    ],
    useCases: [
      {
        name: 'MLR Review Automation',
        description:
          'AI pre-screens content for claims, references, compliance risks.',
        value: 'Shorter MLR cycle times, reduced reviewer burden.',
        maturityLevels: {
          assistive: 'Claims tagging, reference checks',
          generative: 'Draft review comments',
          predictive: 'Rejection risk scoring',
        },
      },
      {
        name: 'Medical Inquiry Management',
        description:
          'AI triages inquiries, retrieves scientific content, drafts responses.',
        value: 'Faster inquiry response, improved consistency.',
        maturityLevels: {
          assistive: 'Triage & retrieval',
          generative: 'Response drafting',
          predictive: 'Volume/topic forecasting',
        },
      },
      {
        name: 'Scientific Content Intelligence',
        description:
          'AI structures, tags, summarizes medical content.',
        value: 'Improved content reuse, reduced duplication.',
        maturityLevels: {
          assistive: 'Auto-tagging & classification',
          generative: 'Structured summaries',
          predictive: 'Content gap analysis',
        },
      },
      {
        name: 'Field Insight Intelligence',
        description:
          'AI processes field medical insights from calls, notes, CRM.',
        value:
          'Better visibility into HCP needs, earlier detection of trends.',
        maturityLevels: {
          assistive: 'Transcription & tagging',
          generative: 'Insight synthesis',
          predictive: 'Trend prediction',
        },
      },
      {
        name: 'Scientific Response Letter Generation',
        description:
          'AI drafts response letters using approved language.',
        value: 'Faster response preparation, reduced rework.',
        maturityLevels: {
          assistive: 'Template matching',
          generative: 'Letter drafting',
          predictive: 'Scrutiny risk prediction',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven MLR Review Intelligence',
      overview:
        'The target end state is an AI-assisted, committee-governed MLR intelligence capability that accelerates reviews and improves consistency.',
      agents: [
        {
          id: 'medical-affairs-orchestrator',
          label: 'MLR Orchestrator Agent',
          role: 'Manages intake of materials and review workflow.',
          responsibilities: [
            'Manage intake of materials and review workflow',
            'Route content to specialized agents',
            'Track review status, comments, and approvals',
          ],
          type: 'orchestrator',
        },
        {
          id: 'medical-affairs-claims-agent',
          label: 'Claims & Content Analysis Agent',
          role: 'Identifies scientific and promotional claims.',
          responsibilities: [
            'Identify scientific and promotional claims',
            'Map claims to approved indications and labels',
            'Flag off-label or unsupported statements',
          ],
          type: 'agent',
        },
        {
          id: 'medical-affairs-reference-agent',
          label: 'Reference Validation Agent',
          role: 'Verifies cited references are current and accurate.',
          responsibilities: [
            'Verify references are current and approved',
            'Flag outdated or mismatched citations',
            'Validate accuracy of reference representation',
          ],
          type: 'agent',
        },
        {
          id: 'medical-affairs-risk-agent',
          label: 'Risk & Consistency Assessment Agent',
          role: 'Compares content against prior approved materials.',
          responsibilities: [
            'Compare content against prior approved materials',
            'Highlight language or positioning inconsistencies',
            'Assess regulatory or compliance risk',
          ],
          type: 'agent',
        },
        {
          id: 'medical-affairs-drafting-agent',
          label: 'Reviewer Support & Drafting Agent',
          role: 'Generates draft review comments.',
          responsibilities: [
            'Generate draft review comments or suggested edits',
            'Provide rationale tied to guidance and precedent',
            'Support consistent reviewer decision-making',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'Promotional and non-promotional materials under review',
        'Approved claims and labeling content (CCDS, SmPC, PI)',
        'Reference libraries: publications, clinical guidelines',
        'Historical MLR decisions and comments',
        'Medical and regulatory guidance standards',
        'Content metadata: audience, channel, market',
      ],
      governance: [
        'MLR committee members retain final approval authority',
        'AI outputs are transparent, explainable, editable',
        'Reviewers can accept, modify, or reject suggestions',
        'All comments, edits, decisions logged and auditable',
        'Intended-use documentation defines AI boundaries',
      ],
    },
    outcomes: [
      {
        metric: '25-35%',
        description: 'reduction in MLR review cycle time',
      },
      {
        metric: '20-30%',
        description: 'reduction in content rework rates',
      },
      {
        metric: '50%+',
        description: 'faster medical inquiry response times',
      },
      {
        metric: '40%+',
        description: 'better utilization of scientific content',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Cybersecurity & Third-Party Risk Management
  // ---------------------------------------------------------------------------
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Third-Party Risk Management',
    icon: '\u{1F512}',
    color: 'red',
    overview:
      'Cybersecurity and third-party risk are no longer IT-only concerns. In life sciences, they are now core GxP, data integrity, and inspection risks.',
    shifts: [
      'Periodic assessments \u2192 Continuous cyber and vendor risk monitoring',
      'Manual document review \u2192 AI-assisted risk interpretation',
      'Reactive remediation \u2192 Predictive risk prioritization',
      'Siloed functional oversight \u2192 Enterprise-wide, inspection-ready governance',
    ],
    regulatoryContext: [
      'NIST Cybersecurity Framework (CSF 2.0) for risk management and control alignment',
      'ISO/IEC 27001-aligned security management and assurance artifacts',
      'EU NIS2 cybersecurity obligations for in-scope entities',
      '21 CFR Part 11 and data integrity expectations for regulated records',
    ],
    useCases: [
      {
        name: 'Vendor Onboarding Automation',
        description:
          'AI automates intake and review of vendor security documentation.',
        value: 'Faster onboarding, reduced manual review effort.',
        maturityLevels: {
          assistive: 'Checklist automation',
          generative: 'Risk summaries & gap narratives',
          predictive: 'Predict inherent vendor risk',
        },
      },
      {
        name: 'Continuous Vendor Risk Monitoring',
        description:
          'AI continuously monitors vendor controls and incidents.',
        value: 'Earlier detection of vendor risk.',
        maturityLevels: {
          assistive: 'Alert aggregation',
          generative: 'Ongoing risk assessments',
          predictive: 'Predict vendor control failure',
        },
      },
      {
        name: 'Cyber Incident Intelligence',
        description:
          'AI aggregates alerts, incidents, contextual data.',
        value:
          'Faster incident understanding, reduced escalation delays.',
        maturityLevels: {
          assistive: 'Alert aggregation',
          generative: 'Incident summaries',
          predictive: 'Predict escalation likelihood',
        },
      },
      {
        name: 'Access & Identity Risk Intelligence',
        description:
          'AI analyzes access roles, entitlements, usage patterns.',
        value: 'Reduced insider and data integrity risk.',
        maturityLevels: {
          assistive: 'Role analysis',
          generative: 'Review narratives',
          predictive: 'Predict access misuse risk',
        },
      },
      {
        name: 'Cyber Audit & Inspection Readiness',
        description:
          'AI assembles evidence, narratives, control mappings.',
        value: 'Faster audit response, reduced disruption.',
        maturityLevels: {
          assistive: 'Evidence assembly',
          generative: 'Audit response drafts',
          predictive: 'Predict audit findings',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven Vendor Risk & TPRM Intelligence',
      overview:
        'The target end state is a continuously operating, AI-driven vendor risk intelligence capability that integrates cybersecurity, quality, and operational oversight into a single, inspection-ready system.',
      agents: [
        {
          id: 'cybersecurity-orchestrator',
          label: 'Vendor Risk Orchestrator Agent',
          role: 'Maintains vendor inventory, coordinates risk assessment.',
          responsibilities: [
            'Maintain complete inventory of vendors and services',
            'Coordinate risk assessment and monitoring workflows',
            'Track ownership, SLAs, and audit trail',
          ],
          type: 'orchestrator',
        },
        {
          id: 'cybersecurity-docs-agent',
          label: 'Documentation & Control Review Agent',
          role: 'Ingests SOC reports, ISO certifications.',
          responsibilities: [
            'Ingest SOC reports, ISO certifications, questionnaires',
            'Map controls to internal and regulatory requirements',
            'Flag missing, outdated, or weak controls',
          ],
          type: 'agent',
        },
        {
          id: 'cybersecurity-monitoring-agent',
          label: 'Continuous Signal Monitoring Agent',
          role: 'Monitors security incidents and threat feeds.',
          responsibilities: [
            'Monitor security incidents and breach notifications',
            'Ingest operational and financial stress indicators',
            'Correlate signals with vendor criticality',
          ],
          type: 'agent',
        },
        {
          id: 'cybersecurity-scoring-agent',
          label: 'Risk Scoring & Prioritization Agent',
          role: 'Aggregates inherent risk and control maturity.',
          responsibilities: [
            'Aggregate inherent risk and control maturity',
            'Produce dynamic vendor risk scores',
            'Highlight vendors requiring immediate review',
          ],
          type: 'agent',
        },
        {
          id: 'cybersecurity-audit-agent',
          label: 'Audit & Inspection Support Agent',
          role: 'Assembles evidence packets for audits.',
          responsibilities: [
            'Assemble evidence packets for audits and inspections',
            'Draft oversight narratives',
            'Link evidence to documented controls and monitoring',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'Vendor inventory & contracts: services, data access, criticality',
        'Security documentation: SOC reports, ISO certifications',
        'Quality agreements & SLAs',
        'Incident and breach data',
        'Threat intelligence feeds',
        'Access logs & IAM data',
        'Historical audit findings and remediation records',
      ],
      governance: [
        'AI flags and prioritizes risk; humans decide mitigation',
        'Escalation thresholds and approval gates are configurable',
        'All AI outputs, decisions, actions logged and auditable',
        'Intended-use boundaries clearly defined for inspection',
      ],
    },
    outcomes: [
      {
        metric: '40-60%',
        description: 'reduction in manual vendor assessment effort',
      },
      {
        metric: '70%+',
        description:
          'earlier identification of vendor risk signals',
      },
      {
        metric: '50%+',
        description:
          'reduced audit and inspection preparation time',
      },
      {
        metric: '35%+',
        description: 'more consistent vendor risk scoring',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. Corporate & Enabling Functions
  // ---------------------------------------------------------------------------
  {
    slug: 'corporate',
    title: 'Corporate & Enabling Functions',
    icon: '\u{1F3E2}',
    color: 'slate',
    overview:
      'Corporate and enabling functions\u2014Finance, HR, Procurement, Legal, and IT\u2014play a direct role in compliance, inspection readiness, and operational continuity in regulated life sciences environments.',
    shifts: [
      'Manual coordination \u2192 Workflow-driven execution with clear accountability',
      'Static, periodic controls \u2192 Continuous operational intelligence',
      'Reactive issue resolution \u2192 Predictive service and risk management',
      'Fragmented departmental systems \u2192 Cross-functional orchestration',
    ],
    regulatoryContext: [
      'SOX / ICFR expectations and COSO-aligned practices for financial controls',
      '21 CFR Part 11 and validation expectations for regulated systems',
      'IT governance frameworks (ITIL/COBIT-aligned) for service management',
      'Privacy and security obligations (GDPR, enterprise cybersecurity)',
    ],
    useCases: [
      {
        name: 'HR Operations Automation',
        description:
          'AI supports onboarding, training coordination, policy interpretation.',
        value: 'Faster onboarding, improved training compliance.',
        maturityLevels: {
          assistive: 'Task automation',
          generative: 'Policy & onboarding summaries',
          predictive: 'Predict attrition & skill gaps',
        },
      },
      {
        name: 'Finance Close & Controls Automation',
        description:
          'AI assists with reconciliations, variance explanation.',
        value:
          'Faster, more predictable closes, reduced manual effort.',
        maturityLevels: {
          assistive: 'Reconciliation support',
          generative: 'Close narratives & explanations',
          predictive: 'Predict close delays & issues',
        },
      },
      {
        name: 'Procurement & Contract Intelligence',
        description: 'AI structures contracts, tracks obligations.',
        value: 'Shorter contracting cycles, improved visibility.',
        maturityLevels: {
          assistive: 'Status tracking',
          generative: 'Contract & spend summaries',
          predictive: 'Predict supplier & spend risk',
        },
      },
      {
        name: 'Legal Operations Intelligence',
        description: 'AI analyzes agreements, clauses, precedents.',
        value: 'Reduced review effort, improved consistency.',
        maturityLevels: {
          assistive: 'Clause search',
          generative: 'Draft agreements & summaries',
          predictive: 'Predict contractual risk',
        },
      },
      {
        name: 'IT Service Management Intelligence',
        description: 'AI enhances ticket triage, resolution support.',
        value: 'Faster incident resolution, reduced downtime.',
        maturityLevels: {
          assistive: 'Ticket routing',
          generative: 'Resolution drafts',
          predictive: 'Predict incident spikes',
        },
      },
    ],
    deepDive: {
      title: 'AI-Driven IT Service Management Intelligence',
      overview:
        'The target end state is an AI-augmented ITSM capability that accelerates resolution, improves consistency, and proactively identifies operational risk.',
      agents: [
        {
          id: 'corporate-orchestrator',
          label: 'ITSM Orchestrator Agent',
          role: 'Manages incident, request, and change workflows.',
          responsibilities: [
            'Manage incident, request, and change workflows',
            'Route work based on priority and system criticality',
            'Maintain full audit trail',
          ],
          type: 'orchestrator',
        },
        {
          id: 'corporate-triage-agent',
          label: 'Classification & Triage Agent',
          role: 'Analyzes incoming tickets using NLP.',
          responsibilities: [
            'Analyze incoming tickets using NLP',
            'Identify impacted systems and risk level',
            'Propose routing and priority',
          ],
          type: 'agent',
        },
        {
          id: 'corporate-resolution-agent',
          label: 'Resolution & Knowledge Agent',
          role: 'Retrieves relevant knowledge articles.',
          responsibilities: [
            'Retrieve relevant knowledge articles and past incidents',
            'Draft resolution steps for technician review',
            'Link to related historical fixes',
          ],
          type: 'agent',
        },
        {
          id: 'corporate-change-agent',
          label: 'Change Impact & Risk Agent',
          role: 'Assesses potential impact of changes.',
          responsibilities: [
            'Assess impact of changes on GxP systems',
            'Flag changes requiring additional review',
            'Evaluate validation implications',
          ],
          type: 'agent',
        },
        {
          id: 'corporate-prediction-agent',
          label: 'Service Risk Prediction Agent',
          role: 'Analyzes historical trends for predictions.',
          responsibilities: [
            'Analyze historical trends for incident prediction',
            'Predict incident spikes or recurring failures',
            'Recommend proactive interventions',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'ITSM platform data (incidents, requests, changes, SLAs)',
        'CMDB (systems, dependencies, criticality, GxP designation)',
        'Knowledge base (runbooks, SOPs, prior resolutions)',
        'System monitoring and alert data',
        'Change management records',
        'Validation and risk classification metadata',
      ],
      governance: [
        'IT staff review and approve AI-proposed routing and resolutions',
        'Change managers retain approval authority for high-risk changes',
        'AI recommendations are transparent and explainable',
        'All actions logged for audit and inspection purposes',
        'Intended-use documentation defines automation boundaries',
      ],
    },
    outcomes: [
      {
        metric: '30-50%',
        description: 'faster incident resolution in ITSM',
      },
      {
        metric: '40%+',
        description: 'more predictable financial close cycles',
      },
      {
        metric: '25-35%',
        description: 'faster onboarding and access provisioning',
      },
      {
        metric: '50%+',
        description:
          'reduced ticket backlogs and operational noise',
      },
    ],
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}
