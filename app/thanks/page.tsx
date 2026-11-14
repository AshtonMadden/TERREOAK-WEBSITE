import { Button, Container } from "../components/ds";
import { pageMeta } from "../lib/seo";

export const metadata = pageMeta({
  title: "Thank You | TERREOAK Landscaping Calgary",
  description:
    "Thank you for contacting TERREOAK. We have received your message and will be in touch shortly regarding your landscaping or snow removal needs.",
  path: "/thanks",
  noindex: true,
});

export default function ThanksPage() {
  return (
    <main className="to-pavement to-flow flex min-h-[80svh] items-center overflow-x-clip pb-20 pt-36">
      <Container>
        <h1 className="to-display to-h1 max-w-[16ch]">Request received.</h1>
        <p className="to-body mt-8 !text-fg">We’ll follow up soon to confirm details and scheduling.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/projects" variant="quiet">
            See recent projects
          </Button>
        </div>
      </Container>
    </main>
  );
}
