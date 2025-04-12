interface Experience{
    company: string;
    position: string;
    period: string;
    location: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        company: "The Quantum Group Limited",
        position: "Software Engineer (Automation - Team Lead)",
        period: "2022 - Present",
        location: "Accra, Ghana",
        achievements: [
            `Implemented a real-time Fuel Station Management and Monitoring system 
            that reduced average reporting time and station losses by 25% while improving operational efficiency.
            Developed an ERP solution for configurations, reporting, and price adjustments, accelerating decision-making processes`,

            `Integrated Telecel Cash API and developed secure encryption and
compliance services, achieving full AML & KYC compliance. Created a streamlined onboarding system
that reduced customer onboarding time by 40%.`,

            `Engineered a real-time tracking solution for GPS, temperature, and fuel
volume data in fuel trucks, improving fuel management and preventing theft. Integrated ERP applications
for seamless device synchronization and efficient management.`,

            `Designed and developed backend services for the system serving over 1,000
employees, ensuring robust performance, efficiency, and scalability.`,

            `Devised and built a robust system supporting the Galileosky 7x device, with
features like real-time tracking, automated notifications, driver metrics, and downloadable vehicle
history. This system currently manages over 100 vehicles across multiple locations.`,

            `Led the development of a QR code reader system, increasing data
accuracy and reducing production time by 45% using RS-485 serial communication.`,

            `Managed a centralized repository for company applications,
implementing LDAP-based access controls to enhance security and streamline user access.`,

            `Successfully migrated custom Odoo modules between versions, ensuring a seamless transition
while preserving data integrity, and demonstrated expertise in customization and module development
by translating business requirements into effective ERP solutions.`,
            `Managing and maintaining a time tracker application, ensuring timely and accurate tracking of work
hours.`,

        ],
    },
    {
        company: "University of Ghana Computing Systems",
        position: "IT Security Specialist",
        period: "2021 - 2022",
        location: "Accra, Ghana",
        achievements: [
            `Researched social engineering attacks, identified vulnerabilities, and implemented countermeasures. 
            Analyzed survey data to improve student experiences and configured VoIP systems to enhance
            communication and productivity.`,
        ],
    },
]
