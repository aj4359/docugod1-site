let pdfDoc = null, pageNum = 1;
const canvas = document.getElementById('pdfCanvas'),
      ctx = canvas.getContext('2d');

document.getElementById('fileInput').addEventListener('change', async e => {
  const f = e.target.files[0];
  if (!f) return;
  const buf = await f.arrayBuffer();
  window.__pdfBytes = buf;
  pdfDoc = await pdfjsLib.getDocument({ data: buf }).promise;
  renderPage();
});

async function renderPage() {
  if (!pdfDoc) return;
  const p = await pdfDoc.getPage(pageNum);
  const v = p.getViewport({ scale: 1 });
  canvas.width = v.width;
  canvas.height = v.height;
  await p.render({ canvasContext: ctx, viewport: v }).promise;
}

document.getElementById('exportBtn').onclick = async () => {
  if (!window.__pdfBytes) {
    alert('Upload PDF first');
    return;
  }
  const pdf = await PDFLib.PDFDocument.load(window.__pdfBytes);
  const bytes = await pdf.save();
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'docugod_redacted.pdf';
  a.click();
  URL.revokeObjectURL(url);
};
