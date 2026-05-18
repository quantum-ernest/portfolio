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
    `Odoo ERP: Engineered custom Odoo modules and integration layers, building connectors to external systems (payments, IoT, APIs), contributing to cross-version migrations, and extending core functionalities to deliver scalable, business-critical ERP solutions.`,

    `Fuel Station Automation: Implemented a real-time Fuel Station Management and Monitoring system that reduced average reporting time and station losses by 25% while improving operational efficiency. Developed an ERP solution for configurations, reporting, and price adjustments, accelerating decision-making processes.`,

    `Remcash Payment Gateway: Integrated Telecel Cash API and developed secure encryption and compliance services, achieving full AML & KYC compliance. Created a streamlined onboarding system that reduced customer onboarding time by 40%.`,

    `Fuel Truck Automation System: Engineered a real-time tracking solution for GPS, temperature, and fuel volume data in fuel trucks, improving fuel management and preventing theft. Integrated ERP applications for seamless device synchronization and management.`,

    `Lunch Ordering System: Designed and developed backend services for a system serving over 1,000 employees, ensuring robust performance, efficiency, and scalability.`,

    `Fleet Management System: Designed and built a robust fleet management system supporting Galileosky 7x devices, with real-time tracking, automated notifications, driver performance metrics, and downloadable vehicle history. The system manages over 100 vehicles across multiple locations.`,

    `Cylinder Bottling Automation: Led the development of a QR code reader system using RS-485 serial communication, improving data accuracy and reducing production time by 45%.`
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
