import ArticlePage, { articleMeta } from "../../components/ArticlePage";

import { snowPost as article } from "../posts";

export const metadata = articleMeta(article);

export default function Page() {
  return (
    <ArticlePage article={article}>
      <div>
                              <div>
                                  <p>
                                      Calgary winters are unpredictable. A professional snow removal service isn&apos;t just a luxury, it&apos;s about protecting your health, your liability, and your peace of mind.
                                  </p>
                                  <p>
                                      When the temperature drops and the heavy snow falls, shoveling the driveway is the last thing anyone wants to do. But avoiding the cold isn&apos;t the only, or even the most important, reason to hire a professional snow removal company. From avoiding costly bylaw fines to preventing serious physical injuries, having a dedicated snow removal crew on a route-based season pass is one of the smartest investments a homeowner can make.
                                  </p>
                              </div>
                          <div>
                              <h2>The Liability Factor</h2>
                              <p>
                                  Under Calgary city bylaws, property owners are required to clear snow and ice from public sidewalks adjacent to their property within 24 hours of the snowfall ending. If you fail to do so, the city can issue hefty fines and hire a contractor to do it at your expense.
                              </p>
                              <p>
                                  Worse than a fine is the risk of a slip-and-fall lawsuit. If a pedestrian, delivery driver, or letter carrier slips on your icy sidewalk, you can be held legally liable. A professional snow removal service acts as an insurance policy. At TERREOAK, we provide a 12-24 hour service guarantee and maintain detailed photo logs of every property we service, ensuring you are completely protected from liability claims.
                              </p>
                          </div>
                          <div>
                              <h2>The Hidden Costs of DIY Snow Removal</h2>
                              <div>
                                  <div>
                                      <h3>01. Physical Strain & Injury Risk</h3>
                                      <p>
                                          Shoveling wet, heavy snow is one of the leading causes of winter back injuries, muscle strains, and even cardiovascular emergencies. Professional crews use commercial-grade equipment like snowblowers, power sweepers, and truck plows to move heavy snow effortlessly, keeping you out of the cold and out of the hospital.
                                      </p>
                                  </div>
                                  <div>
                                      <h3>02. Travel Limitations (Snowbirds)</h3>
                                      <p>
                                          Whether you are traveling for a week or spending the entire winter somewhere warm, leaving your driveway unplowed is a massive security risk. Untouched snow is a clear signal to burglars that a home is vacant. Having a professional service maintain your driveway ensures your home looks actively lived in, while ensuring you return to a clean property.
                                      </p>
                                  </div>
                                  <div>
                                      <h3>03. Property Damage</h3>
                                      <p>
                                          Inexperienced shovelers or neighborhood kids using metal shovels and ice chippers often cause thousands of dollars in damage to concrete driveways, interlock pavers, and lawn edges. Professionals use specialized driveway markers and non-destructive scraping tools to ensure your property remains pristine until spring.
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <h2>Why TERREOAK is Different</h2>
                              <div>
                                  <div>
                                      <div>
                                          <h4>Route-Based Reliability</h4>
                                          <p>
                                              We do not accept “one-off” calls during storms. Our crews run tight, exclusive routes in South Calgary for our season-pass holders only. This guarantees that your property is always serviced quickly and consistently, no matter how bad the storm gets.
                                          </p>
                                      </div>
                                  </div>
                                  <div>
                                      <div>
                                          <h4>12-24 Hour Service Guarantee</h4>
                                          <p>
                                              We guarantee that your property will be cleared within 12-24 hours of the snowfall ending. If we miss that window, we’ll send a crew back immediately at no charge. We take our service times very seriously.
                                          </p>
                                      </div>
                                  </div>
                                  <div>
                                      <div>
                                          <h4>Email Updates & Photo Logs</h4>
                                          <p>
                                              You never have to wonder if the plow is coming. We send email notifications before our crews are dispatched to your route, and we capture time-stamped photo logs of your completed driveway for total peace of mind.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          </div>
    </ArticlePage>
  );
}
