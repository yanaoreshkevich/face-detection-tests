class FaceDetectionPage {

    getFacedetectionTab = () => cy.contains('nav div', 'Face detection');
    getUploadFileButton = () => cy.contains('button', 'Upload a file');
    getPrivacyPolicyConfirmButton = () => cy.contains('button', 'Confirm');
    getFileInput = () => cy.get('input[type="file"]');
    getCarouselMainImg = () => cy.get('[class*="Carousel_main"] img');

    
    visit = () => cy.visit('/');
    
    selectFaceDetectionTab() {
        this.getFacedetectionTab().click();
        return this;
    }

    clickUploadFileButton() {
        this.getUploadFileButton().click();
        return this;
    }

    clickPrivacyPolicyConfirmButton() {
        this.getPrivacyPolicyConfirmButton().click();
        return this;
    }

    selectImg(fileName) {
        this.getFileInput()
        .selectFile(`cypress/fixtures/${fileName}`, { force: true });
        return this;
    }

}

export default FaceDetectionPage;