import React from 'react';
import { shallow } from 'enzyme';
import Dimensions from './Dimensions';

describe("Dimensions", () => {
    let dimensions = shallow(<Dimensions data={{ loading: true }} />);

    it('renders Header', () => {
        expect(dimensions.find("p").text()).toEqual("Organization Sentiment Analysis by");
    });

    describe("when rendering selection buttons", () => {
        it('renders Selection Button - Location', () => {
            expect(dimensions.find("Button").at(0).text()).toEqual("Location");
        });

        it('renders Selection Button - Designation', () => {
            expect(dimensions.find("Button").at(1).text()).toEqual("Designation");
        });

        it('renders Selection Button - Department', () => {
            expect(dimensions.find("Button").at(2).text()).toEqual("Department");
        });
    });

    describe("when rendering loading placeholder", () => {
        it('renders loading placeholder spinner', () => {
            expect(dimensions.find("Spinner").exists()).toBe(true);
        });

        it('renders loading placeholder text', () => {
            expect(dimensions.find("h6").text()).toEqual("Fetching data...");
        });
    });
});
