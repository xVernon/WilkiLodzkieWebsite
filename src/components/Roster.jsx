import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./AppBar";
import SimpleContainer from "./Container";
import SocialsLinks from "./SocialsLinks";
import StickyHeadTable from "./StickyHeadTable";
import Divider from '@mui/material/Divider';

function Roster() {
  return (
    <div>
      <SocialsLinks />
      <Container maxWidth="false" disableGutters="true">
        <div>
          <header>
            <ResponsiveAppBar />
          </header>
        </div>
        <div>
          <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Divider>CENTER</Divider>
              </Grid>
              <Grid item xs={12}>
                <StickyHeadTable />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Roster;
