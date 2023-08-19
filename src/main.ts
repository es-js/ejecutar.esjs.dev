import { createSandbox } from '@es-js/sandbox/render'
import { useShare } from './useShare.ts'

const share = useShare()

const options = share.getOptionsFromUrl()

createSandbox('esjs-sandbox', {
  theme: options.theme,
  hidePreview: options.hidePreview,
  previewTab: options.previewTab,
  files: [
    {
      name: 'codigo.esjs',
      content: share.getCodeFromUrl(),
      main: true,
    },
    {
      name: 'pruebas.esjs',
      content: share.getTestsCodeFromUrl(),
    },
  ],
})
