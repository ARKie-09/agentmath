/* MathJax configuration for MkDocs Material.
   Handles re-rendering on client-side navigation (SPA behaviour). */
window.MathJax = {
  tex: {
    inlineMath:  [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes:     true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass:  ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
