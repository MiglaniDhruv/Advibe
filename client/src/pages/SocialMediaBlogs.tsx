import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import CommunityHero from "../assets/CommunityHero.jpg"
import PurposeMapping from "../assets/PurposeMapping.jpg"
import AuthenticEngagement from "../assets/AuthenticEngagement.jpg"
import UGC1 from "../assets/UGC1.jpg"
import UGC2 from "../assets/UGC2.jpg"
import UGC3 from "../assets/UGC3.jpg"
import Rituals from "../assets/Rituals.jpg"
import Blog2 from "../assets/BLog2.jpg"
import Blog1 from "../assets/Blog1.jpg"
import Blog3 from "../assets/Blog3.jpg"
import Blog4 from "../assets/Blog4.jpg"
import Blog5 from "../assets/Blog5.jpg"
import Blog6 from "../assets/Blog6.jpg"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const zoomIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

type Related = { id: string; title: string; image: string; category: string; readTime: string; date: string };

function MetaRow({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="flex justify-center gap-6 text-sm mt-6">
      <div className="flex items-center gap-2">
        <Calendar size={16} /> <span>{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={16} /> <span>{readTime}</span>
      </div>
    </div>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.img
      {...zoomIn(0.1)}
      src={src}
      alt={alt}
      className="w-full rounded-2xl shadow-lg"
    />
  );
}

function Tip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUp(0.1)}
      className="rounded-2xl p-5 bg-gradient-to-r from-advibe-pink/10 to-advibe-blue/10 border border-white/60 shadow-inner"
    >
      <p className="font-semibold text-advibe-dark mb-1">{title}</p>
      <div className="text-gray-700">{children}</div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl p-6 bg-white shadow-md text-center">
      <div className="text-3xl font-extrabold text-advibe-pink">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <motion.blockquote
      {...fadeUp(0.05)}
      className="border-l-4 border-advibe-pink pl-4 italic text-advibe-dark/90"
    >
      {children}
    </motion.blockquote>
  );
}

