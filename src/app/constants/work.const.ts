export const WORK_LIST = [
    {
        company: 'qcells',
        displayName: 'QCells',
        jobTitle: 'UI Engineer',
        startDate: 'Jan 2021',
        endDate: 'Now',
        selected: true,
        overview: 'Led the design and development of critical software solutions, including a utility-scale energy storage monitoring platform and various backend services.',
        achievements: [
            "Designed and developed a monitoring platform for a 190 MW / 380 MWh energy storage system, taking charge from initial Figma designs to full UI development in the platform's 2.0 release.",
            'Engineered an Express.js microservice for automated data handling and reporting, utilizing Puppeteer and EJS to schedule tasks, transform data into PDFs, and manage communications through AWS (S3, SES).',
            'Contributed significantly to the migration from AngularJS to Angular 14, focusing on performance enhancement and modern web standards compliance.'
        ],
        technologies: [
            'Figma', 'Express.js', 'Puppeteer', 'EJS', 'AngularJS', 'Angular 14', 'AWS (S3, SES)', 'Kubernetes', 'SQL'
        ]
    },
    {
        company: 'geli',
        displayName: 'Geli',
        jobTitle: 'Analytics Engineer',
        startDate: 'Aug 2019',
        endDate: 'Jan 2021',
        selected: false,
        overview: 'Spearheaded the development and analysis of Python-based tools for standardized deliverables and market entry strategies, enhancing regulatory compliance and market penetration.',
        achievements: [
            'Developed a Python tool to transition from Excel-based ad-hoc processes to a formalized system for standardizing customer deliverables, setting the stage for more advanced microservices development.',
            'Led the market analysis for entry into the Australia Virtual Power Plant market, employing Python for simulations and Streamlit, later Dash by Plotly, for data visualization and analysis to support strategic decisions and business model innovation.',
            "Conducted pivotal analysis for California's SGIP GHG reduction measures using custom Python tools, collaborating with the data science team to integrate these tools into existing systems for enhanced compliance and deployment."
        ],
        technologies: [
            'Python', 'Streamlit', 'Dash', 'Ploty', 'Excel', 'VBA', 'Salesforce',
        ],
        links: [
            {
                display: 'Geli Acquisition',
                url: 'https://www.greentechmedia.com/articles/read/hanwha-q-cells-buys-geli-to-tap-into-north-american-ci-solar-storage-market'
            },
            {
                display: 'ERCOT ESS',
                url: 'https://www.energy-storage.news/acciona-energia-buys-380mwh-ercot-battery-storage-project-from-qcells/'
            }
        ]
    },
    {
        company: 'photon',
        displayName: 'Photon Brothers',
        jobTitle: 'Sales Engineer',
        startDate: 'Feb 2017',
        endDate: 'Aug 2019',
        selected: false,
        overview: 'Led the sales and analytics initiatives for commercial solar and energy storage systems, driving market expansion and optimizing customer solutions across California and Colorado.',
        achievements: [
            "Market Expansion: Spearheaded the company's entry into the commercial solar and energy storage sectors, establishing a strong foothold in new markets.",
            'Sales Leadership: Served as the primary sales lead, utilizing deep analytics to optimize system proposals and maximize customer benefits, resulting in heightened customer acquisition and satisfaction.',
            'Analytics and Proposal Enhancement: Directed analytics operations for commercial solar and storage solutions, using advanced tools to craft precise and compelling customer proposals.',
            'Sales Tool Development: Developed and implemented a comprehensive, company-wide sales tool for the residential market, enhancing real-time customization and significantly improving sales process efficiency and customer engagement.'
        ],
        technologies: [
            'EnergyToolbase', 'Excel', 'VBA', 'Aurora', 'AutoCAD', 'Salesforce',
        ]
    },
    {
        company: 'landmark',
        displayName: 'Landmark Irrigation',
        jobTitle: 'Irrigation Engineer',
        startDate: 'Jun 2015',
        endDate: 'Feb 2017',
        selected: false,
        overview: 'Executed advanced engineering designs and managed construction for large-scale hydraulic projects, focusing on optimizing fluid dynamics in various system configurations.',
        achievements: [
            'Engineering Design: Independently designed comprehensive fluid dynamics computations for open and closed hydraulic systems, enhancing project efficacy and stability.',
            'Calculation Expertise: Routinely performed critical calculations for pumping stations, filtration systems, chemical treatments, and pipelines, ensuring operational accuracy and efficiency.',
            'Construction Coordination: Directed field meetings with installation crews, overseeing the construction process to maintain fidelity to engineering designs and timelines.',
            'Standardization Initiatives: Created an extensive AutoCAD library of in-field assemblies, standardizing installation processes and facilitating more accurate project quoting.',
            'Cost Management: Developed detailed cost estimates for materials and labor, enabling precise budget management and financial planning for projects.'
        ],
        technologies: [
            'AutoCAD', 'IRRICAD', 'Excel', 'VBA'
        ]
    }
]