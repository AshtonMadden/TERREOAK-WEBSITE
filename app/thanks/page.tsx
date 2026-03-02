import Link from 'next/link';

export const metadata = {
    title: "Request Received | TerreOak",
    description: "Thanks — we received your request.",
};

export default function ThanksPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h1 className="mb-4 text-4xl font-bold text-black">Request received ✅</h1>
            <p className="mb-8 text-black/70">
                We’ll follow up soon to confirm details and scheduling.
            </p>
            <Link
                href="/"
                className="inline-block rounded border border-black/20 px-6 py-3 font-semibold text-black transition hover:border-black/40 hover:bg-black/5"
            >
                Back to Home
            </Link>
        </main>
    );
}