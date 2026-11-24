import JsonLd from "../components/JsonLd";
import { Band, Button, Container, GoogleMark, Stars } from "../components/ds";
import { reviews } from "../home-content";
import { breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";

const path = "/reviews";

export const metadata = pageMeta({
  title: "TERREOAK Reviews | Calgary Landscaping & Snow Removal",
  description: `Read what Calgary homeowners say about TERREOAK Landscaping & Snow. Rated ${site.reviews.rating} on Google for landscaping, lawn care and snow removal.`,
  path,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${site.url}${path}#webpage`, url: `${site.url}${path}`, name: "TERREOAK reviews", about: { "@id": `${site.url}/#localbusiness` }, isPartOf: { "@id": `${site.url}/#website` } },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Reviews", path },
    ]),
  ],
};

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip pt-36 md:pt-44">
      <JsonLd data={jsonLd} />
      <Container>
        <h1 className="to-display to-h1 max-w-[18ch]">What our clients say about TERREOAK</h1>
        <p className="to-body mt-6 max-w-[60ch]">Reviews from Calgary homeowners we’ve worked for, taken from our Google Business Profile.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="to-focus flex w-fit items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.05rem] font-medium text-fg transition-colors hover:bg-white/[0.12]"
          >
            <GoogleMark />
            {site.reviews.rating} from {site.reviews.count} Google reviews
          </a>
          <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link text-[1.05rem]">
            Read them all on Google
          </a>
        </div>
      </Container>

      <Band>
        <ul className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name}>
              <figure className="to-card flex h-full flex-col p-6 md:p-8">
                <Stars />
                <blockquote className="mt-5 text-[1.08rem] leading-relaxed text-fg">“{review.text}”</blockquote>
                <figcaption className="mt-auto pt-6">
                  <span className="block font-bold text-fg">{review.name}</span>
                  {review.role && <span className="mt-1 block text-[0.98rem] text-muted">{review.role}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">Worked with us?</h2>
            <p className="to-body mt-4">A Google review takes a minute and helps other Calgary homeowners find us.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={site.googleProfile} variant="quiet">
              Leave a Google review
            </Button>
            <Button href="/contact">Request an estimate</Button>
          </div>
        </div>
      </Band>
    </main>
  );
}
