export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-js='${attr}']`);
    return wrapper;
}