import { configure } from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

// Configure enzyme's adapter
configure({
  adapter: new EnzymeReactAdapter(),
});
