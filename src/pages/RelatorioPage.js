import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { reportRequest } from "../store/actions/report";

const RelatorioPage = () => {
  const dispatch = useDispatch();
  const [pdfData, setPdfData] = useState(null);

  const reportResponse = useSelector((state) => state.report)?.report;

  console.log("reportResponse ", reportResponse);

  useEffect(() => {
    if (reportResponse && reportResponse.fileContents) {
      const base64 = reportResponse.fileContents;
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: reportResponse.contentType });
      const url = URL.createObjectURL(blob);
      setPdfData(url);
      console.log(url);
    }
  }, [reportResponse]);

  const generatePDF = () => {
    dispatch(reportRequest());
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Button onClick={generatePDF}>Emitir PDF</Button>
      {pdfData && (
        <div style={{ marginTop: "20px", height: "500px" }}>
          <iframe src={pdfData} width="100%" height="100%" title="PDF Viewer" />
        </div>
      )}
    </Container>
  );
};

export default RelatorioPage;
