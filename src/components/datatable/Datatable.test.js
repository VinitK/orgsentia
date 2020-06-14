import React from 'react';
import { shallow, mount } from 'enzyme';
import Datatable from './Datatable';
import { data } from '../../utils/data';
import { fakeServer } from 'sinon';

const server = fakeServer.create();
server.respondWith("GET", "https://us-central1-orgsentia.cloudfunctions.net/webApi/api/v1/data/UGVjZqUWThUAcjiK7cKL", [200, { 'Content-Type': 'application/json' }, '{}']);

describe("Datatable", () => {

    let datatable = shallow(<Datatable userdata={data.usersByLocation} votedata={data.votesByUsers} />);

    describe("rendering basic table", () => {
        it('renders Table Header - Segment', () => {
            expect(datatable.find("th").at(0).text()).toEqual("Segment");
        });

        it('renders Table Header - Sentiment Score', () => {
            expect(datatable.find("th").at(1).text()).toEqual("Sentiment Score");
        });

        it('renders Selection Button - Participation Percentage', () => {
            expect(datatable.find("th").at(2).text()).toEqual("Participation Percentage");
        });

        it('renders Table Bottom - Overall Sentiment', () => {
            expect(datatable.find(".b td").at(0).text()).toEqual("Overall Sentiment");
        });

        it('renders Table Bottom - 0', () => {
            expect(datatable.find(".b td").at(1).text()).toEqual("0");
        });
    });

    describe("rendering after data is fetched", () => {

        beforeEach(done => {
            datatable = mount(<Datatable userdata={data.usersByLocation} votedata={data.votesByUsers} />);
            server.respond();
            setTimeout(done);
        });

        it("fetches data from server and default display by location", () => {
            let at = 0;
            Object.entries(data.usersByLocation).forEach(([location, value]) => {
                expect(datatable.find("td").at(at).text()).toEqual(location);
                at++;
                expect(datatable.find("td").at(at).text()).toEqual(value.sentimentScore.toString());
                at = at + 2;
            });
        });
    })
});
