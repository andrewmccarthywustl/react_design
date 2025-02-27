// Updated DesignSystem.tsx with more components
import { useState } from "react";
import styles from "./DesignSystem.module.css";
import { Link } from "react-router-dom";

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState("colors");
  const [modalOpen, setModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [rangeValue, setRangeValue] = useState(50);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.designSystem}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>GEOMETRIC STRUCTURE</span>
            <span className={styles.titleSub}>DESIGN SYSTEM DOCUMENTATION</span>
          </h1>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <div className={styles.logoText}>herman miller</div>
              <div className={styles.logoLine}></div>
            </div>
          </div>
        </div>
      </header>

      <nav className={styles.navigation}>
        <ul className={styles.tabs}>
          <li
            className={`${styles.tab} ${
              activeTab === "colors" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("colors")}
          >
            Colors
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "typography" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("typography")}
          >
            Typography
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "components" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("components")}
          >
            Components
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "layouts" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("layouts")}
          >
            Layouts
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "animations" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("animations")}
          >
            Animations
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "patterns" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("patterns")}
          >
            Patterns
          </li>
          <li
            className={`${styles.tab} ${
              activeTab === "forms" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("forms")}
          >
            Forms
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        {/* Colors Section */}
        {activeTab === "colors" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Color Palette</h2>
            <p className={styles.sectionDescription}>
              The color system is based on a dark green foundation with vibrant
              yellow and orange accents to create a bold, modern aesthetic with
              a nod to mid-century design sensibilities.
            </p>

            <div className={styles.colorGrid}>
              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--dark-green)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Dark Green</h3>
                  <p>--dark-green</p>
                  <p>#1a3b2a</p>
                  <p>Base background color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--yellow)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Yellow</h3>
                  <p>--yellow</p>
                  <p>#ffdd40</p>
                  <p>Primary accent color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--orange)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Orange</h3>
                  <p>--orange</p>
                  <p>#ff7b00</p>
                  <p>Secondary accent color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--white)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>White</h3>
                  <p>--white</p>
                  <p>#ffffff</p>
                  <p>Text and highlight color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--light-green)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Light Green</h3>
                  <p>--light-green</p>
                  <p>#2c5e44</p>
                  <p>Secondary background color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--dark-orange)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Dark Orange</h3>
                  <p>--dark-orange</p>
                  <p>#d86800</p>
                  <p>For hover and active states</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--pale-yellow)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Pale Yellow</h3>
                  <p>--pale-yellow</p>
                  <p>#fff0a0</p>
                  <p>Highlight and notification color</p>
                </div>
              </div>

              <div className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: "var(--error-red)" }}
                ></div>
                <div className={styles.colorInfo}>
                  <h3>Error Red</h3>
                  <p>--error-red</p>
                  <p>#ff3b30</p>
                  <p>Error notifications</p>
                </div>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Color Usage</h3>
            <div className={styles.colorUsage}>
              <div className={styles.colorUsageItem}>
                <h4>Background</h4>
                <div className={styles.colorUsageExample}>
                  <div className={styles.bgDarkGreen}>Dark Green</div>
                  <div className={styles.bgLightGreen}>Light Green</div>
                </div>
              </div>

              <div className={styles.colorUsageItem}>
                <h4>Text</h4>
                <div className={styles.colorUsageExample}>
                  <div className={styles.textWhite}>White Text</div>
                  <div className={styles.textYellow}>Yellow Text</div>
                  <div className={styles.textOrange}>Orange Text</div>
                  <div className={styles.textPaleYellow}>Pale Yellow Text</div>
                </div>
              </div>

              <div className={styles.colorUsageItem}>
                <h4>Accents & Lines</h4>
                <div className={styles.colorUsageExample}>
                  <div className={styles.accentYellow}></div>
                  <div className={styles.accentOrange}></div>
                  <div className={styles.accentDarkOrange}></div>
                  <div className={styles.accentErrorRed}></div>
                </div>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Gradient Examples</h3>
            <div className={styles.gradientGrid}>
              <div className={styles.gradientCard}>
                <div className={styles.gradientSwatch1}></div>
                <p>Green to Dark</p>
              </div>
              <div className={styles.gradientCard}>
                <div className={styles.gradientSwatch2}></div>
                <p>Orange to Yellow</p>
              </div>
              <div className={styles.gradientCard}>
                <div className={styles.gradientSwatch3}></div>
                <p>Radial Yellow</p>
              </div>
              <div className={styles.gradientCard}>
                <div className={styles.gradientSwatch4}></div>
                <p>Angular Orange</p>
              </div>
            </div>
          </section>
        )}

        {/* Typography Section */}
        {activeTab === "typography" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Typography</h2>
            <p className={styles.sectionDescription}>
              The typographic system uses Helvetica for a clean, modernist
              aesthetic that balances the geometric visual elements.
            </p>

            <div className={styles.typographyControlsWrapper}>
              <div className={styles.typographyControls}>
                <h3>Type Scale</h3>
                <div className={styles.typeScaleDemo}>
                  <div className={styles.typeScale1}>.75rem (12px)</div>
                  <div className={styles.typeScale2}>.875rem (14px)</div>
                  <div className={styles.typeScale3}>1rem (16px)</div>
                  <div className={styles.typeScale4}>1.25rem (20px)</div>
                  <div className={styles.typeScale5}>1.5rem (24px)</div>
                  <div className={styles.typeScale6}>2rem (32px)</div>
                  <div className={styles.typeScale7}>2.5rem (40px)</div>
                  <div className={styles.typeScale8}>3rem (48px)</div>
                  <div className={styles.typeScale9}>5rem (80px)</div>
                </div>
              </div>
            </div>

            <div className={styles.typographySamples}>
              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Title Main</h3>
                <div className={styles.titleMainSample}>
                  A SHARING OF SCULPTURE
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 500</p>
                  <p>Size: 1.25rem</p>
                  <p>Text Transform: Uppercase</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Title Sub</h3>
                <div className={styles.titleSubSample}>
                  BY BILL MAYER / FALL, WINTER & SPRING 1983-84
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 500</p>
                  <p>Size: 0.8rem</p>
                  <p>Opacity: 0.8</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Section Title</h3>
                <div className={styles.sectionTitleSample}>The Exhibition</div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 500</p>
                  <p>Size: 2rem</p>
                  <p>Color: Yellow</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Subsection Title</h3>
                <div className={styles.subsectionTitleSample}>
                  EXHIBITION DETAILS
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 500</p>
                  <p>Size: 1.1rem</p>
                  <p>Text Transform: Uppercase</p>
                  <p>Letter Spacing: 0.05em</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Body Text</h3>
                <div className={styles.bodyTextSample}>
                  An extraordinary collection of sculptural works exploring the
                  relationship between form, function, and space.
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 400</p>
                  <p>Size: 1.1rem</p>
                  <p>Line Height: 1.6</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Featured Text</h3>
                <div className={styles.featuredTextSample}>Claude 3.7</div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 800</p>
                  <p>Size: 5rem</p>
                  <p>Text Transform: Uppercase</p>
                  <p>Letter Spacing: 0.08em</p>
                  <p>Text Shadow: 4px 4px 0 Orange</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Small Text</h3>
                <div className={styles.smallTextSample}>
                  Copyright information and small labels use this style for
                  secondary content.
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 400</p>
                  <p>Size: 0.8rem</p>
                  <p>Opacity: 0.7</p>
                </div>
              </div>

              <div className={styles.typographyItem}>
                <h3 className={styles.typographyTitle}>Label Text</h3>
                <div className={styles.labelTextSample}>
                  CURATOR • LOCATION • DATES
                </div>
                <div className={styles.typographyDetails}>
                  <p>Font: Helvetica</p>
                  <p>Weight: 500</p>
                  <p>Size: 0.9rem</p>
                  <p>Text Transform: Uppercase</p>
                  <p>Letter Spacing: 0.05em</p>
                  <p>Color: Orange</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Components Section */}
        {activeTab === "components" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Components</h2>
            <p className={styles.sectionDescription}>
              The component system emphasizes geometric structure with clean
              lines and bold visual elements.
            </p>

            <div className={styles.componentGrid}>
              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Header</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.headerPreview}>
                    <div className={styles.headerContentPreview}>
                      <div className={styles.titlePreview}>
                        <span className={styles.titleMainPreview}>TITLE</span>
                        <span className={styles.titleSubPreview}>SUBTITLE</span>
                      </div>
                      <div className={styles.logoPreview}>
                        <div className={styles.logoTextPreview}>Logo</div>
                        <div className={styles.logoLinePreview}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Main page header with title and logo elements.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Button</h3>
                <div className={styles.componentPreview}>
                  <button className={styles.buttonPreview}>Button Text</button>
                </div>
                <div className={styles.componentDescription}>
                  Standard bordered button with hover effect.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Detail List Item</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.detailListItemPreview}>
                    <span className={styles.detailLabelPreview}>Label:</span>
                    Value Text
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Used for displaying labeled information in lists.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Geometric Line</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.geometricLinePreview}>
                    <div className={styles.orangeLinePreview}></div>
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Animated line elements for visual interest.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Skyline Element</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.skylinePreview}></div>
                </div>
                <div className={styles.componentDescription}>
                  Top page decorative element with mountain-like silhouette.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Grid Background</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.gridBackgroundPreview}>
                    <div className={styles.horizontalLinePreview}></div>
                    <div className={styles.verticalLinePreview}></div>
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Subtle background grid for spatial context.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Text Element</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.textElementPreview}>TEXT</div>
                </div>
                <div className={styles.componentDescription}>
                  Featured text with shadow and animation effects.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Alert</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.alertPreview}>
                    This is an alert message
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Notification or alert component with emphasis.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Badge</h3>
                <div className={styles.componentPreview}>
                  <span className={styles.badgePreview}>New</span>
                </div>
                <div className={styles.componentDescription}>
                  Small label badge for status indicators.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Card</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.cardPreview}>
                    <div className={styles.cardHeaderPreview}>Card Title</div>
                    <div className={styles.cardBodyPreview}>
                      Card content goes here with information about the item.
                    </div>
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Container for grouped information with optional header.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Divider</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.dividerPreview}></div>
                </div>
                <div className={styles.componentDescription}>
                  Horizontal line to separate content sections.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Icon Button</h3>
                <div className={styles.componentPreview}>
                  <button className={styles.iconButtonPreview}>
                    <div className={styles.iconPlaceholder}></div>
                  </button>
                </div>
                <div className={styles.componentDescription}>
                  Circular button typically used for icons.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Modal</h3>
                <div className={styles.componentPreview}>
                  <button
                    className={styles.buttonPreview}
                    onClick={() => setModalOpen(true)}
                  >
                    Open Modal
                  </button>
                  {modalOpen && (
                    <div className={styles.modalOverlay}>
                      <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                          <h4>Modal Title</h4>
                          <button
                            className={styles.modalClose}
                            onClick={() => setModalOpen(false)}
                          >
                            ×
                          </button>
                        </div>
                        <div className={styles.modalBody}>
                          This is the modal content area.
                        </div>
                        <div className={styles.modalFooter}>
                          <button
                            className={styles.buttonSecondary}
                            onClick={() => setModalOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className={styles.buttonPrimary}
                            onClick={() => setModalOpen(false)}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.componentDescription}>
                  Overlay dialog for focused interactions.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Tooltip</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.tooltipContainer}>
                    <button
                      className={styles.buttonPreview}
                      onMouseEnter={() => setTooltipVisible(true)}
                      onMouseLeave={() => setTooltipVisible(false)}
                    >
                      Hover me
                    </button>
                    {tooltipVisible && (
                      <div className={styles.tooltip}>
                        This is a tooltip that provides additional information
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Information popup that appears on hover.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Progress Bar</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={styles.progressBar}
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Visual indicator of progress.
                </div>
              </div>

              <div className={styles.componentCard}>
                <h3 className={styles.componentTitle}>Accordion</h3>
                <div className={styles.componentPreview}>
                  <div className={styles.accordionContainer}>
                    <div
                      className={styles.accordionHeader}
                      onClick={() => setAccordionOpen(!accordionOpen)}
                    >
                      <span>Accordion Title</span>
                      <span
                        className={
                          accordionOpen ? styles.arrowUp : styles.arrowDown
                        }
                      ></span>
                    </div>
                    {accordionOpen && (
                      <div className={styles.accordionContent}>
                        Accordion content that can be expanded and collapsed.
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.componentDescription}>
                  Collapsible content section.
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Layouts Section - Existing content unchanged */}
        {activeTab === "layouts" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Layouts</h2>
            <p className={styles.sectionDescription}>
              Layout structures that define the spatial organization of the
              application.
            </p>

            <div className={styles.layoutsGrid}>
              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Page Layout</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.pageLayoutPreview}>
                    <div className={styles.pageLayoutHeader}></div>
                    <div className={styles.pageLayoutMain}></div>
                    <div className={styles.pageLayoutFooter}></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Basic page structure with header, main content, and footer.
                </div>
              </div>

              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Grid Container</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.gridContainerPreview}>
                    <div
                      className={styles.gridItemPreview}
                      style={{ top: "20%", left: "30%" }}
                    ></div>
                    <div
                      className={styles.gridItemPreview}
                      style={{ top: "50%", left: "60%" }}
                    ></div>
                    <div
                      className={styles.gridItemPreview}
                      style={{ top: "70%", left: "20%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Central positioning grid for content elements.
                </div>
              </div>

              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Details Grid</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.detailsGridPreview}>
                    <div className={styles.detailColumnPreview}></div>
                    <div className={styles.detailColumnPreview}></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Two-column grid for presenting detailed information.
                </div>
              </div>

              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Content Section</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.contentSectionPreview}>
                    <div className={styles.contentSectionTitlePreview}></div>
                    <div className={styles.contentSectionBodyPreview}></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Standard content section with title and body.
                </div>
              </div>

              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Split Layout</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.splitLayoutPreview}>
                    <div className={styles.splitColumnLeftPreview}></div>
                    <div className={styles.splitColumnRightPreview}></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Split screen layout for visual content and text.
                </div>
              </div>

              <div className={styles.layoutCard}>
                <h3 className={styles.layoutTitle}>Cards Grid</h3>
                <div className={styles.layoutPreview}>
                  <div className={styles.cardsGridPreview}>
                    <div className={styles.miniCardPreview}></div>
                    <div className={styles.miniCardPreview}></div>
                    <div className={styles.miniCardPreview}></div>
                    <div className={styles.miniCardPreview}></div>
                  </div>
                </div>
                <div className={styles.layoutDescription}>
                  Responsive grid for displaying card items.
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Animations Section - Existing content unchanged */}
        {activeTab === "animations" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Animations</h2>
            <p className={styles.sectionDescription}>
              Dynamic motion elements that enhance the user experience.
            </p>

            <div className={styles.animationsGrid}>
              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Text Reveal</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.textRevealDemo}>Text</div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: textReveal</p>
                  <p>Duration: 1s</p>
                  <p>
                    Timing Function: cubic-bezier(0.23, 1, 0.32, 1)
                    (transition-ease)
                  </p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Draw Line</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.drawLineDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: drawLine</p>
                  <p>Duration: 1.8s</p>
                  <p>
                    Timing Function: cubic-bezier(0.23, 1, 0.32, 1)
                    (transition-ease)
                  </p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Fade In</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.fadeInDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: fadeIn</p>
                  <p>Duration: 1.5s</p>
                  <p>
                    Timing Function: cubic-bezier(0.23, 1, 0.32, 1)
                    (transition-ease)
                  </p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Float Line</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.floatLineDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: floatLine</p>
                  <p>Duration: 8s</p>
                  <p>Iteration: Infinite</p>
                  <p>
                    Timing Function: cubic-bezier(0.23, 1, 0.32, 1)
                    (transition-ease)
                  </p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Glow Pulse</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.glowPulseDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: glowPulse</p>
                  <p>Duration: 3s</p>
                  <p>Iteration: Infinite</p>
                  <p>Timing Function: ease-in-out</p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Geometric Rotation</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.rotateDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: geometricRotate</p>
                  <p>Duration: 10s</p>
                  <p>Iteration: Infinite</p>
                  <p>Timing Function: linear</p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Bounce Effect</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.bounceDemo}></div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: bounce</p>
                  <p>Duration: 2s</p>
                  <p>Iteration: Infinite</p>
                  <p>Timing Function: ease-in-out</p>
                </div>
              </div>

              <div className={styles.animationCard}>
                <h3 className={styles.animationTitle}>Type Writer</h3>
                <div className={styles.animationPreview}>
                  <div className={styles.typeWriterDemo}>Geometric Design</div>
                </div>
                <div className={styles.animationDescription}>
                  <p>Animation: typeWriter</p>
                  <p>Duration: 3s</p>
                  <p>Timing Function: steps(14, end)</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* New Patterns Section */}
        {activeTab === "patterns" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Design Patterns</h2>
            <p className={styles.sectionDescription}>
              Common design patterns and usage guidelines for consistent user
              experiences.
            </p>

            <h3 className={styles.subsectionTitle}>Navigation Patterns</h3>
            <div className={styles.patternsGrid}>
              <div className={styles.patternCard}>
                <h3 className={styles.patternTitle}>Primary Navigation</h3>
                <div className={styles.patternPreview}>
                  <div className={styles.primaryNavPreview}>
                    <div className={styles.navItemPreview}>Home</div>
                    <div
                      className={`${styles.navItemPreview} ${styles.activeNavItemPreview}`}
                    >
                      Exhibitions
                    </div>
                    <div className={styles.navItemPreview}>About</div>
                    <div className={styles.navItemPreview}>Contact</div>
                  </div>
                </div>
                <div className={styles.patternDescription}>
                  <p>Main navigation pattern with highlighted active state.</p>
                  <p>Use for top-level navigation elements.</p>
                </div>
              </div>

              <div className={styles.patternCard}>
                <h3 className={styles.patternTitle}>Breadcrumbs</h3>
                <div className={styles.patternPreview}>
                  <div className={styles.breadcrumbsPreview}>
                    <span>Home</span>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>Exhibitions</span>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span className={styles.breadcrumbActive}>Bill Mayer</span>
                  </div>
                </div>
                <div className={styles.patternDescription}>
                  <p>Hierarchical navigation trail.</p>
                  <p>
                    Use to show user's current location within the site
                    structure.
                  </p>
                </div>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Content Patterns</h3>
            <div className={styles.patternsGrid}>
              <div className={styles.patternCard}>
                <h3 className={styles.patternTitle}>Exhibition Card</h3>
                <div className={styles.patternPreview}>
                  <div className={styles.exhibitionCardPreview}>
                    <div className={styles.exhibitionImagePreview}></div>
                    <div className={styles.exhibitionInfoPreview}>
                      <div className={styles.exhibitionTitlePreview}></div>
                      <div className={styles.exhibitionDatePreview}></div>
                      <div
                        className={styles.exhibitionDescriptionPreview}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className={styles.patternDescription}>
                  <p>Card pattern for displaying exhibition information.</p>
                  <p>Use within grid layouts for exhibition listings.</p>
                </div>
              </div>

              <div className={styles.patternCard}>
                <h3 className={styles.patternTitle}>Detail List</h3>
                <div className={styles.patternPreview}>
                  <div className={styles.detailListPreview}>
                    <div className={styles.detailItemPreview}>
                      <span className={styles.detailKeyPreview}></span>
                      <span className={styles.detailValuePreview}></span>
                    </div>
                    <div className={styles.detailItemPreview}>
                      <span className={styles.detailKeyPreview}></span>
                      <span className={styles.detailValuePreview}></span>
                    </div>
                    <div className={styles.detailItemPreview}>
                      <span className={styles.detailKeyPreview}></span>
                      <span className={styles.detailValuePreview}></span>
                    </div>
                  </div>
                </div>
                <div className={styles.patternDescription}>
                  <p>Structured key-value pattern for information display.</p>
                  <p>Use for presenting structured data with labels.</p>
                </div>
              </div>

              <div className={styles.patternCard}>
                <h3 className={styles.patternTitle}>Feature Highlight</h3>
                <div className={styles.patternPreview}>
                  <div className={styles.featureHighlightPreview}>
                    <div className={styles.featureHighlightTextPreview}></div>
                    <div className={styles.featureHighlightLinePreview}></div>
                  </div>
                </div>
                <div className={styles.patternDescription}>
                  <p>Highlighted text elements with geometric accents.</p>
                  <p>Use to draw attention to key phrases or concepts.</p>
                </div>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Geometric Patterns</h3>
            <div className={styles.geometricPatternsGrid}>
              <div className={styles.geometricPattern1}></div>
              <div className={styles.geometricPattern2}></div>
              <div className={styles.geometricPattern3}></div>
              <div className={styles.geometricPattern4}></div>
            </div>
          </section>
        )}

        {/* New Forms Section */}
        {activeTab === "forms" && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Form Elements</h2>
            <p className={styles.sectionDescription}>
              Input elements and form controls designed with the geometric
              aesthetic.
            </p>

            <div className={styles.formElementsGrid}>
              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Text Input</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Input Label</label>
                    <input
                      type="text"
                      className={styles.textInput}
                      placeholder="Enter text..."
                    />
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Standard text input with label.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Search Input</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.searchContainer}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="Search..."
                    />
                    <button className={styles.searchButton}>
                      <div className={styles.searchIcon}></div>
                    </button>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Search input with integrated search button.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Textarea</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Message</label>
                    <textarea
                      className={styles.textarea}
                      placeholder="Enter your message..."
                      rows={4}
                    ></textarea>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Multi-line text input for longer content.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Radio Button</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.radioContainer}>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="option1"
                        name="radioGroup"
                        checked={selectedRadio === "option1"}
                        onChange={() => setSelectedRadio("option1")}
                        className={styles.radioInput}
                      />
                      <label htmlFor="option1" className={styles.radioLabel}>
                        Option 1
                      </label>
                    </div>
                    <div className={styles.radioOption}>
                      <input
                        type="radio"
                        id="option2"
                        name="radioGroup"
                        checked={selectedRadio === "option2"}
                        onChange={() => setSelectedRadio("option2")}
                        className={styles.radioInput}
                      />
                      <label htmlFor="option2" className={styles.radioLabel}>
                        Option 2
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Radio button group for single selection.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Checkbox</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.checkboxContainer}>
                    <div className={styles.checkboxOption}>
                      <input
                        type="checkbox"
                        id="checkbox1"
                        className={styles.checkboxInput}
                      />
                      <label
                        htmlFor="checkbox1"
                        className={styles.checkboxLabel}
                      >
                        Option A
                      </label>
                    </div>
                    <div className={styles.checkboxOption}>
                      <input
                        type="checkbox"
                        id="checkbox2"
                        className={styles.checkboxInput}
                      />
                      <label
                        htmlFor="checkbox2"
                        className={styles.checkboxLabel}
                      >
                        Option B
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Checkbox inputs for multiple selection.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Select Dropdown</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>Select Option</label>
                    <select className={styles.selectInput}>
                      <option value="" disabled selected>
                        Choose an option...
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Dropdown select with custom styling.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Range Slider</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.inputContainer}>
                    <label className={styles.inputLabel}>
                      Range: {rangeValue}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={rangeValue}
                      onChange={(e) => setRangeValue(parseInt(e.target.value))}
                      className={styles.rangeInput}
                    />
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Range slider for numeric value selection.</p>
                </div>
              </div>

              <div className={styles.formElementCard}>
                <h3 className={styles.formElementTitle}>Form Group</h3>
                <div className={styles.formElementPreview}>
                  <div className={styles.formGroup}>
                    <div className={styles.formGroupHeader}>
                      Contact Information
                    </div>
                    <div className={styles.formGroupBody}>
                      <div className={styles.inputContainer}>
                        <input
                          type="text"
                          className={styles.textInput}
                          placeholder="Full Name"
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <input
                          type="email"
                          className={styles.textInput}
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.formElementDescription}>
                  <p>Grouped form elements with header.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link to="/" className={styles.backButton}>
            Return to Main Site
          </Link>
          <div className={styles.copyright}>
            Geometric Structure Design System © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignSystem;
