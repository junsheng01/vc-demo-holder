import React from 'react';
import {act, render, waitFor} from '@testing-library/react';
import  AcceptCredentials from './AcceptCredentials';
import SdkService from '../utils/sdkService';
import userEvent from '@testing-library/user-event';



describe('Test ShareCredential component', ()=>{

    beforeEach(()=>{
        window.sdk = new SdkService();
        jest.spyOn(SdkService.prototype, 'fromLoginAndPassword').mockImplementation((username, password) => true);
        jest.spyOn(console, 'log').mockImplementation();
    });

    describe('UI tests', ()=>{
        
    })
})