"use client";

import React from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Box } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import disableScrollPlugin from "./disableScrollPlugin";

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const disableScrollPluginInstance = disableScrollPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Box pos="relative">
        <Box pos="absolute" top="50%" left={0} className="z-10">
          <GoToPreviousPage>
            {(props: RenderGoToPageProps) => (
              <IconChevronLeft
                className="hover:cursor-pointer"
                onClick={props.onClick}
              />
            )}
          </GoToPreviousPage>
        </Box>
        <Box pos="absolute" top="50%" right={0} className="z-10">
          <GoToNextPage>
            {(props: RenderGoToPageProps) => (
              <IconChevronRight
                className="hover:cursor-pointer"
                onClick={props.onClick}
              />
            )}
          </GoToNextPage>
        </Box>
        <Box h="80vh">
          <Viewer
            plugins={[
              disableScrollPluginInstance,
              pageNavigationPluginInstance,
            ]}
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageFit}
          />
        </Box>
      </Box>
    </Worker>
  );
};

export default PDFViewer;
