import React from 'react';
import {render, act} from '@testing-library/react-native';
import Home from '../../../presentation/screens/Home';
import {MockedProvider} from '@apollo/client/testing';
import {GET_PARTICIPANTS} from '../../../data/queries';

describe('Home screen', () => {
  it('can list each participant', async () => {
    /*TODO TASK 07*/
    const results = [{name: 'Rick Sanchez'}, {name: 'Morty Smith'}];

    const {getByText, getByTestId} = render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_PARTICIPANTS,
            },
            result: {
              data: {
                characters: {
                  results,
                },
              },
            },
          },
        ]}
        addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // expect...
  });
});
