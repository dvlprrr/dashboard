export const selectAllPosition = state => state.position

export const selectVisiblePosition = (state, filters = []) => {
    if (state.length === 0) {
        return state.positions
    }
    return filters.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)
        return filters.every(filter => posFilters.includes(filter))
    })
}