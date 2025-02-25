import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import styles from "./DataMaximalism.module.css";

const DataMaximalism = () => {
  const dataContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate random data for the background
    const generateRandomData = () => {
      if (!dataContainerRef.current) return;

      const container = dataContainerRef.current;
      container.innerHTML = "";

      // Generate binary strings
      for (let i = 0; i < 50; i++) {
        const dataLine = document.createElement("div");
        dataLine.className = styles.dataLine;

        let binaryString = "";
        for (let j = 0; j < 120; j++) {
          binaryString += Math.random() > 0.5 ? "1" : "0";
        }

        dataLine.textContent = binaryString;

        // Random opacity
        dataLine.style.opacity = (0.1 + Math.random() * 0.4).toString();

        // Random animation delay
        dataLine.style.animationDelay = `${Math.random() * 10}s`;

        container.appendChild(dataLine);
      }
    };

    generateRandomData();

    // Regenerate data every 10 seconds
    const interval = setInterval(generateRandomData, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.dataBackground} ref={dataContainerRef}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerMetrics}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>3294</div>
              <div className={styles.metricLabel}>DATA POINTS</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>86%</div>
              <div className={styles.metricLabel}>EFFICIENCY</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>12.3M</div>
              <div className={styles.metricLabel}>OPERATIONS</div>
            </div>
          </div>

          <div className={styles.headerTitle}>
            <h1>DATA MAXIMALISM</h1>
            <p className={styles.headerDescription}>
              Information density pushed to the extreme with complex
              visualization systems
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebarLeft}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>SYSTEM METRICS</h3>
              <div className={styles.sidebarData}>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}>CPU LOAD</span>
                  <span className={styles.dataValue}>87.2%</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}>MEMORY</span>
                  <span className={styles.dataValue}>16.4GB</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}>NETWORK</span>
                  <span className={styles.dataValue}>2.3GB/s</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}>UPTIME</span>
                  <span className={styles.dataValue}>73.2d</span>
                </div>
                <div className={styles.dataRow}>
                  <span className={styles.dataLabel}>PROCESSES</span>
                  <span className={styles.dataValue}>284</span>
                </div>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>DATA SOURCES</h3>
              <ul className={styles.sourcesList}>
                <li className={styles.sourceItem}>FINANCIAL MARKETS</li>
                <li className={styles.sourceItem}>SOCIAL NETWORKS</li>
                <li className={styles.sourceItem}>IOT DEVICES</li>
                <li className={styles.sourceItem}>CLIMATE SENSORS</li>
                <li className={styles.sourceItem}>PUBLIC DATABASES</li>
                <li className={styles.sourceItem}>NETWORK TRAFFIC</li>
              </ul>
            </div>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.mainHeader}>
              <div className={styles.mainTitle}>
                INFORMATION OVERLOAD = POWER
              </div>
              <div className={styles.mainSubtitle}>
                EMBRACING COMPLEXITY AS A DESIGN PRINCIPLE
              </div>
            </div>

            <div className={styles.textBlock}>
              <p>
                Data Maximalism rejects the minimalist approach that dominates
                much of contemporary design. Instead, it embraces complexity,
                density, and the raw power of information in its visual form.
              </p>
              <p>
                This aesthetic draws from financial terminals, complex
                dashboards, network monitoring systems, scientific
                visualizations, and the dense information displays found in
                mission-critical environments.
              </p>
            </div>

            <div className={styles.chartsContainer}>
              <div className={styles.chart}>
                <div className={styles.chartTitle}>DATA DENSITY OVER TIME</div>
                <div className={styles.chartContent}>
                  <div className={styles.barChart}>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{ height: "30%" }}
                      ></div>
                      <div className={styles.barLabel}>2010</div>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{ height: "45%" }}
                      ></div>
                      <div className={styles.barLabel}>2015</div>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{ height: "65%" }}
                      ></div>
                      <div className={styles.barLabel}>2020</div>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{ height: "90%" }}
                      ></div>
                      <div className={styles.barLabel}>2025</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.chart}>
                <div className={styles.chartTitle}>INFORMATION PARSING</div>
                <div className={styles.chartContent}>
                  <div className={styles.circleChart}>
                    <div
                      className={styles.circle}
                      style={{
                        background:
                          "conic-gradient(#ff3c00 0% 65%, #333 65% 100%)",
                      }}
                    >
                      <div className={styles.circleInner}>65%</div>
                    </div>
                    <div className={styles.circleLabels}>
                      <div>PROCESSED</div>
                      <div>PENDING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.gridLayout}>
              <div className={styles.gridBox}>
                <h3>DATA VISUALIZATION</h3>
                <p>
                  Complex visual systems that render massive datasets
                  comprehensible without simplification.
                </p>
              </div>
              <div className={styles.gridBox}>
                <h3>INFORMATION HIERARCHY</h3>
                <p>
                  Multi-layered hierarchies allow for different levels of data
                  reading and interpretation.
                </p>
              </div>
              <div className={styles.gridBox}>
                <h3>DENSITY MAPPING</h3>
                <p>
                  Using every pixel as valuable real estate to communicate
                  multiple data points simultaneously.
                </p>
              </div>
              <div className={styles.gridBox}>
                <h3>PATTERN RECOGNITION</h3>
                <p>
                  Leveraging the human brain's capacity to identify patterns
                  within seemingly chaotic structures.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sidebarRight}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>ACTIVE PROCESSES</h3>
              <div className={styles.processList}>
                <div className={styles.process}>
                  <div className={styles.processName}>data_collection.exe</div>
                  <div className={styles.processBar}>
                    <div
                      className={styles.processProgress}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.process}>
                  <div className={styles.processName}>
                    visualization_engine.dll
                  </div>
                  <div className={styles.processBar}>
                    <div
                      className={styles.processProgress}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.process}>
                  <div className={styles.processName}>
                    statistical_analysis.sys
                  </div>
                  <div className={styles.processBar}>
                    <div
                      className={styles.processProgress}
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.process}>
                  <div className={styles.processName}>neural_network.ai</div>
                  <div className={styles.processBar}>
                    <div
                      className={styles.processProgress}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.process}>
                  <div className={styles.processName}>
                    pattern_detection.mod
                  </div>
                  <div className={styles.processBar}>
                    <div
                      className={styles.processProgress}
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>ALERTS</h3>
              <div className={styles.alertsList}>
                <div className={styles.alert}>
                  <div className={styles.alertIcon}></div>
                  <div className={styles.alertText}>
                    Error: Buffer overflow in data_collection.exe
                  </div>
                </div>
                <div className={styles.alert}>
                  <div className={styles.alertIcon}></div>
                  <div className={styles.alertText}>
                    Warning: CPU temperature exceeding optimal range
                  </div>
                </div>
                <div className={styles.alert}>
                  <div className={styles.alertIcon}></div>
                  <div className={styles.alertText}>
                    Notice: New data source connected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.statusBar}>
            <div className={styles.statusItem}>SYSTEM STATUS: OPERATIONAL</div>
            <div className={styles.statusItem}>LAST UPDATE: 12:43:21</div>
            <div className={styles.statusItem}>DATA STREAMS: 37 ACTIVE</div>
          </div>

          <div className={styles.backLink}>
            <Link to="/" className={styles.linkButton}>
              RETURN TO INDEX
              <span className={styles.blinker}>_</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataMaximalism;
