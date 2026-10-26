# golden-template-ui-docs

UI catalog for [Golden Template](https://github.com/devTugu/golden-template).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3002/docs (runs beside golden-template on :3000).

Re-sync from golden-template:

```bash
# in golden-template repo
bash scripts/populate-golden-template-ui-docs.sh /path/to/golden-template-ui-docs

# in this repo (scripts copied on sync)
GOLDEN_TEMPLATE_ROOT=/path/to/golden-template bash scripts/populate-golden-template-ui-docs.sh .
```
