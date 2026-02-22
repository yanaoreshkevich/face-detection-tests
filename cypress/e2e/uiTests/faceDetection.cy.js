/// <reference types="cypress" />

import FaceDetectionPage from "../../pageObjects/FaceDetectionPage";

describe('Face Detection tab', () => {

    const faceDetectionPage = new FaceDetectionPage();

    beforeEach(() => {
        faceDetectionPage.visit();
    })

    it('User uploads .jpg image and preview is displayed', () => {

        cy.fixture('facePhoto.jpg', 'base64').then((imageBase64) => {

        faceDetectionPage
        .selectFaceDetectionTab()
        .clickUploadFileButton()
        .clickPrivacyPolicyConfirmButton()
        .selectImg('facePhoto.jpg');

        faceDetectionPage
        .getCarouselMainImg()
        .should('be.visible')
        .invoke('attr', 'src')
        .should('include', imageBase64.substring(0, 100));
        })
    })

})