// @flow
import type { XpathSubject } from './typedefs';

export type PromiseCapabilities = {| instance: Promise<*>, resolve: any => any, fail: any => any |};

function abstract() {
  throw new Error('Abstract method not implemented');
}

function createPromiseCapabilities(): PromiseCapabilities {
  let resolve, fail;
  const instance = new Promise((pr, pf) => {
    resolve = pr;
    fail = pf;
  });

  // $FlowFixMe: `resolve` and `fail` are defined at this point
  return {
    instance,
    resolve,
    fail,
  };
}

export var highlightSubjects: Array<XpathSubject>

function setHighlightSubjects(value) {
  highlightSubjects = value.slice(0);
}

export { abstract, createPromiseCapabilities, setHighlightSubjects };
