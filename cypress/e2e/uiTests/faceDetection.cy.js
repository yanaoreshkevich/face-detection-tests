/// <reference types="cypress" />

import FaceDetectionPage from "../../pageObjects/FaceDetectionPage";

describe('Face Detection tab', () => {

    const faceDetectionPage = new FaceDetectionPage();

    beforeEach(() => {
        faceDetectionPage.visit();
    })

    it('User uploads image and preview is displayed', () => {
        faceDetectionPage
        .selectFaceDetectionTab()
        .clickUploadFileButton()
        .clickPrivacyPolicyConfirmButton()
        .selectImg('facePhoto.jpg')

        faceDetectionPage
        .getCarouselMainImg()
        .invoke('attr', 'alt')
        .should('include', 'facePhoto.jpg');

    })

    afterEach(() => {
        cy.clearCookies();
         cy.clearLocalStorage();
});
})