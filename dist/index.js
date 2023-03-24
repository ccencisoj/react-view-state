"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViewState = void 0;
const zustand_1 = require("zustand");
function createViewState({ withInitialState, }) {
    const viewState = (0, zustand_1.create)(() => withInitialState);
    const useViewState = () => [
        viewState(),
        viewState.setState,
    ];
    return useViewState;
}
exports.createViewState = createViewState;
