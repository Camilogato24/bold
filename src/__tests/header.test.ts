import type { ShallowWrapper } from 'enzyme'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Header from '../components/header/header'
import { FilterProvider } from './../context/filterProvider'

Enzyme.configure({ adapter: new Adapter() })


describe('should rendered header components', () => {
    it('renders HeaderLogout', async () => {
        const wrapper = shallow(
            <FilterProvider>
                <Header />
            </ FilterProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })

})