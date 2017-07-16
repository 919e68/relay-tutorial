/**
 * @flow
 * @relayHash 34705ffd27d4bf7a7e8346edc5f28ce8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type usersQueryResponse = {|
  +users: ?{| |};
|};
*/


/*
query usersQuery {
  users {
    ...list_users
  }
}

fragment list_users on UserConnection {
  edges {
    node {
      ...user_user
      id
    }
  }
}

fragment user_user on User {
  id
  username
  todos {
    ...list_todos
  }
}

fragment list_todos on TodoConnection {
  edges {
    node {
      ...todo_todo
      id
    }
  }
}

fragment todo_todo on Todo {
  id
  text
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "usersQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "list_users",
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
  "name": "usersQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "usersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "node",
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
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "TodoEdge",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Todo",
                            "name": "node",
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
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query usersQuery {\n  users {\n    ...list_users\n  }\n}\n\nfragment list_users on UserConnection {\n  edges {\n    node {\n      ...user_user\n      id\n    }\n  }\n}\n\nfragment user_user on User {\n  id\n  username\n  todos {\n    ...list_todos\n  }\n}\n\nfragment list_todos on TodoConnection {\n  edges {\n    node {\n      ...todo_todo\n      id\n    }\n  }\n}\n\nfragment todo_todo on Todo {\n  id\n  text\n}\n"
};

module.exports = batch;
