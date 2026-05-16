import { useRef, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import InsightLoader from "../InsightLoader";
import FetchErrorCard from "../FetchErrorCard";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const MIN_LOADER_VISIBLE_MS = 3000;
const SUCCESS_PHASE_MS = 800;

const PdfViewer = ({ pdfUrl }) => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [phase, setPhase] = useState("loading"); // loading | success | ready | error
  const [hasError, setHasError] = useState(false);
  const loadStartedAtRef = useRef(0);
  const successTimerRef = useRef(null);
  const readyTimerRef = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setHasError(false);
        setPhase("loading");
        loadStartedAtRef.current = Date.now();

        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const blob = await response.blob();

        const base64data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = () => reject(new Error("FileReader error"));
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });

        setPdfData(base64data);

        if (successTimerRef.current) {
          window.clearTimeout(successTimerRef.current);
        }
        if (readyTimerRef.current) {
          window.clearTimeout(readyTimerRef.current);
        }

        const elapsedMs = Date.now() - loadStartedAtRef.current;
        const remainingLoaderMs = Math.max(0, MIN_LOADER_VISIBLE_MS - elapsedMs);

        successTimerRef.current = window.setTimeout(() => {
          setPhase("success");
          readyTimerRef.current = window.setTimeout(() => setPhase("ready"), SUCCESS_PHASE_MS);
        }, remainingLoaderMs);
      } catch (error) {
        console.error("Error fetching the PDF:", error);
        setHasError(true);
        setPhase("error");
      }
    };

    loadPdf();

    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
      if (readyTimerRef.current) {
        window.clearTimeout(readyTimerRef.current);
      }
    };
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      {hasError ? (
        <FetchErrorCard
          title="Could not fetch the resume PDF."
          message="The document endpoint is unavailable right now. You can still open the resume directly."
          href={pdfUrl}
          hrefLabel="Open resume PDF"
        />
      ) : phase !== "ready" ? (
        <InsightLoader phase={phase === "success" ? "success" : "loading"} label="Fetching resume" />
      ) : (
        pdfData && (
          <>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>

            <Row className="resume">
              <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={width > 786 ? 1.5 : 0.6}
                  />
                ))}
              </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </>
        )
      )}
    </Container>
  );
};

export default PdfViewer;
