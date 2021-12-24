import * as vscode from 'vscode';
import webScraping from "./WebScraping";

/**
 * Search on Google Scholar.
 */
async function searchBox() {
    var searchQuery = await vscode.window.showInputBox({
        placeHolder: "Search query",
        prompt: "Search on Semantic Scholar"
    });

    if (searchQuery !== undefined) {
        searchQuery = searchQuery.replace(/\s+/g, "+");
        webScraping(searchQuery);
    }
}

export default searchBox;
