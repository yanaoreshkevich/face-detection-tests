/// <reference types="cypress" />

import FaceDetectionPage from "../../pageObjects/FaceDetectionPage";

describe('Face Detection tab', () => {

    const faceDetectionPage = new FaceDetectionPage();

    beforeEach(() => {
        faceDetectionPage.visit();
    })

    it('User uploads .jpg image and preview is displayed', () => {

        let initialSrc;

        faceDetectionPage
        .selectFaceDetectionTab()
        .getCarouselMainImg()
        .invoke('attr', 'src')
        .then((src) => {
            initialSrc = src;
        });

        faceDetectionPage
        .clickUploadFileButton()
        .clickPrivacyPolicyConfirmButton()
        .selectImg('facePhoto.jpg');

        faceDetectionPage
        .getCarouselMainImg()
        .should('be.visible')
        .invoke('attr', 'src')
        .should('not.eq', initialSrc);
    })
})