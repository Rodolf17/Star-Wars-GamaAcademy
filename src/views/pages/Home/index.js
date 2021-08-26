import homeSectionOne from '../../components/sections/homeSectionOne';
import homeSectionTwo from '../../components/sections/homeSectionTwo';
import footer from '../../components/footer';
import floatImage from '../../components/float/floatimage';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${ homeSectionOne}
            ${ homeSectionTwo}
            ${floatImage}
            ${footer}
          </div>

      `;

      return view
  },

  after_render: async () => {}
}

export default Home;