import React from 'react';
import {act, render, waitFor} from '@testing-library/react';
import  AcceptCredentials from './AcceptCredentials';
import SdkService from '../utils/sdkService';
import userEvent from '@testing-library/user-event';
import {storeSignedVCs} from '../utils/apiService';



describe('Test Home Component')