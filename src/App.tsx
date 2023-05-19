import "./App.css";
import Header from "./components/layout/header";
import { Container, Grid } from "@mui/material";
import { SideBar } from "./components/layout/sideBar";

function App() {
  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          Content Page
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
