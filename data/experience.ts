interface Experience {
    company: string;
    position: string;
    period: string;
    location: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        company: "The Quantum Group Limited",
        position: "Automation (Team Lead) & Systems Engineering",
        period: "11/2022 - 11/2025",
        location: "Accra, Ghana",
        achievements: [
            `Led the design and delivery of end-to-end automation systems across fuel stations, logistics, and
enterprise operations, reducing operational losses by 25% and improving overall efficiency`,

            `Architected and deployed real-time monitoring platforms integrating IoT data (GPS,
temperature, fuel volume), enabling proactive decision-making and theft prevention in fuel
stations and trucks.`,

            `Built and optimized ERP solutions for configuration, reporting, and operational control,
reducing reporting overhead and enabling faster operational decisions.`,

            `Developed and integrated a secure payment gateway (Telecel Cash API) with encryption and full
AML/​KYC compliance, reducing customer onboarding time by 40%.`,

            `Engineered a fleet management system supporting 100+ vehicles with real-time tracking, driver
performance analytics, and historical reporting across multiple locations.`,

            `Designed and maintained scalable backend services supporting 1,000+ users, a lunch ordering
system, and a job portal, ensuring high performance and reliability.`,

            `Led the implementation of industrial QR-based cylinder tracking via RS-485, improving data
accuracy and reducing production time by 45%.`,

            `Engineered custom Odoo modules and integration layers, building connectors to external
systems (payments, IoT, APIs), contributing to cross-version migrations, and extending core
functionalities to deliver scalable, business-critical ERP solutions.`,

        ],
    },
    {
        company: "University of Ghana Computing Systems",
        position: "IT Security Specialist",
        period: "10/2021 - 10/2022",
        location: "Accra, Ghana",
        achievements: [
            `Researched social engineering attacks, identified vulnerabilities, and implemented countermeasures. 
            Analyzed survey data to improve student experiences and configured VoIP systems to enhance
            communication and productivity.`,
        ],
    },
]
