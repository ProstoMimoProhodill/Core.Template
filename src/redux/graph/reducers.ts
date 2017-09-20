import {IEdgeView, IGraphView, IVertexView} from "../../models/graph";

import {
  ADD_VERTEX,
  ADD_EDGE,
  REMOVE_VERTEX,
  REMOVE_EDGE
} from './actions';
import {combineReducers} from "redux";
import {IStore} from "../../types/IStore";
import {RootState} from "../rootReducer";
import {IGraphAction, IGraphActionEdge, IGraphActionVertex} from "../../types/IGraphAction";

const initialState: IGraphView = {
  vertices: [],
  edges: []
};

export type State = {
  readonly graph: IGraphView,
};

export const reducer = combineReducers<RootState>({
  graphReducer(state: IGraphView = initialState, action: IGraphAction): IGraphView {
    switch (action.type) {
      case ADD_VERTEX:
        return {
          vertices: [
            ...state.vertices,
            (<IGraphActionVertex> action).vertex
          ],
          edges: [
            ...state.edges
          ]
        };
      case REMOVE_VERTEX:
        return {
          vertices: [
            ...state.vertices.filter(v => v.id != (<IGraphActionVertex> action).vertex.id),
          ],
          edges: [
            ...state.edges.filter(e => e.vertexTwo != (<IGraphActionVertex> action).vertex.id && e.vertexOne != (<IGraphActionVertex> action).vertex.id)
          ]
        };
      case ADD_EDGE:
        return {
          vertices: [
            ...state.vertices
          ],
          edges: [
            ...state.edges,
            (<IGraphActionEdge> action).edge
          ],
        };
      case REMOVE_EDGE:
        return {
          vertices: [
            ...state.vertices
          ],
          edges: [
            ...state.edges.filter(e => e.vertexOne != (<IGraphActionEdge> action).edge.vertexOne && e.vertexTwo != (<IGraphActionEdge> action).edge.vertexTwo),
          ]
        };
      default:
        return state;
    }
  }
});