
import Hello from './components/Hello.vue';

//all vue components
const components = {
  Hello
};


const installComponents = {
  install: Vue => {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  }
};


export default installComponents;