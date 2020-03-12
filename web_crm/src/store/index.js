/*
 * @Author: your name
 * @Date: 2019-12-10 15:54:48
 * @LastEditTime: 2019-12-10 16:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myreact\src\store\index.js
 */
import { createStore ,combineReducers} from 'redux'
import User from './reducers/user'
let reducer = combineReducers({
    User
})
let store = createStore(reducer)
window.store=store
export default store