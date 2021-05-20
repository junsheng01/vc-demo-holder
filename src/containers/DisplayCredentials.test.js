import React from 'react'
import { render } from '@testing-library/react';
import  DisplayCredentials from './DisplayCredentials';


describe('Test DisplayCredentials component', () => {
    console.log = jest.fn()
    test('DisiplayCredentials can render', () => {
        const testCredential = {
            credentialSubject: {
                data: {
                    givenName: 'testGivenName',
                    familyName: 'testGivenFamilyName',
                    hasIDDocument: {
                        hasIDDocument: {
                            documentType: "testType"
                        }
                    }
                },
            }
        }
        const { getByText } = render(<DisplayCredentials cred={testCredential} />);

        expect(getByText('Given Name:')).toBeTruthy();
        expect(getByText(testCredential.credentialSubject.data.givenName)).toBeTruthy();
        expect(getByText('Family Name:')).toBeTruthy();
        expect(getByText(testCredential.credentialSubject.data.familyName)).toBeTruthy();
        expect(getByText('Document Type:')).toBeTruthy();
        expect(getByText(testCredential.credentialSubject.data.hasIDDocument.hasIDDocument.documentType)).toBeTruthy()
    })
})