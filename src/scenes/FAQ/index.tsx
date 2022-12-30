import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"



export function FAQ() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequenly Asked Questinons Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Importan Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas aspernatur provident iste recusandae eaque tempore excepturi facilis, error eligendi. Incidunt aliquid est at maxime rem totam saepe accusantium voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Inportant Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas aspernatur provident iste recusandae eaque tempore excepturi facilis, error eligendi. Incidunt aliquid est at maxime rem totam saepe accusantium voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Yout Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas aspernatur provident iste recusandae eaque tempore excepturi facilis, error eligendi. Incidunt aliquid est at maxime rem totam saepe accusantium voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas aspernatur provident iste recusandae eaque tempore excepturi facilis, error eligendi. Incidunt aliquid est at maxime rem totam saepe accusantium voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            the Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas aspernatur provident iste recusandae eaque tempore excepturi facilis, error eligendi. Incidunt aliquid est at maxime rem totam saepe accusantium voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}