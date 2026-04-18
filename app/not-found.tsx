import Link from "next/link";
import { Section } from "./components/UI";

export default function NotFound() {
    const services = [
        { name: "Landscape Installs", href: "/landscape-installs" },
        { name: "Spring Cleanup", href: "/spring-cleanup-calgary" },
        { name: "Fall Cleanup", href: "/fall-cleanup" },
        { name: "Residential Snow Removal", href: "/residential-snow-removal" },
        { name: "Irrigation Blowouts", href: "/irrigation-blowouts" },
        { name: "Commercial Maintenance", href: "/commercial-grounds-maintenance" },
    ];

    return (
        <main className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-6">
            <Section 
                wrapperClassName="bg-black"
                kicker="Page Not Found"
                kickerClassName="text-[#01fa6d]"
                title={<>LOOKS LIKE YOU&apos;RE<br />OFF THE PATH.</>}
                titleClassName="text-white !text-4xl md:!text-6xl tracking-tight leading-tight uppercase"
                hasBorder={false}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-[120px] md:text-[180px] font-black text-[#01fa6d] leading-none tracking-tighter opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                        404
                    </h1>
                    
                    <div className="relative z-10">
                        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved. Use the links below to get back to our core services.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
                            {services.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="bg-white/5 border border-white/10 hover:border-[#01fa6d] p-6 rounded-2xl transition-all group text-center"
                                >
                                    <h3 className="text-sm font-black uppercase text-white group-hover:text-[#01fa6d] transition-colors">
                                        {service.name}
                                    </h3>
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-5 text-lg font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#01fa6d]/20"
                        >
                            RETURN HOME
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
