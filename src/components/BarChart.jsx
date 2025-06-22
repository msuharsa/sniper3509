import BarChartCustom from "./BarChartCustom";

const Dashboard = () => {
  return (
    <>
      <h2>Rekap Kabupaten</h2>
      <BarChartCustom
        apiUrl="https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKab"
        indexField="kodeKab"
        valueField="persenSentra"
        legendText="Kode Kab"
        highlightCode="3509"
      />

      <h2>Rekap Kecamatan</h2>
      <BarChartCustom
        apiUrl="https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKec"
        indexField="namaKecamatan"
        valueField="persenSentra"
        legendText="Kecamatan"
        highlightCode="Sumbersari"
      />
    </>
  );
};
