import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Loader from '../Loader/Loader';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPdf = async () => {
      // Check if PDF is in local storage
      const cachedPdf = localStorage.getItem('resume');
      if (cachedPdf) {
        // Load from local storage if cached
        setPdfData(cachedPdf);
        delayLoader();
      } else {
        // Fetch the PDF file
        const response = await fetch(pdfUrl);
        const blob = await response.blob();

        // Convert blob to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          setPdfData(base64data);

          // Store in local storage
          localStorage.setItem('resume', base64data);
          setLoading(false);
        };
      }
    };

    const delayLoader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loadPdf();
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };


  return (
    <div>

      {loading ? (
        <Loader />
      ) : (
        pdfData && (
          <Container fluid className="resume-section">
            <Particle />
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfUrl}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
  
            <Row className="resume">
              <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
              </Document>
            </Row>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdfUrl}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Container>
        )
        // <Loader />
      )}

    </div>
  );
};



export default PdfViewer;
