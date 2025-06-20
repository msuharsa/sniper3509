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
            Pendataan sentra ekonomi merupakan bagian dari upaya pendataan usaha menjelang Sensus Ekonomi 2026. Kegiatan ini difokuskan pada identifikasi usaha di pusat ekonomi lokal, seperti pasar tradisional, pertokoann, mall maupun pusat kegiatan ekonomi lainnya.
            <br /><br />
            Tujuan Utama:
            <ul>
              <li>Membangun daftar lengkap usaha di titik-titik ekonomi lokal sebelum sensus utama.</li>
              <li>Menyajikan peta dan karakteristik usaha di sentra ekonomi untuk keperluan perencanaan dan kebijakan ekonomi daerah</li>
              <li>Mempersiapkan kerangka sampling agar Sensus Ekonomi 2026 dapat dilakukan lebih efektif dan komprehensif.</li>
            </ul>
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
            Profiling MatchaPro adalah bagian dari proses profiling Statistical Business Register (SBR). 
            <br /><br />
            MatchaPro adalah singkatan dari Matching Assessment Profiling, sebuah aplikasi digital yang dikembangkan BPS untuk membantu proses pemutakhiran data usaha/perusahaan dalam SBR.
            <br /><br />
            Dengan menggunakan MatchaPro, petugas BPS dapat memperbarui berbagai informasi usaha seperti:
            <ul>
              <li>Status keberadaan,</li>
              <li>Nama, alamat, nomor telepon, email, dan</li>
              <li>Kategori usaha dan KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) serta lainnya</li>
            </ul>
            Tujuan profilling matchapro:
            <ul>
              <li>Menghadirkan kerangka sampel usaha terbaru dan akurat bagi survei ekonomi dan Sensus Ekonomi 2026.</li>
              <li>Memperbaiki akurasi dan kecepatan dalam pengumpulan data usaha dari desk-based profiling hingga verifikasi lapangan.</li>
              <li>Mengisi dan memperbaharui data dalam SBR, sehingga menjadi sumber utama untuk demografi bisnis dan perencanaan ekonomi.</li>
            </ul>
            Hubungan dengan SE2026:
            <ul>
              <li>MatchaPro digunakan untuk memperbarui SBR sebelum Sensus Ekonomi 2026 diselenggarakan, sehingga semua usaha tersusun dalam kerangka sampel yang tepat dan up‑to‑date,</li>
              <li>Data yang terkumpul akan menjadi dasar penting dalam tahap listing dan pencacahan unit usaha selama SE2026.</li>
            </ul>
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
            Wilkerstat adalah singkatan dari Kerangka Wilayah Kerja Statistik, yakni pembagian wilayah kerja petugas BPS yang mencakup area geospasial dan unit usaha yang akan dicatat selama SE2026.
            <br /><br />
            Updating Wilkerstat adalah proses penting untuk memperbarui:
            <ul>
              <li>Kerangka geospasial — peta batas wilayah kerja yang digunakan petugas di lapangan, termasuk geotagging lokasi usaha.</li>
              <li>Muatan Wilkerstat — daftar unit usaha (termasuk pedagang di pasar, sentra ekonomi) berdasarkan data terbaru.</li>
            </ul>
            Tahapan Pelaksanaan
            <ul>
              <li>Persiapan & Training</li>
              <ul>
                <li>Tingkat nasional dan provinsi diadakan pelatihan calon instruktur Wilkerstat (rekap Sejak Mei 2025).</li>
                <li>Peserta meliputi pengelola sistem informasi, teknisi geospasial, dan calon instruktur lapangan.</li>
              </ul>
              <li>Pengumpulan Data Lapangan</li>
              <ul>
                <li>Petugas menggali data geotagging, foto lokasi, serta karakteristik usaha menggunakan aplikasi Wilkerstat.</li>
                <li>Fokus pada unit usaha, sentra ekonomi, pasar, dan infrastruktur terkait.</li>
              </ul>
              <li>Pemutakhiran Data dan Pengolahan</li>
              <ul>
                <li>Data dikoleksi dari semua wilayah, kemudian diproses secara desk-based di tingkat kabupaten/provinsi.</li>
                <li>Pengecekan dan sinkronisasi dilakukan untuk menjamin data terbaru dan akurat sesuai kerangka Wilkerstat.</li>
              </ul>
            </ul>
            Tujuan Utama
            <ul>
              <li>Standarisasi wilayah kerja petugas selama SE2026 sehingga tidak ada tumpang tindih atau kekurangan cakupan.</li>
              <li>Pembuatan daftar kontak dan lokasi usaha yang lengkap sebagai dasar pelaksanaan pencacahan.</li>
              <li>Optimalisasi sampling dan kualitas data usaha nasional — wilayah dan unit usaha sudah divalidasi sebelumnya.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
