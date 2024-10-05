function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range); // Select the code
    document.execCommand("copy"); // Copy the selected code
    window.getSelection().removeAllRanges(); // Deselect the code
    alert("Code copied to clipboard!"); // Alert user
}