import { useEffect } from "react";

export default (effect, destroy, inputs) => {
  useEffect(() => {
    let result;
    effect().then((value) => result = value);
    return () => destroy(result);
  }, inputs);
};