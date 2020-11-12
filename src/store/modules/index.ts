import { Module, VuexModule } from 'vuex-module-decorators';

@Module
export default class TodoModule extends VuexModule {
    items: string[] = []
}
