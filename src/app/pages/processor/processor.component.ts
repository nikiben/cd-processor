import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassifyService } from '@app/service/classify.service';

@Component({
    selector: 'app-processor',
    templateUrl: './processor.component.html',
    styleUrls: ['./processor.component.css']
})
export class ProcessorComponent implements OnInit {

    public processForm: FormGroup;
    public redactedText: String = '';

    private testInput = 'Hello world "Boston Red Sox" \'Pepperoni Pizza\', \'Cheese Pizza\', beer';
    private testDoc = `News, Hello world The Boston Red Sox code name 'Pepperoni Pizza' are an American professional baseball team based in Boston, Massachusetts. The 'Pepperoni Pizza' compete in Major League Baseball as a member club of the American League East division which after they had a beer. The 'Pepperoni Pizza' have won nine 'Cheese Pizza' championships, tied for the third-most of any MLB team, and they have played in 13.`;

    constructor(private fb: FormBuilder, private classifySvc: ClassifyService) {
        this.processForm = fb.group({
            keywords: [this.testInput, [Validators.required] ],
            document: [this.testDoc, [Validators.required] ]
        });
    }

    ngOnInit() { }


    /**
     * This method will process the form input from UI
     * and trigger the service to radact the text document 
     */
    classify() {
        
        // ensure form is valid
        if (this.processForm.valid) {
            let keywordText = this.processForm.value.keywords;
            let documentText = this.processForm.value.document;

            // process document text
            this.redactedText = this.classifySvc.processDocument(keywordText, documentText);
        }
    }

    clearForm() {
        this.processForm.reset();
        this.redactedText = '';
    }

    getName(formName: any): any {
        return this.processForm.get(formName);
    }
}
