/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type User_user = {|
  +id: string;
  +username: ?string;
  +todos: ?{| |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "User_user",
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
      "name": "username",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "TodoConnection",
      "name": "todos",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TodoList_todos",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User"
};

module.exports = fragment;
