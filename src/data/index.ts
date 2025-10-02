// Import types
export type { LearningMaterial } from "./materials/types";
export { materialCategories } from "./materials/types";

// Import all materials
import { programmingHistory } from "./materials/programming-history";
import { pythonIntro } from "./materials/python-intro";
import { pythonBasics } from "./materials/python-basics";
import { variablesDataTypes } from "./materials/variables-datatypes";
import { mathOperations } from "./materials/math-operations";
import { inputOutput } from "./materials/input-output";
import { controlFlow } from "./materials/control-flow";
import { loops } from "./materials/loops";
import { dataStructures } from "./materials/data-structures";
import { functions } from "./materials/functions";
import { listComprehension } from "./materials/list-comprehension";
import { errorHandling } from "./materials/error-handling";

// Export combined materials array
export const materials = [
  programmingHistory,
  pythonIntro,
  pythonBasics,
  variablesDataTypes,
  mathOperations,
  inputOutput,
  controlFlow,
  loops,
  dataStructures,
  functions,
  listComprehension,
  errorHandling,
];
