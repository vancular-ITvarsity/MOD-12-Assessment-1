
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    const storedApiKey = localStorage.getItem("apiKey");
    if (!storedApiKey) {
        // Handle the case where API key is not available
        redirectToApiKeyEntryPage();
    }
    return storedApiKey;
}

function redirectToApiKeyEntryPage() {
    // You may want to use a more secure way to handle redirection
    window.location.href = "enter-api-key.html";
}
