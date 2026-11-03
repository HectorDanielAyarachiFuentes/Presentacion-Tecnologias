import pypdf
import glob
import os

pdf_files = sorted(glob.glob('data/*.pdf'))
with open('scratch/pdf_dump.txt', 'w', encoding='utf-8') as out:
    for f in pdf_files:
        out.write('='*60 + '\n')
        out.write(f'FILE: {f}\n')
        out.write('='*60 + '\n')
        reader = pypdf.PdfReader(f)
        for i, page in enumerate(reader.pages):
            out.write(f'\n--- Pagina {i+1} ---\n')
            text = page.extract_text()
            out.write(text if text else '[Sin texto extraible]')
            out.write('\n')

print(f"Dumped {len(pdf_files)} PDFs successfully.")

