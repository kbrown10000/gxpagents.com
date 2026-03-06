export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  companySize: string;
  headlineMetric: string;
  briefDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  icon: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'deviation-triage-transformation',
    title: 'Top 10 Pharma Reduces Deviation Triage Time by 65%',
    industry: 'Global Pharmaceutical',
    companySize: '15,000+ employees',
    headlineMetric: '65%',
    briefDescription: 'AI-powered deviation classification transformed a drowning quality team into proactive risk managers',
    challenge:
      'A global pharmaceutical manufacturer was processing 2,000+ deviations per month across multiple sites. Quality teams spent an average of 5 days per deviation on initial triage and classification alone. The manual process was inconsistent — classification accuracy varied by 30% depending on which QA associate handled triage. The backlog was growing faster than they could hire.',
    solution:
      'Implemented AI-powered deviation classification and auto-routing system. The AI agent reads incoming deviation descriptions, compares them against 50,000+ historical deviations, suggests severity classification (major vs. minor), recommends investigation scope, and routes to the appropriate investigator based on domain expertise and current workload. Human quality managers review and approve AI recommendations, but start with 90% of the analysis already complete.',
    results: [
      '65% reduction in triage time — from 5 days to 1.8 days average',
      '40% fewer misclassified deviations — AI caught patterns humans missed',
      '$2.1M annual savings in quality labor costs',
      '83% reduction in investigation backlog within 6 months',
      '22% improvement in repeat deviation detection (AI flags similar historical patterns)',
    ],
    quote:
      'We went from drowning in deviations to proactively managing quality signals. The AI doesn\'t replace our quality judgment — it gives us time to actually use it.',
    quoteAuthor: 'VP Quality Operations',
    icon: 'shield-check',
  },
  {
    slug: 'accelerated-fda-clearance',
    title: 'Biotech Startup Achieves FDA Clearance 3 Months Ahead of Schedule',
    industry: 'Emerging Biotech',
    companySize: 'Series C, 200 employees',
    headlineMetric: '3 months early',
    briefDescription: 'AI-assisted submission assembly and regulatory intelligence turned an 18-month timeline into 15',
    challenge:
      'A Series C biotech preparing their first FDA submission had no regulatory infrastructure, a lean regulatory team (2 FTEs), and an aggressive 18-month timeline to IND filing. The team was manually assembling eCTD modules, tracking global guidance changes across spreadsheets, and spending 40% of their time searching for regulatory precedents. CMC documentation was incomplete, and cross-functional alignment was fragmented.',
    solution:
      'Deployed AI-powered regulatory intelligence and submission assembly platform. The AI monitored FDA guidance in real-time, flagged relevant updates within hours (not months), auto-generated eCTD module templates pre-populated with boilerplate text, suggested regulatory precedents from similar approvals, and drafted regulatory meeting materials. The regulatory team reviewed and refined AI outputs — but started with 80% of the mechanical work already done.',
    results: [
      '15-month completion — 3 months ahead of the original 18-month target',
      'Zero FDA deficiency letters in first review cycle',
      '50% reduction in regulatory staff hours spent on submission assembly',
      '$850K avoided cost (planned contractor spend for submission assembly)',
      'Real-time regulatory intelligence enabled 4 proactive strategy adjustments that prevented downstream delays',
    ],
    quote:
      'The AI didn\'t replace our regulatory team — it made them superhuman. We moved faster than companies 10x our size because we weren\'t drowning in busywork.',
    quoteAuthor: 'Chief Regulatory Officer',
    icon: 'rocket',
  },
  {
    slug: 'cybersecurity-vendor-risk',
    title: 'Global Diagnostics Company Cuts Cybersecurity Vendor Risk Assessment from 6 Weeks to 3 Days',
    industry: 'In Vitro Diagnostics',
    companySize: '5,000+ employees, global operations',
    headlineMetric: '95%',
    briefDescription: 'AI-powered vendor risk scoring turned an annual compliance exercise into continuous intelligence',
    challenge:
      'A global IVD manufacturer had 400+ third-party vendors with access to GxP systems and data. Annual security assessments were manual (vendor questionnaires, SOC 2 reviews, spreadsheet risk scoring) and took 6 weeks per vendor. By the time assessments were complete, vendor security postures had already changed. The security team had no visibility into emerging vendor risks between annual reviews. TPRM was a compliance checkbox, not real risk management.',
    solution:
      'Implemented AI-powered third-party risk management (TPRM) platform with continuous vendor monitoring. The AI agent continuously scans vendor security postures (SOC 2 expiration, breach notifications, financial health signals, regulatory actions), scores risk in real-time based on GxP system access and data sensitivity, auto-generates vendor risk dashboards, alerts security team when vendor risk scores change, and drafts vendor assessment reports with evidence-based risk recommendations.',
    results: [
      '95% reduction in assessment time — from 6 weeks to 3 days per vendor',
      'Real-time risk dashboards replaced annual point-in-time snapshots',
      '12 critical vendor risks identified in first month — all missed by prior manual assessments',
      '3 high-risk vendors offboarded before security incidents occurred',
      'Continuous monitoring now covers 400 vendors with same team that previously assessed 40 annually',
    ],
    quote:
      'We found vulnerabilities in our supply chain that manual reviews had missed for years. Continuous AI monitoring turned TPRM from a compliance burden into a strategic advantage.',
    quoteAuthor: 'Chief Information Security Officer',
    icon: 'shield-alert',
  },
  {
    slug: 'batch-record-automation',
    title: 'Mid-Size Pharma Automates 80% of Batch Record Review',
    industry: 'Specialty Pharmaceutical',
    companySize: '1,200 employees',
    headlineMetric: '80%',
    briefDescription: 'AI-assisted review freed QA to focus on exceptions, not paperwork — and caught errors humans missed',
    challenge:
      'A specialty pharma manufacturer was producing 480 batches per year with 150-page batch records each. The QA team (15 reviewers) spent 18 hours per batch on manual line-by-line review — checking data ranges, verifying signatures, cross-referencing deviations. Batch release cycle time averaged 5.2 days. Review error rate was 3.2% (caught in post-release audits). QA was drowning in mechanical verification work with no capacity for process improvement or risk-based monitoring.',
    solution:
      'Deployed AI-assisted batch record review system integrated with their electronic batch record (EBR) platform. The AI automatically verifies all data points against specifications, validates signature completeness and 21 CFR Part 11 compliance, flags exceptions and anomalies, generates 2-page exception reports (instead of 150-page full records), and performs historical trend analysis to detect process drift. QA reviewers focus on exceptions only — the AI handles the mechanical checks.',
    results: [
      '80% of batch records auto-verified with exception-based human review',
      '4-hour review cycle time (down from 18 hours) — 78% reduction',
      '0.4% error rate (down from 3.2%) — 87% improvement in review accuracy',
      '11 QA FTEs redeployed from batch review to strategic quality work',
      'Batch release cycle time dropped from 5.2 days to 1.8 days — 65% faster',
    ],
    quote:
      'Our quality team finally focuses on quality, not paperwork. The AI catches everything we used to catch manually — plus patterns we would have missed.',
    quoteAuthor: 'SVP Manufacturing',
    icon: 'file-check',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