function RelatedPosts({ list }: { list: Related[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-advibe-dark mb-4">You may also like</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {list.map((r, i) => (
          <Link key={r.id} href={`/blog/${r.id}`}>
            <a>
              <motion.article
                {...zoomIn(i * 0.05)}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src={r.image} alt={r.title} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <div className="text-xs font-semibold text-advibe-pink">{r.category}</div>
                  <div className="font-bold mt-1 line-clamp-2">{r.title}</div>
                  <div className="text-xs text-gray-500 mt-2">{r.date} • {r.readTime}</div>
                  <div className="text-advibe-pink text-sm mt-2 inline-flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.article>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogDetails() {
  const { id } = useParams();

  // ------- Article 1 -------
  if (id === "1") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              How to Build an Engaged Social Media Community
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              Learn proven strategies for building authentic relationships with your audience and creating a thriving online community around your brand.
            </motion.p>
            <MetaRow date="March 15, 2024" readTime="10 min read" />
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img
              src= {CommunityHero}
              alt="Community hero"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 md:p-10 space-y-12">
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-advibe-dark">Why Community <span className="ml-2">&gt;</span> Followers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Follower counts look good in pitch decks, but <span className="font-semibold">community</span> drives retention, referrals, and revenue.
                  An engaged community comments before algorithms ask, shares without being prompted, and defends your brand when you’re not in the room.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="6x" label="Higher LTV from engaged members" />
                  <Stat value="3.2x" label="More UGC vs. passive audience" />
                  <Stat value="+48%" label="Avg. reach lift from early comments" />
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-advibe-dark">1) Define a Magnetic Purpose</h3>
                  <p className="text-gray-700">
                    Communities rally around a shared belief. Clarify who you serve, what change you enable, and how members benefit
                    beyond your product. Convert this into a one-line invitation you repeat everywhere.
                  </p>
                  <Tip title="Template — Community Promise">
                    <ul className="list-disc pl-5 space-y-1">
                      <li><span className="font-semibold">For:</span> [specific people]</li>
                      <li><span className="font-semibold">Who want:</span> [desired outcome]</li>
                      <li><span className="font-semibold">We:</span> [how you help]</li>
                    </ul>
                  </Tip>
                </div>
                <SectionImage src= {PurposeMapping} alt="Purpose mapping" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src= {AuthenticEngagement} alt="Authentic engagement" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-advibe-dark">2) Engineer Authentic Engagement</h3>
                  <p className="text-gray-700">
                    Reply fast, reference names, and ask for stories—not just opinions. Seed the first 10 comments with team members to signal activity.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Set a 2-hour reply SLA for comments/DMs.</li>
                    <li>End posts with a single, specific question.</li>
                    <li>Rotate weekly formats: wins, debates, show-and-tell.</li>
                  </ul>
                  <Quote>“Design conversations, not announcements.”</Quote>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Content That Sparks Participation</h3>
                <p className="text-gray-700">
                  Think prompts, not posts. Carousels with binary choices, duet-friendly Reels, and remixable templates outperform polished monologues.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <SectionImage src= {UGC1} alt="UGC example 1" />
                  <SectionImage src= {UGC2} alt="UGC example 2" />
                  <SectionImage src= {UGC3} alt="UGC example 3" />
                </div>
                <Tip title="High-engagement post formulas">
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-semibold">“This or That”</span> with two visuals</li>
                    <li><span className="font-semibold">“Rate my ___ (1–10)”</span> + ask for advice</li>
                    <li><span className="font-semibold">“Remix this”</span>: share a blank template</li>
                  </ul>
                </Tip>
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-advibe-dark">4) Rituals & Roles</h3>
                  <p className="text-gray-700">
                    Weekly rituals build habit; member roles build ownership. Nominate mentors/mods, spotlight creators, and celebrate streaks.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>“Member Monday” intros with a fun prompt.</li>
                    <li>“Win Wednesday” to showcase progress.</li>
                    <li>“Office Hours Friday” for AMAs/live Q&A.</li>
                  </ul>
                </div>
                <SectionImage src= {Rituals} alt="Rituals" />
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">5) Measure Health, Not Just Growth</h3>
                <p className="text-gray-700">
                  Track: active members/MAU, comment-to-post ratio, time-to-first-comment, UGC volume, and sentiment. Optimize for early comment velocity.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="38%" label="Comment-to-post ratio" />
                  <Stat value="12m" label="Avg. time to 1st comment" />
                  <Stat value="+62%" label="UGC growth QoQ" />
                </div>
              </section>

              <motion.div
                {...fadeUp(0.05)}
                className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white text-center p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">Ready to Grow Your Community?</h3>
                <p>Start with one ritual, one role, and one prompt this week. Consistency compounds.</p>
              </motion.div>

              <RelatedPosts
                list={[
                  { id: "2", title: "SEO Best Practices for Small Businesses in 2024", image: Blog2, category: "SEO TIPS", readTime: "12 min read", date: "Mar 12, 2024" },
                  { id: "3", title: "Email Marketing Automation That Actually Works", image: Blog3, category: "EMAIL MARKETING", readTime: "10 min read", date: "Mar 10, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Article 2 -------
  if (id === "2") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              SEO Best Practices for Small Businesses in 2024
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              Actionable strategies to rank higher, get discovered locally, and turn organic traffic into revenue.
            </motion.p>
            <MetaRow date="March 12, 2024" readTime="12 min read" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/blogs/seo-hero.jpg" alt="SEO" className="w-full h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-12">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">1) Own Your Local SEO</h3>
                  <p className="text-gray-700">
                    Claim and optimize your Google Business Profile, add categories, services, photos, and collect reviews.
                    Build consistent NAP citations and use city + service keywords on your site.
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
                    <li>Create a dedicated page per location/service.</li>
                    <li>Embed a Google Map and add local schema.</li>
                    <li>Reply to every review within 48 hours.</li>
                  </ul>
                </div>
                <SectionImage src="/src/assets/blogs/local-seo-map.jpg" alt="Local map" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src="/src/assets/blogs/seo-core-web-vitals.jpg" alt="Core Web Vitals" />
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">2) Speed + UX = Rankings</h3>
                  <p className="text-gray-700">
                    Core Web Vitals matter. Compress images (WebP/AVIF), lazy-load below the fold, and minimize scripts.
                    For small businesses, a snappy mobile site beats bloated templates every time.
                  </p>
                  <Tip title="Quick wins">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Use a CDN and HTTP/2.</li>
                      <li>Inline critical CSS; defer non-critical JS.</li>
                      <li>Ship SVG icons instead of PNGs.</li>
                    </ul>
                  </Tip>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Topic Clusters, Not Random Posts</h3>
                <p className="text-gray-700">
                  Build a pillar page (e.g., “Complete Guide to [Service] in [City]”) and link supporting posts around it.
                  This clarifies topical authority for search engines and visitors.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <SectionImage src="/src/assets/blogs/seo-cluster-1.jpg" alt="Cluster 1" />
                  <SectionImage src="/src/assets/blogs/seo-cluster-2.jpg" alt="Cluster 2" />
                  <SectionImage src="/src/assets/blogs/seo-cluster-3.jpg" alt="Cluster 3" />
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">4) Answer Engine Optimization</h3>
                  <p className="text-gray-700">
                    Write in Q&A structures, use concise answers in the first 2–3 sentences, and include FAQs with schema.
                    This unlocks featured snippets and AI overviews.
                  </p>
                  <Quote>“If your content is skimmable by humans, it’s parsable by search engines.”</Quote>
                </div>
                <SectionImage src="/src/assets/blogs/seo-faq.jpg" alt="FAQ" />
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">5) Links That Actually Move the Needle</h3>
                <p className="text-gray-700">
                  Local newspapers, chambers, partner vendors, and niche directories outperform generic guest posts.
                  Pitch data stories, sponsor community events, and publish case studies worth citing.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="+27" label="Avg. RD after local PR" />
                  <Stat value="2.3x" label="Query coverage via clusters" />
                  <Stat value="-38%" label="Bounce after UX cleanup" />
                </div>
              </section>

              <RelatedPosts
                list={[
                  { id: "1", title: "How to Build an Engaged Social Media Community", image: "/src/assets/blogs/social-hero.jpg", category: "SOCIAL MEDIA", readTime: "10 min read", date: "Mar 15, 2024" },
                  { id: "4", title: "Creating Content That Converts: A Step-by-Step Guide", image: "/src/assets/blogs/content-hero.jpg", category: "CONTENT STRATEGY", readTime: "12 min read", date: "Mar 8, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Article 3 -------
  if (id === "3") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              Email Marketing Automation That Actually Works
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              Proven workflows that nurture leads and drive conversions on autopilot — without sounding robotic.
            </motion.p>
            <MetaRow date="March 10, 2024" readTime="10 min read" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/blogs/email-hero.jpg" alt="Email automation" className="w-full h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-12">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">1) High-Trust Welcome Series</h3>
                  <p className="text-gray-700">
                    A 3–5 email welcome flow sets tone and expectations. Blend story, value, and one micro-ask.
                  </p>
                  <Tip title="Welcome Flow (Day 0/2/5/8)">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Origin story + what to expect</li>
                      <li>Best resources hub (top 3)</li>
                      <li>Customer success mini-case</li>
                      <li>Soft CTA: book a call / quiz</li>
                    </ul>
                  </Tip>
                </div>
                <SectionImage src="/src/assets/blogs/email-welcome.jpg" alt="Welcome flow" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src="/src/assets/blogs/email-behavior.jpg" alt="Behavior triggers" />
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">2) Behavior-Based Triggers</h3>
                  <p className="text-gray-700">
                    Fire automations on product views, link clicks, abandons, and inactivity. Personalize with merge fields and intent tags.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Cart/lead abandon (3-email cadence)</li>
                    <li>Viewed pricing but didn’t convert</li>
                    <li>Re-engagement for 30-day inactives</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Segmentation That Sells</h3>
                <p className="text-gray-700">
                  Segment by lifecycle stage, product interest, AOV, and engagement. Send fewer, smarter emails.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="+41%" label="Lift in CTR with segments" />
                  <Stat value="3–5x" label="Revenue from carts saved" />
                  <Stat value="-28%" label="Unsubs after cadence fix" />
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">4) Copy That Converts</h3>
                  <p className="text-gray-700">
                    Plain-text style, short lines, one CTA. Use pattern breaks and curiosity loops; avoid wall-of-text.
                  </p>
                  <Quote>“Write like a helpful friend, not a brochure.”</Quote>
                </div>
                <SectionImage src="/src/assets/blogs/email-copy.jpg" alt="Copywriting" />
              </section>

              <RelatedPosts
                list={[
                  { id: "4", title: "Creating Content That Converts: A Step-by-Step Guide", image: "/src/assets/blogs/content-hero.jpg", category: "CONTENT STRATEGY", readTime: "12 min read", date: "Mar 8, 2024" },
                  { id: "5", title: "Maximizing ROI from Google Ads: Advanced Strategies", image: "/src/assets/blogs/ppc-hero.jpg", category: "PPC ADVERTISING", readTime: "14 min read", date: "Mar 5, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Article 4 -------
  if (id === "4") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              Creating Content That Converts: A Step-by-Step Guide
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              A practical framework for moving readers from attention → trust → action.
            </motion.p>
            <MetaRow date="March 8, 2024" readTime="12 min read" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/blogs/content-hero.jpg" alt="Content" className="w-full h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-12">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">1) Diagnose: Audience × Problem × Moment</h3>
                  <p className="text-gray-700">
                    Define the job-to-be-done and the moment of need (search, social scroll, email skim).
                    Match format to context.
                  </p>
                  <Tip title="Research fast">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Audit top SERP competitors</li>
                      <li>Mine comments/reviews for phrasing</li>
                      <li>Map questions to funnel stages</li>
                    </ul>
                  </Tip>
                </div>
                <SectionImage src="/src/assets/blogs/content-research.jpg" alt="Research" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src="/src/assets/blogs/content-structure.jpg" alt="Structure" />
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">2) Structure for Skimmers</h3>
                  <p className="text-gray-700">
                    Lead with outcomes, front-load examples, use subheads every 150–200 words, and insert CTAs at natural action points.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Proof Over Promises</h3>
                <p className="text-gray-700">
                  Case studies, screenshots, and numbers beat adjectives. Show step-by-step receipts.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="+112%" label="Signup lift after CTA rewrite" />
                  <Stat value="36%" label="Avg. scroll depth increase" />
                  <Stat value="2.1x" label="Share rate with checklists" />
                </div>
              </section>

              <RelatedPosts
                list={[
                  { id: "2", title: "SEO Best Practices for Small Businesses in 2024", image: "/src/assets/blogs/seo-hero.jpg", category: "SEO TIPS", readTime: "12 min read", date: "Mar 12, 2024" },
                  { id: "6", title: "Building a Brand Identity That Stands Out", image: "/src/assets/blogs/branding-hero.jpg", category: "BRANDING", readTime: "10 min read", date: "Mar 3, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Article 5 -------
  if (id === "5") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              Maximizing ROI from Google Ads: Advanced Strategies
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              Layered targeting, smart bidding, and creative testing for profitable PPC at any budget.
            </motion.p>
            <MetaRow date="March 5, 2024" readTime="14 min read" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/blogs/ppc-hero.jpg" alt="PPC" className="w-full h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-12">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">1) Smart Bidding, Smarter Guardrails</h3>
                  <p className="text-gray-700">
                    Use tROAS/tCPA with audience signals and value rules. Start with conservative caps, then open as data accrues.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Exclude low-value geos/hours</li>
                    <li>Break out high-margin SKUs</li>
                    <li>Use negative keyword sculpting</li>
                  </ul>
                </div>
                <SectionImage src="/src/assets/blogs/ppc-bidding.jpg" alt="Bidding" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src="/src/assets/blogs/ppc-audience.jpg" alt="Audience" />
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">2) Audience Layering</h3>
                  <p className="text-gray-700">
                    Combine intent (search terms) with affinity (in-market, remarketing). Bid adjust for recency windows.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Creatives & Extensions That Earn Clicks</h3>
                <p className="text-gray-700">
                  Test hooks (urgency, proof, contrast), use assets that mirror landing pages, and stack extensions to expand real estate.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="+31%" label="CTR with new hooks" />
                  <Stat value="-24%" label="CPC after sculpting" />
                  <Stat value="2.6x" label="Conv. lift with RLSA" />
                </div>
              </section>

              <RelatedPosts
                list={[
                  { id: "2", title: "SEO Best Practices for Small Businesses in 2024", image: "/src/assets/blogs/seo-hero.jpg", category: "SEO TIPS", readTime: "12 min read", date: "Mar 12, 2024" },
                  { id: "3", title: "Email Marketing Automation That Actually Works", image: "/src/assets/blogs/email-hero.jpg", category: "EMAIL MARKETING", readTime: "10 min read", date: "Mar 10, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Article 6 -------
  if (id === "6") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-advibe-pink to-advibe-blue text-white py-16 px-6 text-center">
          <div className="container mx-auto">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold mb-4">
              Building a Brand Identity That Stands Out
            </motion.h1>
            <motion.p {...fadeUp(0.05)} className="max-w-2xl mx-auto text-lg">
              A clear, consistent identity shapes perception, loyalty, and pricing power.
            </motion.p>
            <MetaRow date="March 3, 2024" readTime="10 min read" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog">
            <a className="inline-flex items-center text-advibe-pink mb-6 hover:opacity-80">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <motion.div {...zoomIn()} className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <img src="/src/assets/blogs/branding-hero.jpg" alt="Branding" className="w-full h-80 object-cover" />
            <div className="p-6 md:p-10 space-y-12">
              <section className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">1) Values → Voice → Visuals</h3>
                  <p className="text-gray-700">
                    Start with beliefs, translate to tone, then design a system (color, type, shape, motion) that signals those beliefs instantly.
                  </p>
                  <Tip title="Brand one-liner">
                    <p><span className="font-semibold">We help</span> [who] <span className="font-semibold">achieve</span> [outcome] <span className="font-semibold">by</span> [how], <span className="font-semibold">so they can</span> [benefit].</p>
                  </Tip>
                </div>
                <SectionImage src="/src/assets/blogs/branding-values.jpg" alt="Values" />
              </section>

              <section className="grid md:grid-cols-2 gap-8 items-center">
                <SectionImage src="/src/assets/blogs/branding-visuals.jpg" alt="Visuals" />
                <div>
                  <h3 className="text-xl font-bold text-advibe-dark">2) Consistency Compounds</h3>
                  <p className="text-gray-700">
                    Ship a brand kit and enforce usage. Consistent assets raise recall and willingness to pay.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-advibe-dark">3) Moments of Delight</h3>
                <p className="text-gray-700">
                  Surprise across touchpoints (thank-you inserts, micro-copy, motion cues). Little details become stories.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Stat value="+19%" label="Recall with motion cues" />
                  <Stat value="+24%" label="Willingness to pay w/ trust" />
                  <Stat value="3x" label="Word-of-mouth from delight" />
                </div>
              </section>

              <RelatedPosts
                list={[
                  { id: "4", title: "Creating Content That Converts: A Step-by-Step Guide", image: "/src/assets/blogs/content-hero.jpg", category: "CONTENT STRATEGY", readTime: "12 min read", date: "Mar 8, 2024" },
                  { id: "1", title: "How to Build an Engaged Social Media Community", image: "/src/assets/blogs/social-hero.jpg", category: "SOCIAL MEDIA", readTime: "10 min read", date: "Mar 15, 2024" },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ------- Not Found -------
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Blog Not Found</h1>
      <p className="text-gray-600 mt-4">The blog you’re looking for doesn’t exist.</p>
      <Link href="/blog">
        <a className="inline-flex items-center text-advibe-pink mt-6 hover:opacity-80">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </a>
      </Link>
    </div>
  );
}
