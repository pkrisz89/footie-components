import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

it('should not explode :)', () => {
    const comp = shallow(
        <Button>Press me</Button>
    );

    expect(comp.find('button')).toHaveLength(1);
});