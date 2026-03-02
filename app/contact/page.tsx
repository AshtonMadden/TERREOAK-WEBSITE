export const metadata = {
    title: "Request an Estimate | TerreOak Landscaping & Snow",
    description:
        "Request an estimate for spring cleanup, landscape design/build, or snow removal in Calgary.",
};

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-4 text-4xl font-bold text-black uppercase">Request an Estimate</h1>
            <p className="mb-10 text-black/70">
                Submit the details below and we’ll follow up to confirm scope, timing, and access.
                (No “free” language — this is an estimate request.)
            </p>

            <form
                action="https://formsubmit.co/services@terreoak.ca"
                method="POST"
                className="grid gap-5 rounded border border-black/10 bg-gray-50 p-6 md:p-8"
            >
                {/* FormSubmit settings */}
                <input type="hidden" name="_subject" value="New TerreOak Estimate Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="http://localhost:3000/thanks" />

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">Name</label>
                    <input
                        name="name"
                        required
                        className="w-full rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Full name"
                    />
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">Phone</label>
                    <input
                        name="phone"
                        required
                        className="w-full rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="(403) 555-5555"
                    />
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="you@email.com"
                    />
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">
                        Property Address
                    </label>
                    <input
                        name="address"
                        required
                        className="w-full rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Street address, Calgary"
                    />
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">Service</label>
                    <div className="relative">
                        <select
                            name="service"
                            required
                            className="w-full appearance-none rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select one
                            </option>
                            <option>Spring Cleanup</option>
                            <option>Landscape Design & Build</option>
                            <option>Residential Snow Removal</option>
                            <option>Commercial Snow Removal</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/50">
                            ▼
                        </div>
                    </div>
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">Timeline</label>
                    <div className="relative">
                        <select
                            name="timeline"
                            required
                            className="w-full appearance-none rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select one
                            </option>
                            <option>ASAP</option>
                            <option>Next 2–4 weeks</option>
                            <option>1–2 months</option>
                            <option>Planning ahead</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/50">
                            ▼
                        </div>
                    </div>
                </div>

                <div className="grid gap-1">
                    <label className="block text-sm font-semibold text-black">
                        Project Details
                    </label>
                    <textarea
                        name="details"
                        rows={6}
                        className="w-full rounded border border-black/10 bg-white px-4 py-3 text-black outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Tell us what you need done. Include access notes, pets, parking, and photos link if you have one."
                    />
                </div>

                <button
                    type="submit"
                    className="w-fit rounded bg-green-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                >
                    Send Request
                </button>

                <p className="text-xs text-black/50">
                    By submitting, you agree we may contact you by phone/text/email to confirm
                    details.
                </p>
            </form>
        </main>
    );
}