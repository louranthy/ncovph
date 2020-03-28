import React from "react";
import { Box, Paragraph } from "grommet";
import SectionTitle from "../components/SectionTitle";

export default function SyncingCaching(): JSX.Element {
  return (
    <Box>
      <SectionTitle title="Syncing and Caching" />
      <Paragraph>
        An updated copy of the data from ncovtracker is retrieved every <strong>5 minutes</strong>. Often, the press announcements come first; they update ncovtracker sometime after.
      </Paragraph>
      <Paragraph>
        The data is parsed and stored in cache for best performance and to not abuse API calls to ncovtracker (ArcGIS).
      </Paragraph>
    </Box>
  );
}
