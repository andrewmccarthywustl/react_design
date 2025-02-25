import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./AnalogGlitch.module.css";

const AnalogGlitch = () => {
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Create the noise effect for the background
    const canvas = noiseCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let requestId: number;

    const drawNoise = () => {
      // Create TV static noise
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        const intensity = Math.random() > 0.85 ? noise : noise * 0.2;

        data[i] = intensity; // R
        data[i + 1] = intensity; // G
        data[i + 2] = intensity; // B
        data[i + 3] = 15; // Alpha (transparency)
      }

      ctx.putImageData(imageData, 0, 0);
      requestId = requestAnimationFrame(drawNoise);
    };

    drawNoise();

    // Clean up
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className={styles.page}>
      <canvas ref={noiseCanvasRef} className={styles.noiseCanvas}></canvas>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerVHS}>VHS·REC</div>

          <div className={styles.headerTitle}>
            <h1>ANALOG GLITCH</h1>
            <div className={styles.headerDescription}>
              The aesthetic of broken media and imperfect technologies
            </div>
          </div>

          <div className={styles.headerTimecode}>00:23:47:18</div>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.tvFrame}>
              <div className={styles.tvScreen}>
                <div className={styles.glitchImage}></div>
                <div className={styles.scanlines}></div>
                <div className={styles.vignette}></div>
                <div className={styles.flicker}></div>
              </div>
              <div className={styles.reflection}></div>
            </div>

            <div className={styles.glitchHeadline}>
              <div className={styles.glitchText} data-text="ERROR IS HUMAN">
                ERROR IS HUMAN
              </div>
            </div>

            <div className={styles.tapeLabel}>
              <div className={styles.tapeTitle}>DAMAGED MEDIA VOL.3</div>
              <div className={styles.tapeDetails}>
                <div className={styles.tapeDetail}>SP MODE</div>
                <div className={styles.tapeDetail}>120 MIN</div>
                <div className={styles.tapeDetail}>HI-FI STEREO</div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.analogText}>
              <p className={styles.textDistort}>
                The analog glitch aesthetic celebrates the beauty in broken
                media: VHS artifacts, signal interference, corrupted data, and
                the physical degradation of analog technologies.
              </p>

              <p className={styles.textDistort}>
                Unlike digital precision, analog errors contain a certain
                warmth, a human quality that speaks to imperfection and
                authenticity in an increasingly perfect digital world.
              </p>

              <div className={styles.distortionList}>
                <div className={styles.distortionItem}>
                  <h3>SIGNAL LOSS</h3>
                  <p>
                    Deterioration of electromagnetic signals creates
                    unpredictable visual artifacts
                  </p>
                </div>

                <div className={styles.distortionItem}>
                  <h3>TRACKING ERRORS</h3>
                  <p>
                    Misalignment of magnetic particles on VHS tape produces
                    characteristic horizontal distortion
                  </p>
                </div>

                <div className={styles.distortionItem}>
                  <h3>MAGNETIC INTERFERENCE</h3>
                  <p>
                    External fields corrupt stored information creating
                    beautiful noise patterns
                  </p>
                </div>

                <div className={styles.distortionItem}>
                  <h3>PHYSICAL DEGRADATION</h3>
                  <p>
                    Worn tape, dust, and scratches add texture and character to
                    playback
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.tuningGrid}>
              <div className={styles.tuningSection}>
                <h3>COLOR LEVELS</h3>
                <div className={styles.knobs}>
                  <div className={styles.knob}>
                    <div className={styles.knobInner}>R</div>
                  </div>
                  <div className={styles.knob}>
                    <div className={styles.knobInner}>G</div>
                  </div>
                  <div className={styles.knob}>
                    <div className={styles.knobInner}>B</div>
                  </div>
                </div>
              </div>

              <div className={styles.tuningSection}>
                <h3>DISTORTION</h3>
                <div className={styles.sliders}>
                  <div className={styles.slider}>
                    <div className={styles.sliderTrack}>
                      <div
                        className={styles.sliderHandle}
                        style={{ left: "65%" }}
                      ></div>
                    </div>
                    <div className={styles.sliderLabel}>NOISE</div>
                  </div>
                  <div className={styles.slider}>
                    <div className={styles.sliderTrack}>
                      <div
                        className={styles.sliderHandle}
                        style={{ left: "40%" }}
                      ></div>
                    </div>
                    <div className={styles.sliderLabel}>JITTER</div>
                  </div>
                  <div className={styles.slider}>
                    <div className={styles.sliderTrack}>
                      <div
                        className={styles.sliderHandle}
                        style={{ left: "80%" }}
                      ></div>
                    </div>
                    <div className={styles.sliderLabel}>ARTIFACTS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.generationLoss}>
              <div className={styles.lossLabel}>GENERATIONAL LOSS:</div>
              <div className={styles.lossProgress}>
                <div className={styles.lossBar}>
                  <div className={styles.lossComplete}></div>
                </div>
                <div className={styles.lossText}>GEN 4 DUPLICATE</div>
              </div>
            </div>

            <div className={styles.trackerBox}>
              <div className={styles.trackerLine}>TRACKING ADJUSTMENT</div>
              <div className={styles.trackerButtons}>
                <button className={styles.trackerButton}>-</button>
                <button className={styles.trackerButton}>AUTO</button>
                <button className={styles.trackerButton}>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.rewindSection}>
            <div className={styles.rewindIndicator}>&#9664;&#9664; REWIND</div>
            <div className={styles.counterPosition}>
              <span className={styles.digitBox}>0</span>
              <span className={styles.digitBox}>0</span>
              <span className={styles.digitBox}>3</span>
              <span className={styles.digitBox}>7</span>
            </div>
          </div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.linkButton}>
              <span>EJECT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogGlitch;
