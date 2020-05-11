import {
  Inflector,
  defaultRules,
  pluralize,
  singularize
} from "./lib/system";

Inflector.defaultRules = defaultRules;

import "./lib/ext/string";

export default Inflector;

export {
  pluralize,
  singularize,
  defaultRules
};
