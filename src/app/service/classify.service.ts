import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClassifyService {

    constructor() { }

    /**
     * This method will process the classified document and censor
     * the based on the provided keywords and phrases.
     * @param keyword is the input string of censored phrases separated by spaces or commas
     * @param document is the document text that needs to be radacted
     */
    processDocument(keyword: string, document: string) {
        let input: string[] = this.sanitizeKeyword(keyword);
        let doc = document;

        console.log('Keywords => ', input);

        // iterate over the list of censor keywords/phrases
        input.forEach(element => {
            doc = doc.split(element).join('XXXX');
            console.log(doc);
        });

        return doc;
    }

    /**
     * Get list of keywords from input string
     * @param keywords return list of keywords
     */
    private sanitizeKeyword(keywords: string): string[] {
        console.log('Before =>', keywords);

        // using regular expression to split input text
        // - based on comma or space delimited
        let regWords = keywords.split(/,|(?=\s(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$))(?=\s+(?=(?:[^\']*\'[^\']*\')*[^\']*$))([ ,]+)|[,]$/);

        // couldn't get regex to work properly, so doing workaroud below
        // - by rmeoving empty spaces
        return regWords.filter(word => word && word.trim().length != 0);
        // return keywords.split(/"[^"]+"|“[^"]+”|[ ,]/);
        // return keywords.split(/[ ,]+/);
        //(["'])(?:\\\1|.)*?\1/
        //
    }


}
