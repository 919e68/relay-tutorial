/**
 * @flow
 * @relayHash 40ccf58648f893d848b6902ebbaae979
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {|
  +todo: ?{| |};
|};
*/


/*
query appQuery {
  todo {
    ...Todo_todo
    id
  }
}

fragment Todo_todo on Todo {
  id
  text
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Todo_todo",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appQuery {\n  todo {\n    ...Todo_todo\n    id\n  }\n}\n\nfragment Todo_todo on Todo {\n  id\n  text\n}\n"
};

module.exports = batch;
