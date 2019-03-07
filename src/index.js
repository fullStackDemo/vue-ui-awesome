
import Hello from './components/Hello.vue';
import Waterfall from './components/Waterfall/src/index.vue';

//all vue components
const components = {
  Hello,
  Waterfall
};


const installComponents = {
  install: Vue => {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }
};


export default installComponents;