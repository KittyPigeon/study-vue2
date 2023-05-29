const hasPermission = {
    install (Vue, options) {
        Vue.directive('has', {
            inserted: (el, binding, vnode)=>{
                filterGlobalPermission(el, binding, vnode);
            }
        });
    }
};
/**
 * 全局权限控制
 */
export const filterGlobalPermission = (el, binding, vnode) => {
    let permissionList = [];
    let authList = JSON.parse(localStorage.getItem('LOGIN_USER_BUTTON_AUTH') || "[]");
    for (let auth of authList) {
        permissionList.push(auth);
    }
    if (!permissionList.length) {
        el.parentNode.removeChild(el);
        return;
    }
    let permissions = [];
    for (let item of permissionList) {
        permissions.push(item.permission);
    }
    if (!permissions.includes(binding.value)) {
        el.parentNode.removeChild(el);
    }
}
export default hasPermission;
