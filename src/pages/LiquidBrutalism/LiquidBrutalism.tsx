import { Link } from "react-router-dom";
import styles from "./LiquidBrutalism.module.css";

const LiquidBrutalism = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>LIQUID BRUTALISM</h1>
          <p className={styles.headerDescription}>
            Raw structural elements meet fluid organic shapes
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.heroSection}>
            <div className={styles.brutalistBlock}>
              <div className={styles.blockTitle}>
                <span className={styles.rigidText}>RIGID</span>
                <span className={styles.meetsText}>MEETS</span>
                <span className={styles.fluidText}>FLUID</span>
              </div>
            </div>

            <div className={styles.liquidShape}>
              <div className={styles.blob}></div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoTextContainer}>
              <div className={styles.infoTitle}>STRUCTURAL FLUIDITY</div>
              <div className={styles.infoText}>
                <p>
                  Liquid Brutalism combines the raw, honest materiality of
                  traditional brutalism with organic, flowing forms that
                  contradict its typically rigid geometry.
                </p>
                <p>
                  This hybrid approach creates tension between the structured
                  grid systems of modernist design and the unpredictable
                  behavior of liquid elements, resulting in compositions that
                  feel simultaneously engineered and alive.
                </p>
              </div>
            </div>

            <div className={styles.principlesGrid}>
              <div className={styles.principle}>
                <div className={styles.principleBox}>
                  <div className={styles.principleTitle}>RAW</div>
                </div>
                <div className={styles.principleDescription}>
                  Embracing unfiltered materials and honest expression
                </div>
              </div>

              <div className={styles.principle}>
                <div className={styles.principleBox}>
                  <div className={styles.principleTitle}>FLUID</div>
                </div>
                <div className={styles.principleDescription}>
                  Incorporating organic movement and liquid behavior
                </div>
              </div>

              <div className={styles.principle}>
                <div className={styles.principleBox}>
                  <div className={styles.principleTitle}>CONTRAST</div>
                </div>
                <div className={styles.principleDescription}>
                  Juxtaposing geometric structure with amorphous shapes
                </div>
              </div>

              <div className={styles.principle}>
                <div className={styles.principleBox}>
                  <div className={styles.principleTitle}>TENSION</div>
                </div>
                <div className={styles.principleDescription}>
                  Creating dynamic energy through opposing forces
                </div>
              </div>
            </div>
          </div>

          <div className={styles.showcaseSection}>
            <div className={styles.showcaseHeading}>
              <div className={styles.headingLine}></div>
              <h2>TYPOGRAPHIC EXPLORATIONS</h2>
              <div className={styles.headingLine}></div>
            </div>

            <div className={styles.typographyBlock}>
              <div className={styles.typographyRow}>
                <div className={styles.letterBlock}>B</div>
                <div className={styles.letterBlock}>R</div>
                <div className={styles.letterBlock}>U</div>
                <div className={styles.letterBlock}>T</div>
                <div className={styles.letterBlock}>A</div>
                <div className={styles.letterBlock}>L</div>
              </div>

              <div className={styles.typographyRow}>
                <div className={styles.letterBlock}>F</div>
                <div className={styles.letterBlock}>L</div>
                <div className={styles.letterBlock}>U</div>
                <div className={styles.letterBlock}>I</div>
                <div className={styles.letterBlock}>D</div>
                <div className={styles.letterBlock}>I</div>
                <div className={styles.letterBlock}>T</div>
                <div className={styles.letterBlock}>Y</div>
              </div>
            </div>

            <div className={styles.quote}>
              <blockquote>
                "The contradiction between rigid structure and organic flow
                creates a new visual language that challenges our perception of
                digital materiality."
              </blockquote>
            </div>
          </div>

          <div className={styles.elementsSection}>
            <div className={styles.elementGrid}>
              <div className={styles.element}>
                <div className={styles.elementTitle}>CONCRETE FORMS</div>
                <div className={styles.elementContent}>
                  <div className={styles.concreteBox}></div>
                  <p>
                    Solid, heavy elements that provide structural foundation and
                    create a sense of permanence and stability.
                  </p>
                </div>
              </div>

              <div className={styles.element}>
                <div className={styles.elementTitle}>LIQUID MOVEMENTS</div>
                <div className={styles.elementContent}>
                  <div className={styles.liquidContainer}>
                    <div className={styles.liquidDrop}></div>
                    <div className={styles.liquidDrop}></div>
                    <div className={styles.liquidDrop}></div>
                  </div>
                  <p>
                    Flowing, organic shapes that introduce unpredictability and
                    soften the harsh edges of brutalist elements.
                  </p>
                </div>
              </div>

              <div className={styles.element}>
                <div className={styles.elementTitle}>TEXTURAL CONTRAST</div>
                <div className={styles.elementContent}>
                  <div className={styles.textureBox}>
                    <div className={styles.roughTexture}></div>
                    <div className={styles.smoothTexture}></div>
                  </div>
                  <p>
                    Juxtaposition of rough and smooth surfaces creates tactile
                    tension and visual interest.
                  </p>
                </div>
              </div>

              <div className={styles.element}>
                <div className={styles.elementTitle}>COLOR INTERACTION</div>
                <div className={styles.elementContent}>
                  <div className={styles.colorBox}>
                    <div className={styles.colorSwatch}></div>
                    <div className={styles.colorSwatch}></div>
                    <div className={styles.colorSwatch}></div>
                  </div>
                  <p>
                    Limited, stark palette with occasional fluid color
                    transitions that emphasize the structural-organic interplay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.interactiveSection}>
            <div className={styles.interactionContainer}>
              <div className={styles.structuralGrid}>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
                <div className={styles.gridBlock}></div>
              </div>

              <div className={styles.fluidOverlay}>
                <div className={styles.fluidShape}></div>
              </div>
            </div>

            <div className={styles.interactionText}>
              <div className={styles.interactionTitle}>STRUCTURE VS CHAOS</div>
              <p>
                The most compelling aspect of Liquid Brutalism is the dynamic
                tension created when rigidly structured elements interact with
                unpredictable fluid forms. This creates visual moments where
                order appears to dissolve into chaos, only to re-emerge in a new
                configuration.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLabel}>
            EXPLORE MORE TYPOGRAPHY EXPERIMENTS
          </div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.linkButton}>
              RETURN TO COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidBrutalism;
