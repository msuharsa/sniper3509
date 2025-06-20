import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Seputar SE2026" subtitle="Pertanyaan dan Informasi" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Apa itu Sensus Ekonomi
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br>Sensus Ekonomi (SE) adalah kegiatan pendataan yang dilakukan secara menyeluruh 
            terhadap seluruh pelaku usaha di Indonesia, baik yang berbadan hukum maupun tidak, 
            dengan tujuan untuk memperoleh data dasar seluruh kegiatan ekonomi nonpertanian.
            </br>

            <br>SE merupakan salah satu program statistik nasional yang dilaksanakan 
            setiap 10 tahun sekali (tahun berakhiran "6", seperti 2006, 2016, dan 2026), dan 
            bertujuan untuk:
            </br>
            <br>• Menyediakan gambaran lengkap struktur ekonomi Indonesia di luar sektor pertanian;</br>
            <br>• Menyediakan informasi dasar yang komprehensif sebagai landasan perumusan kebijakan 
            dan perencanaan pembangunan, baik nasional maupun daerah;</br>
            <br>• Menyusun kerangka sampel untuk survei ekonomi lanjutan.</br>

            <br>Ruang Lingkup SE mencakup seluruh kegiatan usaha di sektor:</br>
            <br>• Perdagangan</br>
            <br>• Jasa</br>
            <br>• Industri pengolahan</br>
            <br>• Konstruksi</br>
            <br>• Transportasi</br>
            <br>• Akomodasi</br>
            <br>• Keuangan,</br> 
            <br>• Real estat, dan sektor lain di luar pertanian.</br>

            <br>Tidak mencakup sektor pertanian, karena sektor ini dicakup dalam Sensus Pertanian (ST).</br>

            <br>Contoh Tujuan Praktis SE:</br>
            <br>• Mengetahui jumlah, sebaran, dan karakteristik usaha mikro, kecil, menengah, hingga besar.</br>
            <br>• Menyediakan data untuk perhitungan Produk Domestik Bruto (PDB)) regional.</br>
            <br>• Mendukung kebijakan pemberdayaan UMKM.</br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Kapan SE2026 dilaksanakan
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Apa itu pendataan sentra ekonomi
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Apa itu profilling matchapro
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Apa itu wilkerstat
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
