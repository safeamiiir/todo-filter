// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { configure } from '@testing-library/dom';

// because I has to be connected to VPN my net speed decrease I should make it more than usual
configure({ asyncUtilTimeout: 7000 });
