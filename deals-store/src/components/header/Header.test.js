import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import ServiceMenu from './ServiceMenu';

describe('should render Header properly', () => {
    test('should render header', () => {
        const head = shallow(<Header />);
        expect(head.find('header').length).toEqual(1);
    });

    test('should render service menu', () => {
        const serviceMenu = shallow(<ServiceMenu />);
        expect(serviceMenu.find('.rc-service-menu').length).toEqual(1);
        expect(serviceMenu.find('li.rc-service-menu-item').length).toEqual(2);
    });
});