

export * from "..";
export * from "../_app";

function get({ prop }) {

  return prop;
}

export const useStore = () => {



  return {
    get: get({})
  };
};
