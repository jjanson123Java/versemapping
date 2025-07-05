/*!
 * docx.js UMD Build (Simulated)
 * Replace with real UMD build from source using Rollup/Webpack.
 */
window.docx = {
    Document: function(config) { return config; },
    Paragraph: function(content) { return content; },
    Packer: {
        toBlob: async function(doc) {
            return new Blob(["Simulated DOCX content"], {
                type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
        }
    },
    HeadingLevel: {
        TITLE: "TITLE",
        HEADING_1: "HEADING_1",
        HEADING_2: "HEADING_2"
    }
};
