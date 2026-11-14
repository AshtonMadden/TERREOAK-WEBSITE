import ArticlePage, { articleMeta } from "../../components/ArticlePage";

import { springPost as article } from "../posts";

export const metadata = articleMeta(article);

export default function Page() {
  return (
    <ArticlePage article={article}>
      <div>
                              <div>
                                  <p>
                                      A great Calgary summer lawn starts in the first two weeks of April. Without it, your grass is literally gasping for air under a winter&apos;s worth of debris.
                                  </p>
                                  <p>
                                      After six months of sub-zero temperatures, heavy snow packs, and road salt, your lawn isn&apos;t just “dormant”, it&apos;s struggling. For Calgary homeowners, the window between the final snow melt and the first heat wave is the most critical time for property maintenance. A professional spring cleanup isn&apos;t just about aesthetics; it&apos;s a biological requirement for a healthy, green lawn.
                                  </p>
                              </div>
                          <div>
                              <h2>The Biological Awakening</h2>
                              <p>
                                  As soil temperatures in Calgary rise above 5°C, grass roots begin to wake up from their winter slumber. They look for three things: Oxygen, Sunlight, and Nutrients. However, a typical winter leaves behind a “cap” of dead grass, leaves, and dirt that seals off the soil. If this cap isn&apos;t broken, the soil stays cold longer, and the roots remain dormant, allowing weeds (which are more resilient) to take over your yard before the grass even starts growing.
                              </p>
                          </div>
                          <div>
                              <h2>Critical Winter Damage (Pain Points)</h2>
                              <div>
                                  <div>
                                      <h3>01. Snow Mold & Fungal Disease</h3>
                                      <p>
                                          When snow sits on a Calgary lawn for 4+ months, moisture gets trapped between the grass blades and the frozen ground. This creates a perfect breeding ground for Grey and Pink Snow Mold. If not raked out quickly in spring, this fungus can kill the “crown” of the grass plant, leading to large dead patches that require expensive sod replacement later in the summer.
                                      </p>
                                  </div>
                                  <div>
                                      <h3>02. Salt, Sand & Gravel Buildup</h3>
                                      <p>
                                          Calgary road crews use massive amounts of gravel and salt to keep our streets safe. When snow is plowed or shoved onto your lawn, this grit settles deep into the grass. Salt changes the chemical balance of your soil, making it toxic to grass roots, while the gravel physically blocks new shoots from reaching the sun.
                                      </p>
                                  </div>
                                  <div>
                                      <h3>03. Soil Compaction & Thatch</h3>
                                      <p>
                                          The weight of heavy Calgary snow packs compresses your soil, squeezing out the air pockets that roots need to survive. Combined with a thick layer of thatch (old dead grass), your lawn becomes “nutrient-locked,” meaning even if you water and fertilize, nothing reaches the roots.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <h2>The TERREOAK Professional Solutions</h2>
                              <div>
                                  <div>
                                      <div>
                                          <h4>Industrial Power Raking (Dethatching)</h4>
                                          <p>
                                              We use commercial-grade power rakes with steel tines that spin at high speeds to pull dead thatch and snow mold from the soil surface. This process “exfoliates” the lawn, allowing it to breathe and exposing the soil to the essential warmth of the spring sun. A hand rake simply cannot achieve the same level of soil-clearing.
                                          </p>
                                      </div>
                                  </div>
                                  <div>
                                      <div>
                                          <h4>Oxygenating Core Aeration</h4>
                                          <p>
                                              Our heavy-duty core aerators remove thousands of small soil plugs from your yard. This instantly relieves soil compaction and creates direct highways for water, oxygen, and liquid fertilizer to penetrate deep into the root zone. This is the single most effective way to spark explosive spring growth.
                                          </p>
                                      </div>
                                  </div>
                                  <div>
                                      <div>
                                          <h4>High-Output Blower Cleanup & Detailing</h4>
                                          <p>
                                              We don&apos;t just rake; we detail your entire property. Using high-output commercial blowers, we clear out gravel from boulevards, debris from garden beds, and salt buildup from driveways. We ensure your entire property, not just the grass, is ready for the season.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <h2>Common Spring Cleanup Mistakes</h2>
                              <ul>
                                  <li><strong>Waiting Too Long:</strong> If you wait until the grass is green to power rake, you risk tearing out the healthy new shoots. The best time is while the lawn is still mostly dormant.</li>
                                  <li><strong>Ignoring the Edges:</strong> Salt and gravel concentrate at the edges of driveways and sidewalks. If this isn&apos;t manually removed, the “burn” will creep into your lawn all summer.</li>
                                  <li><strong>Fertilizing Before Cleanup:</strong> Applying fertilizer on top of a thick layer of thatch is a waste of money. The nutrients will never reach the soil and will likely wash away in the next rain.</li>
                              </ul>
                          </div>
                          <div>
                              <h2>Spring Cleanup FAQ</h2>
                              <div>
                                  <div>
                                      <h5>When should I book my Calgary spring cleanup?</h5>
                                      <p>As soon as the snow is 90% gone. Typically, the window starts in mid-March and runs through late April. Booking early ensures you get your service completed before the first growth spurt.</p>
                                  </div>
                                  <div>
                                      <h5>Will power raking damage my lawn?</h5>
                                      <p>When done professionally at the right time (while dormant), it is highly beneficial. It removes the dead “mat” of grass so the healthy crowns can grow unobstructed.</p>
                                  </div>
                                  <div>
                                      <h5>Do I need to be home for the service?</h5>
                                      <p>No! As long as we have access to the yard and pets are indoors, we can complete the entire cleanup and leave your property looking pristine while you are at work.</p>
                                  </div>
                              </div>
                          </div>
                          </div>
    </ArticlePage>
  );
}
