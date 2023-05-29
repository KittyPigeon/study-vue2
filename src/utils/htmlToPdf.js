import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

const htmlToPdf = {
  install(Vue) {
    console.log(Vue)
    Vue.prototype.getPdf = function (options) {
      html2canvas(document.getElementById(options.id), { allowTaint: true }).then((canvas) => {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = (contentWidth / 841.89) * 592.28
        let leftHeight = contentHeight
        let PDF = new JsPDF('l', 'pt', 'a4')
        let position = 0
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let imgWidth = 841.89
        let imgHeight = (841.89 / contentWidth) * contentHeight
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 592.28
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save('表格' + '.pdf')
      })
    }
  }
}

export default htmlToPdf
