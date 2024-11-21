import classNames, { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

function cn(...args: ArgumentArray) {
  return twMerge(classNames(args));
}

export default cn;
