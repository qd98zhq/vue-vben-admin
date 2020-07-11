import store from '@/store';
import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators';

import { appStore } from '@/store/modules/app';
export interface MenuState {
  // 菜单展开状态
  collapsedState: boolean;
  // 菜单宽度
  menuWidthState: number;
  //  拖拽状态
  dragStartState: boolean;
}
@Module({ namespaced: true, name: 'menu', dynamic: true, store })
class Menu extends VuexModule implements MenuState {
  // 默认展开
  collapsedState = appStore.getProjCfg.menuSetting.collapsed;

  menuWidthState = appStore.getProjCfg.menuSetting.menuWidth;

  dragStartState = false;

  /**
   * @description: 获取窗口名称
   */
  get getCollapsedState() {
    return appStore.getProjCfg.menuSetting.collapsed;
  }

  get getDragStartState() {
    return this.dragStartState;
  }

  get getMenuWidthState() {
    return appStore.getProjCfg.menuSetting.menuWidth;
  }

  @Mutation
  commitDragStartState(dragStart: boolean): void {
    this.dragStartState = dragStart;
  }

  // 改变菜单展开状态
  @Mutation
  commitCollapsedState(collapsed: boolean): void {
    this.collapsedState = collapsed;
    appStore.commitProjCfgState({
      menuSetting: {
        ...appStore.getProjCfg.menuSetting,
        collapsed: collapsed,
      },
    });
  }

  @Mutation
  commitMenuWidthState(menuWidth: number): void {
    this.menuWidthState = menuWidth;
    appStore.commitProjCfgState({
      menuSetting: {
        ...appStore.getProjCfg.menuSetting,
        menuWidth: menuWidth,
      },
    });
  }
}
export { Menu };
export const menuStore = getModule<Menu>(Menu);
