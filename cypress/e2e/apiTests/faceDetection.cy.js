/// <reference types="cypress" />

describe('Face Detection tab', () => {

  it('return FACER_OK for valid .jpg image', () => {

    cy.fixture('facePhoto.jpg', 'base64').then((imageBase64) => {

      cy.fixture('faceDetectionRequest.json').then((body) => {

        body.image = imageBase64;

        cy.detectFaceApi(body).then((response) => {

          expect(response.status).to.eq(200);
          expect(response.body.msg).to.eq('FACER_OK');

        });

      });

    });

  });

});


