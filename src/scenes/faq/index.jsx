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
            Sensus Ekonomi (SE) adalah kegiatan pendataan yang dilakukan secara menyeluruh terhadap seluruh pelaku usaha di Indonesia, baik yang berbadan hukum maupun tidak, dengan tujuan untuk memperoleh data dasar seluruh kegiatan ekonomi nonpertanian.
            <br /><br />
            SE merupakan salah satu program statistik nasional yang dilaksanakan setiap 10 tahun sekali (tahun berakhiran "6", seperti 2006, 2016, dan 2026), dan bertujuan untuk:
            <ul>
              <li>Menyediakan gambaran lengkap struktur ekonomi Indonesia di luar sektor pertanian;</li>
              <li>Menyediakan informasi dasar yang komprehensif sebagai landasan perumusan kebijakan dan perencanaan pembangunan;</li>
              <li>Menyusun kerangka sampel untuk survei ekonomi lanjutan.</li>
            </ul>
            Ruang lingkup SE mencakup seluruh kegiatan usaha di sektor:
            <ul>
              <li>Perdagangan</li>
              <li>Jasa</li>
              <li>Industri pengolahan</li>
              <li>Konstruksi</li>
              <li>Transportasi</li>
              <li>Akomodasi</li>
              <li>Keuangan</li>
              <li>Real estat, dan sektor lain di luar pertanian.</li>
            </ul>
            Tidak mencakup sektor pertanian, karena sektor ini dicakup dalam Sensus Pertanian (ST).
            <br /><br />
            Contoh Tujuan Praktis SE:
            <ul>
              <li>Mengetahui jumlah, sebaran, dan karakteristik usaha mikro, kecil, menengah, hingga besar.</li>
              <li>Menyediakan data untuk perhitungan Produk Domestik Bruto (PDB) regional.</li>
              <li>Mendukung kebijakan pemberdayaan UMKM.</li>
            </ul>
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
            Sensus Ekonomi 2026 (SE2026) akan dilaksanakan dalam dua tahap utama, yaitu:
            <br /><br />
            Tahapan Pelaksanaan SE2026:
            <br /><br />
            1. Pendataan Lengkap (Listing) Usaha
            <ul>
              <li>Waktu pelaksanaan: Mei–Juni 2026</li>
              <li>Tujuan:</li>
              <ul>
                <li>Mencatat semua pelaku usaha, baik formal maupun informal, di seluruh Indonesia.</li>
                <li>Mengetahui lokasi dan keberadaan usaha secara menyeluruh.</li>
              </ul>
              <li>Hasil: Daftar lengkap unit usaha yang akan menjadi dasar untuk survei lanjutan.</li>
            </ul>
            <br /><br />
            2. Pencacahan Lengkap Usaha Menengah dan Besar (UMB)
            <ul>
              <li>Waktu pelaksanaan: Tahun 2027 (setelah tahap pertama selesai dan dianalisis)</li>
              <li>Tujuan:</li>
              <ul>
                <li>Mengumpulkan data rinci dari usaha menengah dan besar yang sudah terdaftar di tahap listing.</li>
                <li>Memberikan informasi statistik yang lebih dalam mengenai struktur dan kinerja ekonomi nasional.</li>
              </ul>
            </ul>

















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
