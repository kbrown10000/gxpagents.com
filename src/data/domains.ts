// =============================================================================
// domains.ts - Complete data layer for gxpagents.com
// All content derived from the USDM white paper on AI agents in life sciences.
// Source: USDM AI Use Cases Case Dossier, January 2026
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
      'Quality functions are increasingly expected to operate as the backbone of regulatory confidence, operational continuity, and enterprise risk management. However, most Quality organizations still rely on manual coordination, document-heavy processes, and institutional knowledge to manage deviations, CAPAs, supplier quality, and inspection readiness. As regulatory scrutiny intensifies and operational complexity grows, these approaches no longer scale. Inspections now test not just documentation but also organizational readiness, data integrity, cross-functional alignment, speed, and the consistency of response.',
    shifts: [
      'Reactive compliance → Continuous readiness',
      'Manual interpretation → AI-supported consistency',
      'Episodic inspection preparation → Always-on inspection posture',
    ],
    regulatoryContext: [
      '21 CFR Parts 210/211 (cGMP for finished pharmaceuticals) and 21 CFR Part 11 (electronic records and signatures) for inspection-ready execution and traceability',
      'ICH Q10 (Pharmaceutical Quality System), ICH Q9 (Quality Risk Management), and ICH Q8 (Pharmaceutical Development) as the basis for risk-based oversight and continuous improvement',
      'EU GMP expectations, including Annexes that influence computerized systems and validation posture, alongside regulator expectations for data integrity (ALCOA+) and audit trail review',
      'A risk-based approach to validation and assurance consistent with modern regulatory expectations for computerized systems and automation (including CSA-aligned thinking where applicable)',
    ],
    useCases: [
      {
        name: 'Deviation Management',
        description:
          'AI assists with deviation classification, severity assessment, and routing by analyzing free-text descriptions, batch context, and historical patterns.',
        value: 'Faster triage and reduced backlog, improved consistency in severity and categorization, and earlier identification of systemic issues.',
        maturityLevels: {
          assistive: 'Auto-tagging, classification suggestions',
          generative: 'Draft root cause summaries & narratives',
          predictive: 'Predict recurrence & systemic deviation risk',
        },
      },
      {
        name: 'CAPA Management',
        description:
          'Automation supports CAPA creation, tracking, and effectiveness monitoring, with AI-generated summaries and insights.',
        value:
          'Shorter CAPA cycle times, improved effectiveness verification, and stronger inspection defensibility.',
        maturityLevels: {
          assistive: 'Status tracking & reminders',
          generative: 'Draft CAPA plans & effectiveness justifications',
          predictive: 'Predict CAPA ineffectiveness',
        },
      },
      {
        name: 'SOP & Controlled Document Management',
        description:
          'AI identifies impacted documents, supports drafting updates, and ensures alignment across SOPs and related records.',
        value: 'Faster document updates, reduced inconsistency across Quality documentation, and improved data integrity and traceability.',
        maturityLevels: {
          assistive: 'Intelligent search & impact highlighting',
          generative: 'AI-assisted SOP drafting & harmonization',
          predictive: 'Predict documentation gaps',
        },
      },
      {
        name: 'Supplier Quality Management',
        description:
          'AI reviews supplier documentation, quality agreements, audits, and ongoing performance indicators.',
        value:
          'Faster supplier onboarding, reduced third-party quality risk, and improved supplier oversight and audit readiness.',
        maturityLevels: {
          assistive: 'Checklist automation & document validation',
          generative: 'Supplier risk summaries & assessments',
          predictive: 'Predict supplier quality failures',
        },
      },
      {
        name: 'Change Control Impact Assessment',
        description:
          'AI maps dependencies across systems, processes, products, and sites to assess downstream impacts.',
        value: 'Faster, more accurate impact assessments, reduced compliance risk, and improved cross-functional coordination.',
        maturityLevels: {
          assistive: 'Dependency identification assistance',
          generative: 'Automated impact narratives',
          predictive: 'Predict downstream quality & compliance risk',
        },
      },
      {
        name: 'Inspection Readiness',
        description:
          'A purpose-built AI capability that continuously evaluates inspection readiness, supports inspection execution, and ensures audit-ready traceability across Quality domains.',
        value: 'Reduced inspection disruption, faster, more consistent responses, and executive-level visibility into inspection risk.',
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
        'Inspection readiness is no longer a periodic activity—it is an operational state. Modern FDA and Health Authority inspections assess how an organization operates under pressure: how quickly it can retrieve evidence, how consistently it responds, how well it understands its own data, and how effectively it coordinates across functions. The target end state for Inspection Readiness AI is a continuously operating, orchestrated system that embeds inspection readiness into day-to-day Quality operations—not a war room, not a checklist, and not a chatbot. At maturity, Inspection Readiness AI functions as a single, integrated operating layer spanning Quality, Manufacturing, Clinical, Regulatory, and Vendor Oversight.',
      agents: [
        {
          id: 'quality-orchestrator',
          label: 'Supervisory Inspection AI Agent',
          role: 'A central agent that understands inspection context, orchestrates workflows, prioritizes tasks, and coordinates domain-specific agents.',
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
        'Inspector questions and document requests are captured and classified in real time',
        'Requests are automatically routed to the appropriate AI agents and SMEs',
        'Evidence is rapidly identified, validated, and assembled into inspection-ready packets',
        'Missing, conflicting, or outdated content is flagged before submission',
        'Written responses are drafted using pre-approved language and narratives',
        'All responses are gated through Quality and governance controls',
        'Complete audit trail: trigger → evidence → changes → approvals',
        'AI proposes and drafts; humans decide and sign',
      ],
    },
    outcomes: [
      {
        metric: '30-50%',
        description:
          'reduction in deviation triage and investigation cycle time through automated classification, routing, and contextual analysis',
      },
      {
        metric: '25-40%',
        description: 'reduction in CAPA backlog driven by improved prioritization and earlier identification of systemic issues',
      },
      {
        metric: '40-60%',
        description: 'faster inspection response times, with evidence packets assembled in hours rather than days',
      },
      {
        metric: '90%+',
        description: 'improved consistency in severity classification and impact assessment, reducing reviewer variability and inspection risk',
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
      'Regulatory organizations face increasing complexity: more markets, faster product change cycles, higher post-approval obligations, and rising expectations for traceability and data integrity. Despite these pressures, many regulatory processes remain fragmented, document-centric, and manually reconciled—leading to slower submissions, increased HA questions, and elevated compliance risk. Intelligent automation enables Regulatory teams to move from static, reactive processes toward continuous, proactive regulatory operations.',
    shifts: [
      'Manual readiness checks → Continuous submission readiness',
      'Point-in-time labeling → Living labeling intelligence',
      'Spreadsheet-driven tracking → Governed, auditable orchestration',
      'Isolated document review → Structured content intelligence',
      'Reactive variation planning → Predictive variation strategy',
      'Static guidance review → AI-curated regulatory intelligence',
    ],
    regulatoryContext: [
      'ICH CTD structure (Modules 1-5) and eCTD electronic submission standards that govern how content is assembled, versioned, and submitted',
      'Global expectations for data integrity and controlled content, including 21 CFR Part 11, where electronic records, approvals, and audit trails are in scope',
      'ICH Q12 (Lifecycle Management) as a guiding framework for post-approval change strategy, commitments, and structured traceability of regulatory obligations',
      'Evolving expectations for structured data (e.g., product and substance identifiers) reinforcing the need for governed master data and reconciliation between documents and systems of record',
    ],
    useCases: [
      {
        name: 'Submission Readiness & QC',
        description:
          'AI checks completeness, formatting, and cross-module consistency to accelerate submission preparation.',
        value: 'Faster readiness cycles, fewer HA questions, and improved first-time approval rates.',
        maturityLevels: {
          assistive: 'Automated QC checks & gap flags',
          generative: 'Readiness narratives & HA Q/A drafts',
          predictive: 'Predict deficiency risk & question likelihood',
        },
      },
      {
        name: 'Labeling Management',
        description:
          'AI maps labeling concepts across CCDS, local labels, and artwork to enable faster, more accurate impact assessments.',
        value: 'Faster impact assessment, better global consistency, and reduced market-to-market divergence.',
        maturityLevels: {
          assistive: 'Change highlighting & concept tagging',
          generative: 'Impact narratives + proposed language',
          predictive: 'Predict HA scrutiny areas & divergence risk',
        },
      },
      {
        name: 'Regulatory Intelligence & Guidance',
        description: 'AI ingests guidance documents, Q&As, and enforcement actions to provide synthesized "what changed" briefs.',
        value: 'Better foresight, reduced reactive remediation, and improved strategic planning.',
        maturityLevels: {
          assistive: 'Auto-ingest new guidance; ontology linking',
          generative: 'Synthesized "what changed" briefs',
          predictive: 'Predict emerging enforcement patterns',
        },
      },
      {
        name: 'Regulatory Commitments Management',
        description: 'Automated tracking of post-approval commitments with AI-generated summaries and draft responses.',
        value: 'Reduced missed commitments, improved accountability, and better inspection preparedness.',
        maturityLevels: {
          assistive: 'Tracking & reminders',
          generative: 'Commitment summaries + draft responses',
          predictive: 'Predict overdue/high-risk commitments',
        },
      },
      {
        name: 'RIM & Structured Data Integrity',
        description:
          'Reconciles structured regulatory records with document truth to improve data quality and inspection readiness.',
        value: 'Improved data integrity, reduced reconciliation effort, and stronger inspection defensibility.',
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
          'AI identifies reusable content blocks and suggests templates to accelerate submission document creation.',
        value: 'Faster document creation, improved consistency, and reduced duplication.',
        maturityLevels: {
          assistive: 'Template tagging; modular block suggestions',
          generative: 'Auto-generate summaries and cover letters',
          predictive:
            'Recommend reusable fragments based on prior submissions',
        },
      },
      {
        name: 'Variation Strategy Optimization',
        description: 'AI enhances planning of post-approval changes with bundling rationales and country grouping suggestions.',
        value:
          'Reduced approval delays, enables proactive change planning, and improves market coordination.',
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
          'Evidence retrieval, response drafting, and readiness monitoring for regulatory inspections.',
        value: 'Faster response, reduced disruption, and improved inspection outcomes.',
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
        'A multi-agent, orchestrated labeling intelligence system that continuously detects labeling-impacting events, maps downstream impacts across markets and artifacts, and produces governed, regulator-ready outputs. This capability transforms labeling from a reactive, document-heavy process into a continuous intelligence layer that anticipates labeling triggers, assesses impacts in real time, and accelerates implementation across markets.',
      agents: [
        {
          id: 'regulatory-orchestrator',
          label: 'Supervisory Labeling Orchestrator Agent',
          role: 'Receives triggers, assigns tasks to domain agents, maintains work queue and audit log.',
          responsibilities: [
            'Receive and classify labeling triggers (CCDS updates, safety signals, regulatory actions)',
            'Assign tasks to specialized domain agents',
            'Maintain single work queue, status, and audit log',
            'Coordinate cross-functional workflows',
          ],
          type: 'orchestrator',
        },
        {
          id: 'regulatory-concept-agent',
          label: 'Concept Mapping & Delta Agent',
          role: 'Compares versions, extracts deltas, and maps changes to labeling taxonomies.',
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
          role: 'Identifies impacted markets, languages, and packs/artwork.',
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
          role: 'Drafts labeling language using approved patterns and controlled vocabularies.',
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
        'RA labeling lead approval gate before proposed wording is finalized',
        'Safety + Medical review for safety-driven updates',
        'Localization/regional review for market-specific constraints',
        'Complete audit trail: trigger → evidence → changes → approvals',
        'AI proposes and drafts; humans decide and sign',
      ],
    },
    outcomes: [
      {
        metric: '20-35%',
        description: 'reduction in submission readiness timelines driven by automated QC and content assembly',
      },
      {
        metric: '30-50%',
        description: 'improvement in commitment tracking accuracy and on-time completion rates',
      },
      {
        metric: '80%+',
        description: 'faster labeling impact assessments through automated concept mapping and market analysis',
      },
      {
        metric: '50%+',
        description: 'fewer late-cycle submission issues through continuous readiness monitoring',
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
      'Clinical operations are under constant pressure to accelerate timelines while improving oversight quality across studies, sites, and vendors. Despite digital platforms, many critical tasks remain manual, reactive, and retrospective—especially TMF oversight, inspection readiness, protocol interpretation, and vendor performance management. Intelligent automation enables Clinical Operations to shift from retrospective QC to near real-time quality intelligence, from manual coordination to workflow orchestration, and from fragmented oversight to predictive risk management.',
    shifts: [
      'Retrospective QC → Near real-time quality intelligence',
      'Manual coordination → Workflow orchestration',
      'Fragmented oversight → Predictive risk management',
    ],
    regulatoryContext: [
      '21 CFR Part 11 for electronic records and signatures supporting TMF, batch records, and electronic approvals',
      'ICH-GCP requirements for clinical trial conduct, quality control, and investigator responsibilities',
      'TMF reference model for trial master file management and inspection readiness',
      'Risk-based monitoring frameworks supporting targeted oversight and site prioritization',
    ],
    useCases: [
      {
        name: 'Study Startup Automation',
        description:
          'AI coordinates activation artifacts, owner routing, and readiness visibility across study startup activities.',
        value: 'Faster activation, reduced administrative burden, and fewer missed steps.',
        maturityLevels: {
          assistive: 'Checklist automation',
          generative: 'Startup plans & artifact drafts',
          predictive: 'Predict activation delays and bottlenecks',
        },
      },
      {
        name: 'Protocol Interpretation & SOA Generation',
        description:
          'AI extracts protocol requirements into structured plans and Schedule of Activities (SOA) to reduce downstream rework.',
        value: 'Reduced downstream rework, better cross-functional alignment, and faster execution.',
        maturityLevels: {
          assistive: 'Search/extraction',
          generative: 'SOA + narratives + operational briefs',
          predictive: 'Predict feasibility and burden risks',
        },
      },
      {
        name: 'TMF Quality Oversight',
        description:
          'AI continuously assesses completeness, timeliness, and quality of TMF artifacts while maintaining complete audit trails.',
        value: 'Reduced QC labor, earlier risk detection, and improved inspection readiness.',
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
          'AI synthesizes data streams from CTMS, EDC, and site performance to prioritize monitoring actions.',
        value: 'Better targeting, reduced monitoring cost, and improved patient safety.',
        maturityLevels: {
          assistive: 'Dashboards/alerts',
          generative: 'Site risk narratives',
          predictive: 'Predict site risk & intervention timing',
        },
      },
      {
        name: 'Vendor & CRO Oversight',
        description:
          'AI monitors KPIs and deliverables with escalation intelligence for third-party performance management.',
        value: 'Improved accountability, reduced vendor risk, and better study outcomes.',
        maturityLevels: {
          assistive: 'KPI aggregation',
          generative: 'Performance summaries & escalation drafts',
          predictive: 'Predict CRO underperformance',
        },
      },
      {
        name: 'Clinical Inspection Readiness',
        description: 'AI supports inspection response and readiness across TMF, vendors, and clinical data.',
        value: 'Faster responses, less disruption, and fewer inspection findings.',
        maturityLevels: {
          assistive: 'Evidence retrieval',
          generative: 'Draft inspection responses',
          predictive: 'Predict vulnerabilities & focus areas',
        },
      },
      {
        name: 'RWD Feasibility & Diversity Planning',
        description: 'AI uses real-world data to model eligibility, assess cohort diversity, and inform site selection.',
        value:
          'Improves feasibility planning, accelerates site activation, and supports diverse, patient-centered trial designs.',
        maturityLevels: {
          assistive: 'RWD cohort signals; diversity metric flags',
          generative:
            'RWD models of eligibility & site projections',
          predictive: 'Predict enrollment delays & diversity gaps',
        },
      },
      {
        name: 'Patient Recruitment & Engagement',
        description: 'AI assists with prescreening, patient matching, and personalized outreach using conversational tools.',
        value: 'Enhances recruitment efficiency, reduces attrition, and supports diversity through tailored engagement.',
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
        'A continuous, orchestrated TMF intelligence system embedded into clinical operations that monitors TMF completeness and quality in near real time, proactively flags inspection risk, and accelerates evidence retrieval and response readiness. The system operates under validated controls with complete audit trails, electronic signatures per 21 CFR Part 11, and qualified personnel oversight at all decision points.',
      agents: [
        {
          id: 'clinical-orchestrator',
          label: 'TMF Orchestrator Agent',
          role: 'Maintains TMF health status, assigns work to specialized agents, and tracks status, owners, due dates, and audit logs.',
          responsibilities: [
            'Maintain TMF health status across studies',
            'Assign work to specialized agents based on case type',
            'Track status, owners, due dates, and audit logs',
            'Coordinate remediation workflows',
          ],
          type: 'orchestrator',
        },
        {
          id: 'clinical-classification-agent',
          label: 'Document Classification & Metadata Agent',
          role: 'Classifies artifacts (ICFs, IBs, monitoring reports) and validates metadata quality, filing location, and version consistency.',
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
          role: 'Determines expected artifacts by study phase, country, site, and vendor model.',
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
          role: 'Evaluates basic quality signals (signatures, dates, completeness markers) and generates QC summaries.',
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
          role: 'When inspection requests arrive, retrieves artifacts, drafts narratives, and assembles evidence packets.',
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
        'Study plans and expectedness rules (study milestones, country/site activation)',
        'CTMS for study/site status and timelines',
        'CRO portals or shared repositories for inbound artifacts',
        'Quality signals: TMF plan, QC findings logs, historical inspection findings',
        'Training/roles information for approval and remediation authority',
      ],
      governance: [
        'TMF lead / Clinical Ops review gate on gap closures and narrative summaries',
        'Quality/Inspection readiness review for inspection-facing narratives and packets',
        'Role-based access and audit logging for every action',
        'Clear boundary: AI detects, drafts, recommends; humans approve, submit, and attest',
      ],
    },
    outcomes: [
      {
        metric: '30-50%',
        description: 'reduction in manual TMF QC effort, allowing teams to focus on remediation rather than document chasing',
      },
      {
        metric: '20-30%',
        description: 'faster study startup timelines driven by automation of readiness artifacts and protocol interpretation',
      },
      {
        metric: '60%+',
        description: 'faster inspection response cycles with evidence retrieval and narrative drafting accelerated significantly',
      },
      {
        metric: '40%+',
        description: 'improved vendor performance visibility, reducing escalation cycles and downstream corrective actions',
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
      'Manufacturing and supply chain functions sit at the point where compliance, product availability, and revenue converge. Delays or errors in these areas have immediate downstream impact—missed patient supply, delayed launches, inventory write-offs, and regulatory risk. Despite advances in MES, LIMS, and ERP systems, many manufacturing and supply chain processes remain manual, rule-heavy, and reactive. Batch records are reviewed line by line, investigations are triggered after deviations occur, and supply risks are often identified only after a disruption has already begun.',
    shifts: [
      'Full-record review → Exception-based oversight',
      'Reactive issue management → Predictive risk mitigation',
      'Siloed execution → End-to-end orchestration across systems and sites',
    ],
    regulatoryContext: [
      '21 CFR Parts 210/211 (cGMP) and 21 CFR Part 11 for electronic records, signatures, and audit trails supporting batch records, release decisions, and investigations',
      'ICH Q7 (API GMP), ICH Q10 (PQS), and ICH Q9 (quality risk management) as the foundation for risk-based decisioning and oversight',
      'Regulatory expectations for process validation and continued process verification, including lifecycle thinking and ongoing trending to detect drift and emerging risk',
      'EU and global expectations for computerized system governance, including validation posture, change control, and data integrity controls across MES, LIMS, EMS, and ERP',
    ],
    useCases: [
      {
        name: 'Batch Record Review by Exception',
        description:
          'AI evaluates batch execution data across MES, LIMS, and related systems, flagging only parameters that deviate from specifications or historical norms.',
        value: 'Reduced QA review effort, faster release timelines, improved consistency, and stronger inspection defensibility.',
        maturityLevels: {
          assistive: 'Data extraction & checks',
          generative: 'Exception narratives & justifications',
          predictive: 'Predict batch release risk',
        },
      },
      {
        name: 'Material Release Automation',
        description:
          'Automation tracks readiness across quality testing, documentation, supplier certificates, and logistics.',
        value: 'Shorter release cycles, improved cross-functional coordination, and greater predictability of product availability.',
        maturityLevels: {
          assistive: 'Status visibility',
          generative: 'Release summaries & evidence packets',
          predictive: 'Predict release delays',
        },
      },
      {
        name: 'Predictive Equipment Maintenance',
        description:
          'AI analyzes equipment performance, calibration history, and maintenance data to identify degradation patterns.',
        value: 'Reduced unplanned downtime, fewer equipment-related deviations, and improved asset utilization.',
        maturityLevels: {
          assistive: 'Alert consolidation',
          generative: 'Maintenance & investigation summaries',
          predictive: 'Predict equipment failure',
        },
      },
      {
        name: 'Environmental Monitoring Intelligence',
        description: 'AI trends EM data across facilities to detect early indicators of contamination or control loss.',
        value: 'Earlier risk detection, reduced investigation effort, and improved inspection readiness.',
        maturityLevels: {
          assistive: 'Threshold alerts',
          generative: 'Excursion investigation drafts',
          predictive: 'Predict contamination risk',
        },
      },
      {
        name: 'Supply Chain Risk Intelligence',
        description:
          'AI synthesizes supplier performance, inventory positions, logistics data, and external signals to assess forward-looking supply risk.',
        value: 'Faster response to disruptions, reduced shortages, and improved decision-making during demand volatility.',
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
        'Batch Record Review (BRR) is one of the most resource-intensive and time-critical processes in regulated manufacturing. The target end state is an AI-driven, exception-based review capability that focuses Quality and Manufacturing attention only where risk exists, while preserving full GxP compliance and auditability through a multi-agent, orchestrated system that evaluates batch execution against specifications, historical performance, and contextual risk factors.',
      agents: [
        {
          id: 'manufacturing-orchestrator',
          label: 'Batch Review Orchestrator Agent',
          role: 'Initiates review upon batch completion, coordinates downstream agents, and maintains a single audit log.',
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
          role: 'Ingests batch data from MES, LIMS, and ancillary systems.',
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
          role: 'Applies approved business rules, specifications, and acceptance criteria.',
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
          role: 'Uses historical batch data to identify statistical outliers, drift, or unusual combinations.',
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
          role: 'Generates concise, structured summaries of flagged exceptions.',
          responsibilities: [
            'Generate concise structured summaries',
            'Link exceptions to historical context',
            'Prepare QA-ready review packages',
          ],
          type: 'agent',
        },
      ],
      dataInputs: [
        'MES data: batch execution steps, parameters, timestamps, operator entries',
        'LIMS data: analytical results, specifications, trends',
        'Specifications & control limits: approved ranges and acceptance criteria',
        'Equipment and calibration data: maintenance history, calibration status',
        'Deviation history: prior deviations linked to similar products or processes',
        'Release decisions: historical QA outcomes for contextual learning',
      ],
      governance: [
        'QA reviewers retain final authority for release decisions',
        'AI-generated exceptions are recommendations, not decisions',
        'Reviewers can accept, override, or escalate findings',
        'All AI outputs, reviewer actions, and rationales are logged and auditable',
        'Clear intended-use documentation defines boundaries of automation',
      ],
    },
    outcomes: [
      {
        metric: '50-80%',
        description: 'reduction in batch record review effort through exception-based review models',
      },
      {
        metric: '20-40%',
        description: 'reduction in unplanned equipment downtime through predictive maintenance and early intervention',
      },
      {
        metric: '35%+',
        description: 'faster supply disruption response with forward-looking risk signals enabling proactive mitigation',
      },
      {
        metric: '95%+',
        description: 'improved inspection defensibility with structured, traceable rationale supporting batch release',
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
      'Safety organizations face a structural challenge: case volumes are growing 8-12% annually, regulatory timelines are compressing, and qualified PV professionals remain scarce. Traditional responses—more headcount, more outsourcing—scale cost linearly with volume. Intelligent automation offers a different path: AI-assisted throughput that preserves medical judgment while breaking the cost-volume curve.',
    shifts: [
      'Manual, repetitive processing → AI-assisted throughput',
      'Point-in-time signal review → Continuous safety intelligence',
      'Reactive compliance → Predictive workload and risk management',
    ],
    regulatoryContext: [
      'ICH E2B(R3) for ICSR data standards and exchange format requirements',
      'FDA FAERS / EMA EudraVigilance reporting obligations and timeline compliance',
      'EU AI Act classifies certain PV applications as high-risk, requiring conformity assessment',
      'FDA AI/ML guidance establishes expectations for algorithm transparency and change control',
    ],
    useCases: [
      {
        name: 'Automated Case Intake',
        description:
          'AI extracts AE data from structured and unstructured sources including forms, PDFs, emails, and transcripts.',
        value: 'Faster case intake, reduced manual data entry, and improved coding consistency.',
        maturityLevels: {
          assistive: 'Extraction & coding suggestions',
          generative: 'Structured summaries',
          predictive: 'Volume forecasting',
        },
      },
      {
        name: 'AI-Assisted Narrative Generation',
        description:
          'AI supports triage, routing, and narrative preparation for case processing.',
        value: 'Reduced processing time, improved throughput, and consistent narrative structure.',
        maturityLevels: {
          assistive: 'Routing & triage',
          generative: 'Narrative drafting',
          predictive: 'Complexity prediction',
        },
      },
      {
        name: 'Signal Detection Enhancement',
        description:
          'AI augments traditional methods with pattern recognition and real-world data analysis.',
        value: 'Earlier detection of safety signals and improved signal-to-noise ratio.',
        maturityLevels: {
          assistive: 'Rule-based alerts',
          generative: 'Signal summaries',
          predictive: 'Emerging signal prediction',
        },
      },
      {
        name: 'Expedited Reporting Intelligence',
        description: 'AI tracks timelines, readiness, and documentation for expedited reporting requirements.',
        value: 'Fewer late submissions, improved compliance, and reduced regulatory risk.',
        maturityLevels: {
          assistive: 'Deadline tracking',
          generative: 'Submission drafts',
          predictive: 'Compliance risk scoring',
        },
      },
      {
        name: 'Third-Party & Partner PV Oversight',
        description:
          'AI monitors partner compliance, case reconciliation, and performance indicators.',
        value: 'Reduced oversight effort, improved accountability, and earlier identification of partner risk.',
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
        'The target end state is an AI-assisted, medically governed case processing capability that increases throughput while preserving human judgment. This capability is not an autonomous case processor. It is a decision-support system designed to accelerate intake, structure timelines, draft narratives, and flag compliance gaps—while leaving medical review and final approval firmly with qualified PV professionals.',
      agents: [
        {
          id: 'safety-orchestrator',
          label: 'Case Orchestrator Agent',
          role: 'Manages case lifecycle and task routing across the PV workflow.',
          responsibilities: [
            'Manage case lifecycle from intake to closure',
            'Assign work based on case type and complexity',
            'Maintain complete audit trail',
          ],
          type: 'orchestrator',
        },
        {
          id: 'safety-ingestion-agent',
          label: 'Data Ingestion & Entity Extraction Agent',
          role: 'Ingests source documents and extracts key entities (patient, drug, event, reporter).',
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
          role: 'Constructs chronological narratives from disparate data sources.',
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
          role: 'Generates structured case narratives using templates and approved language.',
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
          role: 'Checks completeness for reporting requirements and tracks expedited reporting timelines.',
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
        description: 'reduction in narrative drafting time through AI-assisted generation and template reuse',
      },
      {
        metric: '40%+',
        description:
          'improved case throughput without added headcount, preserving medical judgment',
      },
      {
        metric: '60%+',
        description: 'enhanced consistency across case narratives, reducing reviewer variability',
      },
      {
        metric: '30%+',
        description: 'reduction in late expedited submissions through proactive tracking and alerts',
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
      'Medical Affairs faces compounding pressure: promotional review volumes have grown 15-25% annually, MLR cycle times average 4-6 weeks, and content rework rates often exceed 30%. Meanwhile, field teams generate insights that remain trapped in unstructured notes and CRM fields. Traditional solutions—more reviewers, tighter timelines—create bottlenecks without addressing root causes. Intelligent automation offers structural improvement: AI-assisted consistency, faster throughput, and actionable intelligence from scattered data.',
    shifts: [
      'Manual review → AI-assisted consistency and speed',
      'Fragmented content → Structured scientific knowledge',
      'Reactive compliance → Predictive risk and workload management',
    ],
    regulatoryContext: [
      'FDA OPDP/APLB guidance on promotional and medical communications',
      'PhRMA Code / EFPIA Code self-regulatory standards for HCP interactions and promotional practices',
      '21 CFR Part 11 requirements for electronic records and signatures where applicable',
      'EU AI Act implications for content generation in regulated contexts and promotional review',
    ],
    useCases: [
      {
        name: 'MLR Review Automation',
        description:
          'AI pre-screens content for claims, references, and compliance risks before committee review.',
        value: 'Shorter MLR cycle times, reduced reviewer burden, and more consistent application of standards.',
        maturityLevels: {
          assistive: 'Claims tagging, reference checks',
          generative: 'Draft review comments',
          predictive: 'Rejection risk scoring',
        },
      },
      {
        name: 'Medical Inquiry Management',
        description:
          'AI triages inquiries, retrieves relevant scientific content, and drafts responses for medical review.',
        value: 'Faster inquiry response, improved consistency and accuracy, and better workload balancing.',
        maturityLevels: {
          assistive: 'Triage & retrieval',
          generative: 'Response drafting',
          predictive: 'Volume/topic forecasting',
        },
      },
      {
        name: 'Scientific Content Intelligence',
        description:
          'AI structures, tags, and summarizes medical content across repositories for improved reuse.',
        value: 'Improved content reuse, reduced duplication, and faster content development.',
        maturityLevels: {
          assistive: 'Auto-tagging & classification',
          generative: 'Structured summaries',
          predictive: 'Content gap analysis',
        },
      },
      {
        name: 'Field Insight Intelligence',
        description:
          'AI processes field medical insights from calls, notes, and CRM systems.',
        value:
          'Better visibility into HCP needs, earlier detection of scientific trends, and improved strategic planning.',
        maturityLevels: {
          assistive: 'Transcription & tagging',
          generative: 'Insight synthesis',
          predictive: 'Trend prediction',
        },
      },
      {
        name: 'Scientific Response Letter Generation',
        description:
          'AI drafts response letters using approved language, evidence, and templates.',
        value: 'Faster response preparation, reduced rework, and improved compliance consistency.',
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
        'Medical, Legal, and Regulatory (MLR) review is one of the most critical and resource-intensive Medical Affairs processes. The target end state is an AI-assisted, committee-governed MLR intelligence capability that accelerates reviews, improves consistency, and preserves full human authority and accountability. This capability is not an automated approval engine. It is a decision-support system designed to surface risk, context, and recommendations—while leaving final decisions firmly with the MLR committee.',
      agents: [
        {
          id: 'medical-affairs-orchestrator',
          label: 'MLR Orchestrator Agent',
          role: 'Manages intake of materials and review workflow, routes content to specialized agents.',
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
          role: 'Identifies scientific and promotional claims, maps to approved indications and labels.',
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
          role: 'Verifies that cited references are current, approved, and accurately represented.',
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
          role: 'Compares content against prior approved materials and highlights inconsistencies.',
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
          role: 'Generates draft review comments or suggested edits with rationale tied to guidance.',
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
        'Reference libraries: scientific publications, clinical guidelines',
        'Historical MLR decisions and comments',
        'Medical and regulatory guidance: applicable standards',
        'Content metadata: audience, channel, market, intended use',
      ],
      governance: [
        'MLR committee members retain final approval authority',
        'AI outputs are transparent, explainable, and editable',
        'Reviewers can accept, modify, or reject AI suggestions',
        'All comments, edits, and decisions are logged and auditable',
        'Intended-use documentation defines boundaries of AI assistance',
      ],
    },
    outcomes: [
      {
        metric: '25-35%',
        description: 'reduction in MLR review cycle time, particularly during peak submission periods',
      },
      {
        metric: '20-30%',
        description: 'reduction in content rework rates driven by earlier risk identification',
      },
      {
        metric: '50%+',
        description: 'faster medical inquiry response times, improving HCP engagement without added risk',
      },
      {
        metric: '40%+',
        description: 'better utilization of scientific content, reducing duplication and manual search effort',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Cybersecurity & TPRM
  // ---------------------------------------------------------------------------
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Third-Party Risk Management',
    icon: '\u{1F512}',
    color: 'red',
    overview:
      'Cybersecurity and third-party risk are no longer IT-only concerns. In life sciences organizations, they are now core GxP, data integrity, and inspection risks. Regulators increasingly expect sponsors to demonstrate not only that controls exist, but that they are continuously monitored, risk-based, and enforced across vendors, partners, and service providers. Despite this expectation, many organizations still manage cybersecurity and TPRM through periodic, document-heavy assessments: annual vendor questionnaires, point-in-time SOC reviews, and reactive incident response. These approaches do not scale as vendor ecosystems expand, outsourcing increases, and threat landscapes evolve in real time.',
    shifts: [
      'Periodic assessments → Continuous cyber and vendor risk monitoring',
      'Manual document review → AI-assisted risk interpretation',
      'Reactive remediation → Predictive risk prioritization',
      'Siloed functional oversight → Enterprise-wide, inspection-ready governance',
    ],
    regulatoryContext: [
      'NIST Cybersecurity Framework (CSF 2.0) for cybersecurity risk management and control alignment',
      'ISO/IEC 27001-aligned security management and assurance artifacts (SOC reports, supplier attestations)',
      'EU NIS2 cybersecurity obligations for in-scope entities and their supply chains',
      '21 CFR Part 11 and data integrity expectations where cybersecurity controls protect regulated records and validated systems',
    ],
    useCases: [
      {
        name: 'Vendor Onboarding Automation',
        description:
          'AI automates the intake and review of vendor security documentation, highlighting gaps against internal requirements.',
        value: 'Faster onboarding, reduced manual review effort, and more consistent inherent risk assessment.',
        maturityLevels: {
          assistive: 'Checklist automation',
          generative: 'Risk summaries & gap narratives',
          predictive: 'Predict inherent vendor risk',
        },
      },
      {
        name: 'Continuous Vendor Risk Monitoring',
        description:
          'AI continuously monitors vendor controls, incidents, attestations, and performance indicators.',
        value: 'Earlier detection of vendor risk, reduced reliance on point-in-time audits, and stronger inspection posture.',
        maturityLevels: {
          assistive: 'Alert aggregation',
          generative: 'Ongoing risk assessments',
          predictive: 'Predict vendor control failure',
        },
      },
      {
        name: 'Cyber Incident Intelligence',
        description:
          'AI aggregates alerts, incidents, and contextual data to support faster triage and coordinated response.',
        value:
          'Faster incident understanding, reduced escalation delays, and improved cross-functional coordination.',
        maturityLevels: {
          assistive: 'Alert aggregation',
          generative: 'Incident summaries',
          predictive: 'Predict escalation likelihood',
        },
      },
      {
        name: 'Access & Identity Risk Intelligence',
        description:
          'AI analyzes access roles, entitlements, and usage patterns to identify excessive or risky access.',
        value: 'Reduced insider and data integrity risk, improved least-privilege compliance, and stronger audit defensibility.',
        maturityLevels: {
          assistive: 'Role analysis',
          generative: 'Review narratives',
          predictive: 'Predict access misuse risk',
        },
      },
      {
        name: 'Cyber Audit & Inspection Readiness',
        description:
          'AI assembles evidence, narratives, and control mappings for inspections and audits involving cybersecurity.',
        value: 'Faster audit response, reduced disruption, and improved inspection outcomes.',
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
        'Third-party ecosystems now include CROs, CMOs, SaaS providers, cloud platforms, and niche vendors—all of which may handle GxP data or support regulated processes. Regulators increasingly expect sponsors to demonstrate continuous oversight, not just contractual controls. The target end state is a continuously operating, AI-driven vendor risk intelligence capability that integrates cybersecurity, quality, and operational oversight into a single, inspection-ready system. This is not a static questionnaire engine. It is an orchestrated, multi-agent system that understands vendor risk context, monitors change, and prioritizes human attention where it matters most.',
      agents: [
        {
          id: 'cybersecurity-orchestrator',
          label: 'Vendor Risk Orchestrator Agent',
          role: 'Maintains a complete inventory of vendors and services, coordinates risk assessment and monitoring workflows.',
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
          role: 'Ingests SOC reports, ISO certifications, questionnaires, and policies.',
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
          role: 'Monitors security incidents, breach notifications, threat intelligence feeds, and operational stress indicators.',
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
          role: 'Aggregates inherent risk, control maturity, and live signals to produce dynamic vendor risk scores.',
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
          role: 'Assembles evidence packets for audits and inspections, drafts oversight narratives.',
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
        'AI flags and prioritizes risk; humans decide mitigation and acceptance',
        'Escalation thresholds and approval gates are configurable and documented',
        'All AI outputs, decisions, and actions logged and auditable',
        'Intended-use boundaries clearly defined for inspection purposes',
      ],
    },
    outcomes: [
      {
        metric: '40-60%',
        description: 'reduction in manual vendor assessment effort, particularly for low- and medium-risk vendors',
      },
      {
        metric: '70%+',
        description:
          'earlier identification of vendor risk signals, often weeks or months before traditional reviews',
      },
      {
        metric: '50%+',
        description:
          'reduced audit and inspection preparation time, with evidence assembled continuously rather than reactively',
      },
      {
        metric: '35%+',
        description: 'more consistent vendor risk scoring and escalation decisions, reducing subjective variance',
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
      'Corporate and enabling functions—Finance, HR, Procurement, Legal, and IT—are often viewed as back-office support. In regulated life sciences environments, however, these functions play a direct role in compliance, inspection readiness, and operational continuity. Their activities intersect with GxP operations through training and access controls, vendor contracting and oversight, financial controls tied to commercialization, system availability, and change management. Despite this criticality, many corporate functions still operate through manual workflows, email-based approvals, and spreadsheet-driven tracking. These approaches introduce inefficiency and risk: onboarding and vendor engagement take months, contractual obligations are inconsistently tracked, financial close cycles are unpredictable, and IT incidents disrupt regulated operations.',
    shifts: [
      'Manual coordination → Workflow-driven execution with clear accountability',
      'Static, periodic controls → Continuous operational intelligence',
      'Reactive issue resolution → Predictive service and risk management',
      'Fragmented departmental systems → Cross-functional orchestration',
    ],
    regulatoryContext: [
      'SOX / ICFR expectations and COSO-aligned practices for financial close, controls evidence, and auditability',
      '21 CFR Part 11 and validation expectations where HR training records, access provisioning, ITSM change controls, and electronic approvals affect regulated systems',
      'IT governance and service management frameworks (commonly ITIL/COBIT-aligned) to support consistent incident response and change management',
      'Privacy and security obligations (e.g., GDPR and enterprise cybersecurity frameworks) where employee, vendor, and business data is processed',
    ],
    useCases: [
      {
        name: 'HR Operations Automation',
        description:
          'AI supports onboarding, training coordination, and policy interpretation, particularly where training intersects with GxP.',
        value: 'Faster onboarding, improved training compliance, reduced administrative burden, and stronger inspection readiness.',
        maturityLevels: {
          assistive: 'Task automation',
          generative: 'Policy & onboarding summaries',
          predictive: 'Predict attrition & skill gaps',
        },
      },
      {
        name: 'Finance Close & Controls Automation',
        description:
          'AI assists with reconciliations, variance explanation, close readiness tracking, and audit documentation.',
        value:
          'Faster, more predictable closes, reduced manual reconciliation effort, and improved audit defensibility.',
        maturityLevels: {
          assistive: 'Reconciliation support',
          generative: 'Close narratives & explanations',
          predictive: 'Predict close delays & issues',
        },
      },
      {
        name: 'Procurement & Contract Intelligence',
        description: 'AI structures contracts, tracks obligations, and links supplier performance to compliance risk.',
        value: 'Shorter contracting cycles, improved visibility into obligations, and reduced supplier-related risk.',
        maturityLevels: {
          assistive: 'Status tracking',
          generative: 'Contract & spend summaries',
          predictive: 'Predict supplier & spend risk',
        },
      },
      {
        name: 'Legal Operations Intelligence',
        description: 'AI analyzes agreements, clauses, and precedents to support review, negotiation, and risk awareness.',
        value: 'Reduced review effort, improved consistency in negotiated positions, and earlier identification of legal exposure.',
        maturityLevels: {
          assistive: 'Clause search',
          generative: 'Draft agreements & summaries',
          predictive: 'Predict contractual risk',
        },
      },
      {
        name: 'IT Service Management Intelligence',
        description: 'AI enhances ticket triage, resolution support, and change impact awareness for GxP-critical systems.',
        value: 'Faster incident resolution, reduced downtime, and improved support for regulated operations.',
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
        'IT Service Management is a critical enabler of regulated operations. System availability, incident response, and change control directly affect Quality, Manufacturing, Clinical, and Regulatory activities. The target end state is an AI-augmented ITSM capability that accelerates resolution, improves consistency, and proactively identifies operational risk—without compromising governance or control. This is not an autonomous IT agent. It is an AI-assisted, workflow-orchestrated service intelligence layer embedded within existing ITSM platforms.',
      agents: [
        {
          id: 'corporate-orchestrator',
          label: 'ITSM Orchestrator Agent',
          role: 'Manages incident, request, and change workflows, routes work based on priority and system criticality.',
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
          role: 'Analyzes incoming tickets using NLP, identifies impacted systems and risk level.',
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
          role: 'Retrieves relevant knowledge articles, past incidents, and fixes.',
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
          role: 'Assesses potential impact of changes on GxP systems and processes.',
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
          role: 'Analyzes historical trends to predict incident spikes or recurring failures.',
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
        description: 'faster incident resolution in ITSM, reducing disruption to GxP systems',
      },
      {
        metric: '40%+',
        description: 'more predictable financial close cycles with fewer late reconciliations and audit findings',
      },
      {
        metric: '25-35%',
        description: 'faster onboarding and access provisioning, reducing compliance gaps and productivity lag',
      },
      {
        metric: '50%+',
        description:
          'reduced ticket backlogs and operational noise, freeing staff for higher-value work',
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
