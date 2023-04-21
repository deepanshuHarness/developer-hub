import {
    CardItem,
    CardSections,
    docType,
  } from "../../LandingPage/TutorialCard";
  
  /* Define the cards - start */
  // Featured Tutorials
  export const featuredTutorials: CardItem[] = [
      {
        title: "Create a standalone STO pipeline",
        module: "sto",
        icon: "img/icon_cd.svg",
        description: "Set up a pipeline with one scanner, run scans, analyze the results, and learn the key features of STO.",
        newDoc: true,
        type: [docType.Documentation],
        time: "8min",
        link: "/tutorials/security-tests/standalone-pipeline",
      },
      {
        title: "Deploy a Helm Chart using CD Community Edition",
        module: "cd",
        icon: "img/icon_cd.svg",
        description: "Add a scan step to a CI pipeline and set up the pipeline to fail if a scan finds any show-stopper vulnerabilities.",
        newDoc: true,
        type: [docType.Documentation],
        time: "10min",
        link: "/tutorials/security-tests/cicd-integrated-pipeline",
      },
    ];
    
    // Docs
    export const docsCards: CardSections = [
        {
          name: "Get started",
          description:
            "",
          list: [
            {
              title: "STO basics",
              module: "sto",
              description:
                "Learn about the security scanning problems facing developers and how STO provides the solutions they need.",
              link: "/docs/security-testing-orchestration/onboard-sto/security-testing-orchestration-basics",
            },
            {
              title: "Set up Harness for STO",
              module: "sto",
              description:
                "How to set up the build infrastructure, connectors, and pipeline needed to run security scans automatically.",
              link: "/docs/security-testing-orchestration/onboard-sto/set-up-harness-for-sto",
            },
            {
              title: "STO concepts",
              module: "sto",
              description:
                "Learn about some key STO concepts such as scan targets, baselines, severities, and exemptions.",
              link: "/docs/category/key-concepts-in-sto",
            },
          ],
        },
    
        {
          name: "Run scans and ingest data",
          description:
            "",
          list: [
            {
              title: "STO workflows",
              module: "sto",
              description:
                "Learn about the three high-level workflows for running scans and ingesting results: orchestration, extraction, and ingestion.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/sto-workflows-overview",
            },
            {
              title: "Orchestration workflows",
              module: "sto",
              description:
                "Learn how to scan an object and ingest the results automatically in one step.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/run-an-orchestrated-scan-in-sto",
            },
            {
              title: "Ingestion workflows",
              module: "sto",
              description:
                "Learn how to run scans in a separate step, or outside Harness entirely, and ingest the results.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingest-scan-results-into-an-sto-pipeline",
            },
            {
                title: "Configure external scanners",
                module: "sto",
                description:
                  "STO includes integrations with over 30 external tools for scanning repositories, container images, applications, and configurations.",
                link: "/docs/category/sto-technical-reference",
              },
            {
              title: "Ingest data from custom scanners",
              module: "sto",
              description:
                "You can ingest custom Issues from any scanning tool. This topic shows you how.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingesting-issues-from-other-scanners",
            },
          ],
        },  
        {
          name: "View, troubleshoot, and fix vulnerabilities",
          description:
            "",
          list: [
            {
              title: "View issues in target baselines over time",
              module: "sto",
              description:
                "See all detected issues in your main branches, latest images, and other target baselines.",
              link: "/docs/security-testing-orchestration/use-sto/view-and-troubleshoot-vulnerabilities/sto-overview",
            },
            {
              title: "Build and upload artifacts",
              module: "ci",
              description:
                "Build and upload artifacts in CI pipelines.",
              link: "/docs/category/build-and-upload-artifacts",
            },
            {
              title: "Run tests",
              module: "ci",
              description:
                "Run tests in CI pipelines.",
              link: "/docs/category/run-tests",
            },

          ],
        },
    
        {
          name: "Stop builds based on detected vulnerabilities",
          description:
            "",
          list: [
            {
              title: "Exemptions (Ignore Rules) for Specific Issues",
              module: "sto",
              description:
                "Lean how to set fail_on_severity to stop pipeline builds and create exemptions (ignore rules) for specific vulnerabilities",
              link: "/docs/security-testing-orchestration/use-sto/stop-builds-based-on-scan-results/exemption-workflows",
            },
            {
              title: "Stop pipelines automatically using governance policies",
              module: "sto",
              description:
                "Learn how to create OPA policies to stop pipelines automatically",
              link: "/docs/security-testing-orchestration/use-sto/stop-builds-based-on-scan-results/stop-pipelines-using-opa",
            },
          ],
        },

        ];
    /* Define the cards - end */